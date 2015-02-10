# == Schema Information
#
# Table name: likes
#
#  id          :integer          not null, primary key
#  user_id     :integer          not null
#  boardpin_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Like < ActiveRecord::Base
	validates :user, :boardpin, presence: true
	belongs_to :user
	belongs_to :boardpin
end
