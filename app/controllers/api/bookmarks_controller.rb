class Api::BookmarksController < ApplicationController

  def index

  end
  
  def create

  end

  def destroy

  end

  private

  def bookmark_params
    params.require(:bookmark).permit(
    :user_id,:bookmark_id
    )
  end
end
