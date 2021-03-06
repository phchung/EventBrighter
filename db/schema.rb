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

ActiveRecord::Schema.define(version: 20160720230430) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bookmarks", force: :cascade do |t|
    t.integer  "user_id",     null: false
    t.integer  "bookmark_id", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "bookmarks", ["bookmark_id"], name: "index_bookmarks_on_bookmark_id", using: :btree
  add_index "bookmarks", ["user_id", "bookmark_id"], name: "index_bookmarks_on_user_id_and_bookmark_id", unique: true, using: :btree
  add_index "bookmarks", ["user_id"], name: "index_bookmarks_on_user_id", using: :btree

  create_table "events", force: :cascade do |t|
    t.string   "title",                       null: false
    t.string   "location",                    null: false
    t.string   "category",                    null: false
    t.string   "description",                 null: false
    t.string   "picture_url",                 null: false
    t.integer  "price",                       null: false
    t.date     "start_date",                  null: false
    t.date     "end_date",                    null: false
    t.time     "start_time",                  null: false
    t.time     "end_time",                    null: false
    t.integer  "user_id",                     null: false
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
    t.boolean  "attending",   default: false, null: false
    t.float    "lat",                         null: false
    t.float    "lng",                         null: false
  end

  add_index "events", ["user_id"], name: "index_events_on_user_id", using: :btree

  create_table "relationships", force: :cascade do |t|
    t.integer "show_id",      null: false
    t.integer "purchaser_id", null: false
  end

  add_index "relationships", ["purchaser_id"], name: "index_relationships_on_purchaser_id", using: :btree
  add_index "relationships", ["show_id", "purchaser_id"], name: "index_relationships_on_show_id_and_purchaser_id", unique: true, using: :btree
  add_index "relationships", ["show_id"], name: "index_relationships_on_show_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["session_token"], name: "index_users_on_session_token", using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
