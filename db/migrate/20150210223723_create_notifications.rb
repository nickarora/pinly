class CreateNotifications < ActiveRecord::Migration
  def change
    create_table :notifications do |t|
    	t.string  :status, default: "unviewed"
    	t.string	:message, null: false
    	t.integer :boardpin_id, null: false, index: true
    	t.integer :user_id, null: false, index: true

      t.timestamps null: false
    end
  end
end
