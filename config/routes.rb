Rails.application.routes.draw do
  get 'api/greetings'
  # get '/greeting', to: 'pages#greeting', as: 'greeting'

  # root 'root#index'
  root 'root#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  namespace :api do
    get 'greeting', to: 'api#greetings'
  end
  # Defines the root path route ("/")
  # root "articles#index"
end
