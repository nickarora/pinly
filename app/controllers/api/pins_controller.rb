module Api
  class PinsController < ApiController

  	def create
      @pin = Pin.new(pins_params)
      
      if @pin.save
        render json: @pin
      else
        render json: @pin.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      @pin = Pin.find(params[:id])
      @pin.try(:destroy)
      render json: {}
    end

  	private

  	def pins_params
  		params.require(:pins).permit(:url, :image_url);
  	end

  end
end