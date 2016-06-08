ReactTest::Application.routes.draw do
  root "datapoints#index"

  namespace :api do
    namespace :v1 do
      resources :datapoints, only: [:index, :create, :destroy]
    end
  end
end
