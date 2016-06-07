require 'rails_helper'

describe Item do
  it { should have_many :comments }
end
