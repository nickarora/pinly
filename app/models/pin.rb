# == Schema Information
#
# Table name: pins
#
#  id         :integer          not null, primary key
#  url        :string           not null
#  image_url  :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Pin < ActiveRecord::Base

	validates :url, :image_url, presence: true
	has_many :boardpins, dependent: :destroy

end
