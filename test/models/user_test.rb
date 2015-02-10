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

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
