module Api
  class LikesController < ApiController

  	def create
      @like = Like.new(like_params)

      if @like.save
        Pusher.trigger('pinly-channel-' + @like.boardpin.user.id.to_s, 'notif-push', {:message => 'Like saved!'});
        render json: @like
      else
        render json: @like.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      @like = Like.find(params[:id])
      @like.try(:destroy)
      render json: {}
    end

  	private

  	def like_params
  		params.require(:like).permit(:user_id, :boardpin_id);
  	end

  end
end