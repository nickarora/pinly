Rails.application.routes.draw do
  root to: 'static_pages#index'

  resource :user, except: [:destroy]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: { format: :json } do
    resources :boards, except: [:new, :edit]
  end
  
end
