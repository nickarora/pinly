# == Schema Information
#
# Table name: boardpins
#
#  id          :integer          not null, primary key
#  board_id    :integer          not null
#  pin_id      :integer          not null
#  description :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Boardpin < ActiveRecord::Base

	validates :board, :pin, :description, presence: true
	belongs_to :board
	belongs_to :pin
	has_one :user, through: :board, source: :user

	has_many :likes, dependent: :destroy
	has_many :likers, 
           through: :likes,
           source: :user

  has_many :comments, dependent: :destroy

  has_many :notifications, dependent: :destroy

	searchable do
		text :description
	end
	
end
