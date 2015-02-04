module Api
  class BoardsController < ApiController

  	def create
      @board = current_user.boards.new(board_params)

      if @board.save
        render json: @board
      else
        render json: @board.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      @board = current_user.boards.find(params[:id])
      @board.try(:destroy)
      render json: {}
    end

    def index
      @boards = current_user.boards
      render :index
    end

    def show
    	# @board = Board.includes(:pins).find(params[:id])
    	@board = Board.find(params[:id])
      render :show
    end

    def update
      @board = Board.find(params[:id])

      if @board.update(board_params)
        render json: @board
      else
        render json: @board.errors.full_messages, status: :unprocessable_entity
      end
    end

    private

    def board_params
      params.require(:board).permit(:title, :description)
    end

  end
end