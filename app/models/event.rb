class Event < ActiveRecord::Base

validates :title,:location,:category,:description,:picture_url,:price,:start_date,
          :end_date,:start_time,:end_time,:user_id, presence: true

belongs_to :user

has_many :purchasers, dependent: :destroy,
  primary_key: :id,
  foreign_key: :purchaser_id,
  class_name: 'Relationship'

has_many :followers, dependent: :destroy,
    primary_key: :id,
    foreign_key: :bookmark_id,
    class_name: 'Bookmark'

end
