class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  
  helper_method :current_user, :signed_in?

  def signed_in?
  	!!current_user
  end

  def current_user
    User.find_by(session_token: session[:token])
  end

  def log_in!(user)
    user.reset_session_token!
    session[:token] = user.session_token
  end

  def log_out!
    current_user.reset_session_token! if current_user
    session[:token] = nil
  end

end
