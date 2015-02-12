class AddReceiverToNotifications < ActiveRecord::Migration
  def change
  	add_column :notifications, :receiver_id, :integer
  	add_index :notifications, :receiver_id
  end
end
