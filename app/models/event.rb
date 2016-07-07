class Event < ActiveRecord::Base

validates :title,:location,:category,:description,:picture_url,:price,:start_date,
          :end_date,:start_time,:end_time,:user_id, presence: true

belongs_to :user

end
