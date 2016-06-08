require "rails_helper"

RSpec.describe Datapoint, type: :model do

  it { should have_valid(:usage).when(0, 999.999, 25) }
  it { should_not have_valid(:usage).when("String") }

  it { should have_valid(:meter_reading).when(0, 999.999, 25) }
  it { should_not have_valid(:meter_reading).when("String") }

end
