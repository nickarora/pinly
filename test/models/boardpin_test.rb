# == Schema Information
#
# Table name: boardpins
#
#  id          :integer          not null, primary key
#  board_id    :integer          not null
#  pin_id      :integer          not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class BoardpinTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
