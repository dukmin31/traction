require 'rails_helper'

RSpec.describe WebsiteController do
  let(:websites) { [FactoryGirl.create(:website)] }

  describe 'GET show' do
    before do
      allow(Website).to receive(:find).with('1').and_return(websites.first)
      get :show, id: websites.first.id
    end

    it 'gets website' do
      expect(assigns(:website)).to eq websites.first
    end
  end
end
