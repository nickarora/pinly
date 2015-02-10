Rails.application.routes.draw do
  root to: 'static_pages#index'

  resource :user, except: [:destroy]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: { format: :json } do
    resources :boards, except: [:new, :edit]
    resources :users, only: [:show, :edit, :update]
    resources :pins, only: [:create, :destroy]
    resources :boardpins, only: [:create, :destroy]
    resources :follows, only: [:create, :destroy]
    resources :likes, only: [:create, :destroy]
    resources :comments, only: [:create, :destroy]
    get 'feeds', to: 'feeds#index'
  end
  
end
