import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

var formInfo = function() {
  return {
    datatype: "$",
    measuretype: "$",
    usage: "$",
    meter_reading: "$"
  };
};

var request = $.ajax({
  method: "POST",
  url: "/api/v1/datapoints",
  data: {
    datapoint: {
      datatype: formInfo.datatype,
      measuretype: formInfo.measuretype,
      usage: formInfo.usage,
      meter_reading: formInfo.meter_reading
    }
  }
});
request.done(function() {

});
