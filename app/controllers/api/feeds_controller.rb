module Api
  class FeedsController < ApiController

    def index
    	board_ids = Follow.where(user_id: current_user.id).pluck(:board_id)
    	@boardpins = Boardpin.where(board_id: board_ids).sort_by(&:created_at).reverse
      render :index
    end

  end
end