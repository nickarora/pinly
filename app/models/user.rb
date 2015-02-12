# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  fname           :string           not null
#  lname           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  description     :text
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  image_url       :string           default("http://res.cloudinary.com/pinly/image/upload/v1423542388/csnjhadzhi8d3sf8srh4.jpg")
#  cloudinary_id   :string           default("csnjhadzhi8d3sf8srh4")
#

class User < ActiveRecord::Base

	attr_reader :password
	
	validates :username, :fname, :lname, :password_digest, :session_token, 
						presence: true
	validates :username, :session_token, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  has_many :boards, dependent: :destroy

  has_many :follows, dependent: :destroy
  has_many :followed_boards, 
           through: :follows,
           source: :board

  has_many :likes, dependent: :destroy

  has_many :comments, dependent: :destroy

  has_many :notifications, dependent: :destroy

  has_many :boardpins,
           through: :boards,
           source: :boardpins

  has_many :pins,
           through: :boardpins,
           source: :pin

  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user.nil? || !user.is_password?(password) ? nil : user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password? password
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save!
  rescue
    retry
  end

  private

    def ensure_session_token
      self.session_token ||= SecureRandom::urlsafe_base64
    end

  # end of private
end
