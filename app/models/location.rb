class Location < ApplicationRecord
  has_many :comments, dependent: :destroy

  def as_json(options={})
    super(options).merge(Lat: 1)
  end
  
end
