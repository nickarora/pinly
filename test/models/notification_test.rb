# == Schema Information
#
# Table name: notifications
#
#  id          :integer          not null, primary key
#  status      :string           default("unviewed")
#  message     :string           not null
#  boardpin_id :integer          not null
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class NotificationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
