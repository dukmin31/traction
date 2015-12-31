class Website < ActiveRecord::Base
  validates :url, :rank, presence: true
end
