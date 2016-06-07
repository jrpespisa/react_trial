ReactTest::Application.routes.draw do
  root "items#index"
  resources :comments, only: [:index]
  resources :items, only: [:index]
  resources :datapoints
end
