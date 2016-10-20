class Bookmark < ActiveRecord::Base

validates :user_id, :bookmark_id, presence: true
belongs_to :follower, class_name:"User"
belongs_to :bookmark, class_name:"Event"

  def self.user_bound(user)
    self.where(:user_id => user)
  end
end
