class Location < ApplicationRecord
  has_many :comments, dependent: :destroy



  def as_json(options={})
    super(options).merge(Lat: 2, Lng: 6)
  end

end
