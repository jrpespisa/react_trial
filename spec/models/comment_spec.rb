require 'rails_helper'

describe Comment do
  it { should belong_to :item }
end
