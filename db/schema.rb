# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150210223723) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "boardpins", force: :cascade do |t|
    t.integer  "board_id",    null: false
    t.integer  "pin_id",      null: false
    t.text     "description", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "boardpins", ["board_id"], name: "index_boardpins_on_board_id", using: :btree
  add_index "boardpins", ["pin_id"], name: "index_boardpins_on_pin_id", using: :btree

  create_table "boards", force: :cascade do |t|
    t.string   "title",       null: false
    t.text     "description"
    t.integer  "user_id",     null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "boards", ["user_id"], name: "index_boards_on_user_id", using: :btree

  create_table "comments", force: :cascade do |t|
    t.integer  "boardpin_id", null: false
    t.integer  "user_id",     null: false
    t.text     "body",        null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "comments", ["boardpin_id"], name: "index_comments_on_boardpin_id", using: :btree
  add_index "comments", ["user_id"], name: "index_comments_on_user_id", using: :btree

  create_table "follows", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "board_id",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "follows", ["board_id"], name: "index_follows_on_board_id", using: :btree
  add_index "follows", ["user_id"], name: "index_follows_on_user_id", using: :btree

  create_table "likes", force: :cascade do |t|
    t.integer  "user_id",     null: false
    t.integer  "boardpin_id", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "likes", ["boardpin_id"], name: "index_likes_on_boardpin_id", using: :btree
  add_index "likes", ["user_id"], name: "index_likes_on_user_id", using: :btree

  create_table "notifications", force: :cascade do |t|
    t.string   "status",      default: "unviewed"
    t.string   "message",                          null: false
    t.integer  "boardpin_id",                      null: false
    t.integer  "user_id",                          null: false
    t.datetime "created_at",                       null: false
    t.datetime "updated_at",                       null: false
  end

  add_index "notifications", ["boardpin_id"], name: "index_notifications_on_boardpin_id", using: :btree
  add_index "notifications", ["user_id"], name: "index_notifications_on_user_id", using: :btree

  create_table "pins", force: :cascade do |t|
    t.string   "url",           null: false
    t.string   "image_url",     null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.string   "cloudinary_id", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",                                                                                                      null: false
    t.string   "fname",                                                                                                         null: false
    t.string   "lname",                                                                                                         null: false
    t.string   "password_digest",                                                                                               null: false
    t.string   "session_token",                                                                                                 null: false
    t.text     "description"
    t.datetime "created_at",                                                                                                    null: false
    t.datetime "updated_at",                                                                                                    null: false
    t.string   "image_url",       default: "http://res.cloudinary.com/pinly/image/upload/v1423542388/csnjhadzhi8d3sf8srh4.jpg"
    t.string   "cloudinary_id",   default: "csnjhadzhi8d3sf8srh4"
  end

  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", using: :btree

end
