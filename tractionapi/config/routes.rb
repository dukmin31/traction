Rails.application.routes.draw do
  resources :website
  put 'website/update' => 'website#update'
end
