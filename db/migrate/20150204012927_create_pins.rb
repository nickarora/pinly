class CreatePins < ActiveRecord::Migration
  def change
    create_table :pins do |t|
    	t.string	:url, null: false
    	t.string	:image_url, null: false

      t.timestamps null: false
    end
  end
end
