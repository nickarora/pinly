module Api
  class FeedsController < ApiController

    def index
    	board_ids = Follow.where(user_id: current_user.id).pluck(:board_id)
    	
    	@boardpins = Boardpin
    								.where(board_id: board_ids)
    								.order("created_at DESC")
    								.page(params[:page])
    								.per(12);

    	@page = params[:page]
    	@total_pages = @boardpins.total_pages
    								
      render :index
    end

  end
end