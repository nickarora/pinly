module Api
  class BoardpinsController < ApiController

  	def create
      @boardpin = Boardpin.new(boardpin_params)

      if @boardpin.save
        render json: @boardpin
      else
        render json: @boardpin.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      @boardpin = Boardpin.find(params[:id])
      @boardpin.try(:destroy)
      render json: {}
    end

  	private

  	def boardpin_params
  		params.require(:boardpin).permit(:board_id, :pin_id);
  	end

  end
end