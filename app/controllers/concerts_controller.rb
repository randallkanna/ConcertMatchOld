class ConcertsController < ApplicationController

  respond_to :json

  def index
    respond with Concert.all
  end
end
