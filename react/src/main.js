import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

// Datapoints Component
var Datapoints = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function() {
    var datapointNodes = this.state.data.map(function(datapoint) {
      return (
        <Datapoint
          key = {datapoint.id}
          datatype={datapoint.datatype}
          measuretype = {datapoint.measuretype}
          usage = {datapoint.usage}
          meter_reading = {datapoint.meter_reading}
          />
      )
    })
    return (
      <div>{datapointNodes}</div>
    );
  }
});
var Datapoint = React.createClass({
  render: function() {
    return (
      <li>{this.props.datatype}</li>
    )
  }
})

setInterval(function() {
  ReactDOM.render(
    <Datapoints url="api/v1/datapoints" />,
    document.getElementById('datapoints')
  );
},500);
