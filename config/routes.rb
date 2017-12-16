Rails.application.routes.draw do
  get 'bios/show'

  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    resources :bio 
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
