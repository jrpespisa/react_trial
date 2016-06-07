FactoryGirl.define do
  factory :comment do
    body "Test"
    item_id
  end

  factory :user do
    email "johndoe@capaccio.com"
    password "password"
  end
end
