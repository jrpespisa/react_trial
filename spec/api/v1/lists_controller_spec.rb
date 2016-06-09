require "rails_helper"

describe Api::V1::ListsController, type: :controller do
  before(:each) do
    @list = FactoryGirl.create(:list)
  end

  describe "POST create" do
    it "creates a new list" do
      expect{ post :create, list: FactoryGirl.attributes_for(:list) }.to change(List, :count).by(1)
      expect(response).to have_http_status(200)
    end
  end

  describe "DELETE destroy" do
    it "deletes a list" do
      expect{ delete :destroy, id: @list.id }.to change(List, :count).by(-1)
      expect(response).to have_http_status(200)
    end
  end
end
