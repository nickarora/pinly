class AddImageToUsers < ActiveRecord::Migration
  def change
  	add_column :users, :image_url, :string, default: 'http://res.cloudinary.com/pinly/image/upload/v1423542388/csnjhadzhi8d3sf8srh4.jpg'
  	add_column :users, :cloudinary_id, :string, default: 'csnjhadzhi8d3sf8srh4'
  end
end
