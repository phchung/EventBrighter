class Event < ActiveRecord::Base

validates :title,:location,:category,:description,:picture_url,:price,:start_date,
          :end_date,:start_time,:end_time,:user_id,:lat,:lng, presence: true

belongs_to :user

has_many :purchasers, dependent: :destroy,
  primary_key: :id,
  foreign_key: :purchaser_id,
  class_name: 'Relationship'

has_many :followers, dependent: :destroy,
    primary_key: :id,
    foreign_key: :bookmark_id,
    class_name: 'Bookmark'

  def self.upcoming_shows(date)
    self.where("start_date > ?",date)
  end

  def self.sort_date(date)
    if date == 'Today'
      self.where("start_date > ?", Time.now())
          .where("start_date < ?", Time.now() + 1.day)
    elsif date == 'This Week'
      self.where("start_date > ?", Time.now())
          .where("start_date < ?", Time.now() + 1.week)
    elsif date == 'This Month'
      self.where("start_date > ?", Time.now())
          .where("start_date < ?", Time.now() + 1.month)
    end
  end

  def self.in_bounds(bounds)
   self.where("lat < ?", bounds["northEast"]["lat"])
       .where("lat > ?", bounds["southWest"]["lat"])
       .where("lng > ?", bounds["southWest"]["lng"])
       .where("lng < ?", bounds["northEast"]["lng"])
  end

  def self.category(category)
    self.where(:category => category)
  end

  def self.user_shows(current_user)
    arr = []
    current_user.shows.each do |show|
      arr.push(show.show_id)
    end
    self.where(id:arr)
  end
end
