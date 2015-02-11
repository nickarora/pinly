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

class Notification < ActiveRecord::Base

	validates :message, :boardpin, :user, presence: true

	belongs_to :boardpin
	belongs_to :user

	has_one :board, through: :boardpin, source: :board
	has_one :pin, through: :boardpin, source: :pin

	has_one :receiver, through: :board, source: :user

end
