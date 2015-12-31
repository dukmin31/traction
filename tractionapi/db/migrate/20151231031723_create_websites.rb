class CreateWebsites < ActiveRecord::Migration
  def change
    create_table :websites do |t|
      t.string :url, null: false
      t.string :reach
      t.integer :rank, null: false
      t.integer :page_views_per_million
      t.decimal :page_views_per_user
      t.timestamps null: false
    end
  end
end
