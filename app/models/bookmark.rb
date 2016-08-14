class Bookmark < ActiveRecord::Base

validates :user_id, :bookmark_id, presence: true

belongs_to :follower, class_name:"User", dependent: :destroy
belongs_to :bookmark, class_name:"Event", dependent: :destroy

  def self.user_bound(user)
    self.where(:user_id => user)
  end

end
