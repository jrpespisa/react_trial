FactoryGirl.define do
  factory :datapoint do
    datatype "Air"
    measuretype "Usage"
    meter_reading nil
    usage 100.0
  end

  factory :list do
    item "Test"
  end
end
