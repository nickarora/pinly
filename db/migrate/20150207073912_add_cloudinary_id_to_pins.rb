class AddCloudinaryIdToPins < ActiveRecord::Migration
  def change
    add_column :pins, :cloudinary_id, :string
  end
end
