class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :title, null: false
      t.string :location, null: false
      t.string :category, null: false
      t.string :description, null: false
      t.string :picture_url, null: false
      t.integer :price, null: false
      t.string :start_date, null: false
      t.string :end_date, null: false
      t.string :start_time, null: false
      t.string :end_time, null: false
      t.integer :user_id, null: false
    end

    add_index :events, :user_id
  end
end
