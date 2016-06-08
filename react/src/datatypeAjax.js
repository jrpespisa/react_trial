import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

var newDataForm = function() {
  return {
    datatype: $("#category > select").val(),
    measuretype: $("#type > select").val(),
    usage: $("#qty").val(),
    meter_reading: $("#qty").val()
  };
};

$(document).ready(function() {
  var request = $.ajax({
    type: "GET",
    url: "api/v1/datapoints"
  });
  request.done(function(response) {
    var dataList = response
  });
});

$(document).ready(function() {
  $("#datasubmit").click(function(event) {
    event.preventDefault();
    var formInfo = newDataForm()
    var request = $.ajax({
      type: "POST",
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
    request.done(function(response) {
      var category = response.datatype;
      var type = response.measuretype;
      var differentiate = function() {
        if (response.measuretype == "Usage") {
          return response.usage
        } else {
          return response.meter_reading
        };
      }
      var amount = differentiate();
     });
  });
});
