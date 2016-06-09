class Api::V1::ListsController < ActionController::Base
  def index
    @lists = List.all
    render json: @lists
  end

  def create
    @list = List.new(list_params)
    if @list.save
      render json: {
        datatype: @list.item,
      }
    else
      render json: :nothing, status: :not_found
    end
  end

  def destroy
    @list = List.find(params[:id])
    @list.destroy
    render json: :nothing
  end

  private

  def list_params
    params.require(:list).permit(:item)
  end
end
