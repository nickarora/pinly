module Api
  class NotificationsController < ApiController

  	def create
      @notification = Notification.new(notification_params)
      
      if @notification.save
        ch = "pinly-channel-#{@notification.receiver.id}"
        Pusher[ch].trigger('notif-push', {})
        render json: @notification
      else
        render json: @notification.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      @notification = Notification.find(params[:id])
      @notification.try(:destroy)
      render json: {}
    end

    def index
      @notifications = Notification
        .includes(:boardpin, :board, :pin, :user, :receiver)
        .where(receiver_id: current_user.id)
      render :index
    end

  	private

  	def notification_params
  		params.require(:notification).permit(:message, :status, :boardpin_id, :user_id, :receiver_id);
  	end

  end
end