class AddNotNullConstraintsToPins < ActiveRecord::Migration
  def change
  	change_column :pins, :cloudinary_id, :string, null: false
  	change_column :boardpins, :description, :text, null: false
  end
end
