class CreateBookmarks < ActiveRecord::Migration
  def change
    create_table :bookmarks do |t|
      t.integer :user_id, null: false
      t.integer :bookmark_id, null: false

      t.timestamps null: false
    end

    add_index :bookmarks, [:user_id,:bookmark_id], unique: true
    add_index :bookmarks, :user_id
    add_index :bookmarks, :bookmark_id
  end
end
