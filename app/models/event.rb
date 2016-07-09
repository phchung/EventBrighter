class Event < ActiveRecord::Base

validates :title,:location,:category,:description,:picture_url,:price,:start_date,
          :end_date,:start_time,:end_time,:user_id, presence: true

belongs_to :user
has_many :relationships
has_many :purchasers, through: :relationships, source: :purchaser

end
