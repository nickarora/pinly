class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
    	t.integer		:boardpin_id, null: false, index: true
    	t.integer		:user_id, null: false, index: true
    	t.text			:body, null: false

      t.timestamps null: false
    end
  end
end
