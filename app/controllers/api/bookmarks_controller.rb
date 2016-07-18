class Api::BookmarksController < ApplicationController

  def index
    @bookmarks = Bookmark.all.user_bound(current_user.id)
    render 'api/bookmarks/index'
  end

  def create
    @bookmark = Bookmark.create(bookmark_params)
    if @bookmark.save
      render 'api/bookmarks/show'
    end
  end

  def destroy
    userId = params[:bookmark][:user_id]
    bookmarkId =   params[:bookmark][:bookmark_id]
    @bookmark = Bookmark.all.find_by(:user_id => userId,
      :bookmark_id => bookmarkId)
    render 'api/bookmarks/show' if @bookmark.destroy
  end

  private

  def bookmark_params
    params.require(:bookmark).permit(
      :user_id,:bookmark_id
    )
  end

end
