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

class Boardpin < ActiveRecord::Base

	validates :board, :pin, presence: true
	belongs_to :board
	belongs_to :pin
	
end