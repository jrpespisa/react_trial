import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

//Category Component
var MetricCat = React.createClass({
  render: function() {
    return (
      <select>
          <option>Water</option>
          <option>Electricity</option>
      </select>
    );
  }
});

setInterval(function() {
  ReactDOM.render(
    <MetricCat  />,
    document.getElementById('category')
  );
});

//Type Component
var MetricType = React.createClass({
  render: function() {
    return (
      <select>
          <option>Usage</option>
          <option>Meter Reading</option>
      </select>
    );
  }
});

setInterval(function() {
  ReactDOM.render(
    <MetricType  />,
    document.getElementById('type')
  );
});

//Input Component

var InputField = React.createClass({
  render: function() {
    return (
      <input type="text" className="form-control" id="qty" placeholder="100 kWh"/>
    );
  }
});

setInterval(function() {
  ReactDOM.render(
    <InputField  />,
    document.getElementById('inputdata')
  );
});
