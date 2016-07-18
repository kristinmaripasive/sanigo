Rails.application.routes.draw do
  root :to => redirect('/locations.json')
  resources :locations do
    resources :comments
  end
end
