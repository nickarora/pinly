module Api
  class UsersController < ApiController

    def show
    	@user = User.find(params[:id])
    	@boards = @user.boards
      @logged_in = (@user == current_user)
      render :show
    end

    def edit
      @user = User.find(params[:id])
      @logged_in = (@user == current_user)
      render :edit
    end

    def update
      @user = User.find(params[:id])

      if @user.update(user_params)
        render json: @user
      else
        render json: @user.errors.full_messages, status: :unprocessable_entity
      end
    end

    private

    def user_params
      params.require(:user).permit(:fname, :lname, :description)
    end

  end
end