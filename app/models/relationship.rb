class Relationship < ActiveRecord::Base

validates :show_id, :purchaser_id, presence: true

belongs_to :purchaser, class_name:"User"
belongs_to :show, class_name:"Event"
end
