class Datapoint < ActiveRecord::Base
  validates :usage, numericality: true, allow_nil: true
  validates :meter_reading, numericality: true, allow_nil: true
end
