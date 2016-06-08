class Datapoint < ActiveRecord::Base
  validates :usage, numericality: true, allow_nil: true
  validates :meter_reading, numericality: true, allow_nil: true
  after_initialize :data_type


  def data_type
    if self.measuretype == "Meter Reading"
      self.usage = nil
    elsif self.measuretype == "Usage"
      self.meter_reading == nil
    end
  end
end
