require "rails_helper"

describe Api::V1::DatapointsController, type: :controller do
  before(:each) do
    @datapoint = FactoryGirl.create(:datapoint)
  end

  describe "POST create" do
    it "creates a new datapoint" do
      expect{ post :create, datapoint: FactoryGirl.attributes_for(:datapoint) }.to change(Datapoint, :count).by(1)
      expect(response).to have_http_status(200)
    end
  end

  describe "DELETE destroy" do
    it "deletes a datapoint" do
      expect{ delete :destroy, id: @datapoint.id }.to change(Datapoint, :count).by(-1)
      expect(response).to have_http_status(200)
    end
  end
end
