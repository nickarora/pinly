# == Schema Information
#
# Table name: comments
#
#  id          :integer          not null, primary key
#  boardpin_id :integer          not null
#  user_id     :integer          not null
#  body		     :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Comment < ActiveRecord::Base

	validates :boardpin, :user, :body, presence: true

	belongs_to :boardpin
	belongs_to :user

end
