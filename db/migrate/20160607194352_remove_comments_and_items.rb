class RemoveCommentsAndItems < ActiveRecord::Migration
  def up
    drop_table :items
    drop_table :comments
  end

  def down
    create_table :items do |t|
      t.string :name
      t.string :description
    end
    create_table :comments do |t|
      t.string :body
      t.integer :item_id
    end
  end
end
