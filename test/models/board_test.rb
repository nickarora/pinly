# == Schema Information
#
# Table name: boards
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :text
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class BoardTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
