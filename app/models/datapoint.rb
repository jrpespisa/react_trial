class Datapoint < ActiveRecord::Base
  validates :usage, numericality: true, allow_nil: true
  validates :meter_reading, numericality: true, allow_nil: true
  after_save :data_type


  def data_type
    if self.measuretype == "Meter Reading"
      new_usage = nil
      self.update_column(:usage, new_usage)
    elsif self.measuretype == "Usage"
      new_meter_reading = nil
      self.update_column(:meter_reading, new_meter_reading)
    end
  end
end
