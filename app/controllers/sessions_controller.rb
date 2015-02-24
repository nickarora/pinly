class SessionsController < ApplicationController

	def new
    if current_user
      redirect_to root_url
    else
      @user = User.new
      render :new
    end
  end

  def create
    @user = User.find_by_credentials(session_params[:username],
                                     session_params[:password])
    if @user.nil?
      @user = User.new(session_params)
      flash[:errors] = ["Invalid username and/or password."]
      render :new
    else
      log_in!(@user)
      redirect_to root_url
    end
  end

  def destroy
    log_out!
    render json: { logged_out: true }
  end

  private

    def session_params
      params.require(:session).permit(:username, :password)
    end

  # end of private
end
