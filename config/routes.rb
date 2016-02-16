Rails.application.routes.draw do
  get 'static_pages/home'
  get "static_pages/methodhaining"
  get "static_pages/wrapandunwrap"
  resources :products
  root "products#index"
end
