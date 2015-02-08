# == Schema Information
#
# Table name: follows
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  board_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Follow < ActiveRecord::Base
	validates :user, :board, presence: true

	belongs_to :user
	belongs_to :board
	
end
