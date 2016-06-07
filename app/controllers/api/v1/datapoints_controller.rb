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

    def destroy
      
    end
  end
end
