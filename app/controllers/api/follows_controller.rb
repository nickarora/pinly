module Api
  class FollowsController < ApiController

  	def create
      @follow = Follow.new(follow_params)

      if @follow.save
        render json: @follow
      else
        render json: @follow.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      @follow = Follow.find(params[:id])
      @follow.try(:destroy)
      render json: {}
    end

  	private

  	def follow_params
  		params.require(:follow).permit(:user_id, :board_id);
  	end

  end
end