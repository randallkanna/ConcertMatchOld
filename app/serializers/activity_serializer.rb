class ActivitySerializer < ActiveModel::Serializer
  attributes :info, :totalResults, :pageNumber, :message, :events, :id, :date, :venue, :name, :address, :city, :state, :stateCode, :country, :countryCode, :zipCode, :url

  has_many :activity
end