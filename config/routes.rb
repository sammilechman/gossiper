NewReader::Application.routes.draw do
  root to: "feeds#index"
  resources :feeds, only: [:index, :create, :show] do
    resources :entries, only: [:index]
  end
  resources :entries, only: [:show]


end
