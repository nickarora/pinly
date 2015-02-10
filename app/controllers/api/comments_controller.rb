module Api
  class CommentsController < ApiController

  	def create
      @comment = Comment.new(comment_params)

      if @comment.save
        render json: @comment
      else
        render json: @comment.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      @comment = Comment.find(params[:id])
      @comment.try(:destroy)
      render json: {}
    end

  	private

  	def comment_params
  		params.require(:comment).permit(:boardpin_id, :user_id, :body);
  	end

  end
end