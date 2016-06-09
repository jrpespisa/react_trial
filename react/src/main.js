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
      <table className="table table-striped">
        <th>Data Type</th>
        <th>Measure Type</th>
        <th>Usage</th>
        <th>Meter Reading</th>
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
        <td>
          {this.props.usage}
        </td>
        <td>
          {this.props.meter_reading}
        </td>
      </tr>
    )
  }
})
var DatapointForm = React.createClass({
  // Here are the required API data parameters. We capture this as state.
  getInitialState: function() {
    return {datatype: 'Water', measuretype: 'Usage', usage: '', meter_reading: ''};
  },
  // Handle changes to the input field and dropdown menu items. This modifies the existing state.
  handleDatatypeChange: function(e) {
    this.setState({datatype: e.target.value})
  },
  handleMeasuretypeChange: function(e) {
    this.setState({measuretype: e.target.value})
  },
  handleAmountChange: function(e) {
    this.setState({usage: e.target.value})
    this.setState({meter_reading: e.target.value})
  },
  // Set variables from state to be used in Ajax request. Define and fire Ajax call.
  handleSubmit: function(e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: this.props.url,
      dataType: 'json',
      cache: false,
      data: {
        datapoint: {
          datatype: this.state.datatype.trim(),
          measuretype: this.state.measuretype.trim(),
          usage: this.state.usage.trim(),
          meter_reading: this.state.meter_reading.trim()
        }
      },
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function() {
    return (
      <div>
        <select defaultValue={this.value} value={this.state.value} onChange={this.handleDatatypeChange}>
          <option>Water</option>
          <option>Electricity</option>
        </select>
        <select defaultValue={this.value} value={this.state.value} onChange={this.handleMeasuretypeChange}>
          <option>Usage</option>
          <option>Meter Reading</option>
        </select>
        <input type="text" onChange={this.handleAmountChange}></input>
        <button type="submit" onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
});

setInterval(function() {
  ReactDOM.render(
    <DatapointForm url="api/v1/datapoints"/>,
    document.getElementById('dataform')
  );
},500);

setInterval(function() {
  ReactDOM.render(
    <Datapoints url="api/v1/datapoints"/>,
    document.getElementById('datapoints')
  );
},250);
