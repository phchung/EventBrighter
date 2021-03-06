class User < ActiveRecord::Base

validates :username, :session_token, :password_digest, presence: true
validates :password, length: {minimum: 6, allow_nil: true}
validates :username, uniqueness: true

has_many :created_events, foreign_key: "user_id", class_name: "Event"

has_many :bookmarks, dependent: :destroy,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: 'Bookmark'

has_many :shows, dependent: :destroy,
  primary_key: :id,
  foreign_key: :purchaser_id,
  class_name: 'Relationship'

attr_reader :password
after_initialize :ensure_session_token

 def password=(password)
   @password = password
   self.password_digest = BCrypt::Password.create(password)
 end

 def is_password?(password)
   BCrypt::Password.new(self.password_digest).is_password?(password)
 end

 def self.find_by_credentials(username,password)
   user = User.find_by(username: username)
   return nil unless user && user.is_password?(password)
   user
 end

 def restore_token!
   self.session_token = SecureRandom.urlsafe_base64(16)
   self.save!
   self.session_token
 end

 private

 def ensure_session_token
   self.session_token ||= SecureRandom.urlsafe_base64(16)
 end

end
