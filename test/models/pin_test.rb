# == Schema Information
#
# Table name: pins
#
#  id            :integer          not null, primary key
#  url           :string           not null
#  image_url     :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  cloudinary_id :integer
#

require 'test_helper'

class PinTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
