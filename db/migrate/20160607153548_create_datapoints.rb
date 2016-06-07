class CreateDatapoints < ActiveRecord::Migration
  def change
    create_table :datapoints do |t|
      t.string :datatype
      t.string :measuretype
      t.float :usage
      t.float :meter_reading

      t.timestamps
    end
  end
end
