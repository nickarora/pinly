class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
    	t.string :username, null: false
    	t.string :fname, null: false
    	t.string :lname, null: false
    	t.string :password_digest, null: false
      t.string :session_token, null: false
      t.text 	 :description

      t.timestamps null: false
    end

    add_index :users, :username
    add_index :users, :session_token, unique: true
  end
end
