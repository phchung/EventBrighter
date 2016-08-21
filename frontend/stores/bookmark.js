var Dispatcher = require('../dispatcher/dispatcher'),
    Store = require('flux/utils').Store,
    BookmarkConstants = require('../constants/bookmarkConstants')

_bookmarks = []

var BookmarkStore = new Store(Dispatcher)

_setBookmarks = function(bookmarks){
  _bookmarks = []
  bookmarks.forEach(function(bookmark){
    _bookmarks.push(bookmark.bookmark_id)
  })
}

_setBookmark = function(bookmark){
  _bookmarks.push(bookmark.bookmark_id)
}

_removeBookmark = function(bookmark){
  _bookmarks.forEach(function(mark,i){
    if(bookmark.bookmark_id === mark){
      _bookmarks.splice(i,1)
      return
    }
  })
}

_clearBookmarks = function(){
  _bookmarks = []
}

BookmarkStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case BookmarkConstants.BOOKMARKS_RECEIVED:
    _setBookmarks(payload.bookmarks)
    this.__emitChange()
    break;

    case BookmarkConstants.BOOKMARK_RECEIVED:
    _setBookmark(payload.bookmark)
    this.__emitChange()
    break;

    case BookmarkConstants.REMOVE_BOOKMARK:
    _removeBookmark(payload.bookmark)
    this.__emitChange()
    break;

    case BookmarkConstants.CLEAR_BOOKMARKS:
    _clearBookmarks()
    this.__emitChange()
    break;
  }
}

BookmarkStore.includes = function(id){
  if(_bookmarks.includes(id)){
    return true
  }
  return false
}

BookmarkStore.all = function(){
  return _bookmarks;
}

module.exports = BookmarkStore;
