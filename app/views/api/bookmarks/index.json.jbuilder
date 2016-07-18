json.array! @bookmarks do |bookmark|
    json.extract! bookmark, :bookmark_id
end
