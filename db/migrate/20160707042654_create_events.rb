class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :title, null: false
      t.string :location, null: false
      t.string :category, null: false
      t.string :description, null: false
      t.string :picture_url, null: false
      t.integer :price, null: false
      t.date :start_date, null: false
      t.date :end_date, null: false
      t.time :start_time, null: false
      t.time :end_time, null: false
      t.integer :user_id, null: false

      t.timestamps null: false
    end

    add_index :events, :user_id
  end
end
