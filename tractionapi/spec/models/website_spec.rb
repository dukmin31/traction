require 'rails_helper'

RSpec.describe Website do
  describe 'fields' do
    it { is_expected.to respond_to(:url) }
    it { is_expected.to respond_to(:reach) }
    it { is_expected.to respond_to(:rank) }
    it { is_expected.to respond_to(:page_views_per_million) }
    it { is_expected.to respond_to(:page_views_per_user) }
  end

  describe 'validations' do
    it { is_expected.to validate_presence_of(:url) }
    it { is_expected.to validate_presence_of(:rank) }
  end
end
