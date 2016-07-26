class AddLatlngToEvents < ActiveRecord::Migration
  def change
    add_column :events, :lat, :float, null: false
    add_column :events, :lng, :float, null: false
  end
end
