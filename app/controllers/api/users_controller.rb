class Api::UsersController < ApplicationController

  def create
    user = User.create(user_params)
    if user.save
      render "api/users/show"
    else
      render json: user.errors, status: 401
    end
  end

  private

  def user_params
    params.require(:user).permit(
    :username,:password
    )
  end

end
