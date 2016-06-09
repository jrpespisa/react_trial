ReactTest::Application.routes.draw do
  root "lists#index"

  resources :datapoints, only: [:index]
  
  namespace :api do
    namespace :v1 do
      resources :datapoints, only: [:index, :create, :destroy]
      resources :lists, only: [:index, :create, :destroy]
    end
  end
end
