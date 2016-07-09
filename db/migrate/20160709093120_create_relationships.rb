class CreateRelationships < ActiveRecord::Migration
  def change
    create_table :relationships do |t|
      t.integer :show_id, null: false
      t.integer :purchaser_id, null: false
    end

    add_index :relationships, [:show_id,:purchaser_id], unique: true
    add_index :relationships, :show_id
    add_index :relationships, :purchaser_id
  end
end
