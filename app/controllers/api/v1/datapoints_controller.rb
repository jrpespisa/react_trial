class Api::V1::DatapointsController < ActionController::Base

  def index
    @datapoints = Datapoint.all
    render json: { datapoints: @datapoints }
  end

  def create
    @datapoint = Datapoint.new(datapoint_params)
    if @datapoint.save
      render json: {
        datatype: @datapoint.datatype,
        measuretype: @datapoint.measuretype,
        usage: @datapoint.usage,
        meter_reading: @datapoint.meter_reading
      }
    else
      render json: :nothing, status: :not_found
    end
  end

  def destroy
    @datapoint = Datapoint.find(params[:id])
    @datapoint.destroy
    render json: :nothing
  end

  private

  def datapoint_params
    params.require(:datapoint).permit(:datatype, :measuretype, :usage, :meter_reading)
  end
end
