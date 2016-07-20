class AddAttendence < ActiveRecord::Migration
  def change
    add_column :events, :attending, :boolean, :default => false, null: false
  end
end
