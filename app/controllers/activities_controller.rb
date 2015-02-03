class ActivitiesController < ApplicationController
  respond_to :json

  include HTTParty
  base_uri 'api.jambase.com'

  def index
    api_key = "rct6rka5zncmwnvz38srk36y"
          # Decided not to hide API key here
    location = "95819"
    render json: self.class.get("/events?zipCode=" + location + "&page=0&api_key=" + api_key)
  end

  # def self.random_concert(id)

  # end
end




  # def index
  #   respond_with Concert.all
  # end
