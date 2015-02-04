class ActivitySerializer < ActiveModel::Serializer
  attributes :artists, :address, :city, :country, :statecode
end