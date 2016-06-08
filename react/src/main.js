import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

// Datapoints Component
var Datapoints = React.createClass({
  loadDatapointsFromServer: function() {
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
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.loadDatapointsFromServer();
    setInterval(this.loadDatapointsFromServer, 2000);
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
      <table class="table table-striped">
        <th>Data Type</th>
        <th>Measure Types </th>
        <tbody>
          {datapointNodes}
        </tbody>
      </table>
    );
  }
});
var Datapoint = React.createClass({
  render: function() {
    return (
      <tr>
        <td>
          {this.props.datatype}
        </td>
        <td>
          {this.props.measuretype}
        </td>
      </tr>
    )
  }
})

setInterval(function() {
  ReactDOM.render(
    <Datapoints url="api/v1/datapoints"/>,
    document.getElementById('datapoints')
  );
},500);
