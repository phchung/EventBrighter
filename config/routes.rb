Rails.application.routes.draw do
root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create,:destroy,:show]
    resources :events, only: [:create,:index]
    resources :relationships, only: [:create, :destroy,:index]
    resources :bookmarks, only: [:create,:destroy,:index]
  end
end
