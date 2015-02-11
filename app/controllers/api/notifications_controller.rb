module Api
  class NotificationsController < ApiController

  	def create
      @notification = Notification.new(notification_params)
      
      if @notification.save
        # Pusher.trigger('pinly-channel-' + @notification.receiver.id.to_s, 'notif-push', {:message => 'notification saved!'});
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
        .includes(:boardpin, :board, :pin, :user)
        .where(user_id: current_user.id)
      render :index
    end

  	private

  	def notification_params
  		params.require(:notification).permit(:message, :status, :boardpin_id, :user_id);
  	end

  end
end