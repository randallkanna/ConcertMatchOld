class ActivitiesController < ApplicationController
  respond_to :json

  include HTTParty
  base_uri 'api.jambase.com'

  def index

    # Original api key: rct6rka5zncmwnvz38srk36y
    api_key = "r2fhmeeyhh72dam7u923t4p9"
          # Decided not to hide API key here
    location = "95819"
    render json: self.class.get("/events?zipCode=" + location + "&page=0&api_key=" + api_key)
  end

end
