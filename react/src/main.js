import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

//Category Component
var MetricCat = React.createClass({
  getInitialState() {
    return {
      value: ''
    };
  },

  handleChange(e) {
    this.setState({ value: e.target.value});
  },

  render: function() {
    return (
      <select>
          <option value="nothing">Please select</option>
          <option value="water">Water</option>
          <option value="electric">Electricity</option>
      </select>
    );
  }
});

var MetricType = React.createClass({
  getInitialState() {
    return {
      value: ''
    };
  },

  handleChange(e) {
    this.setState({ value: e.target.value});
  },

  render: function() {
    return (
      <select>
          <option value="nothing">Please select</option>
          <option value="usage">Usage</option>
          <option value="meter">Meter Reading</option>
      </select>
    );
  }
});

var MetricInput = React.createClass ({
  getInitialState: function() {
    return {value: 'Test'};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
  render: function() {
    return (
      <input
        type="text"
        value={this.state.value}
        onChange={this.handleChange}
      />
    );
  }
})

var MetricForm = React.createClass ({
  render: function(){
    return (
      <form>
          <MetricCat />
          <MetricType />
          <MetricInput />
      </form>
    );
  }
})

setInterval(function() {
  ReactDOM.render(
    <MetricForm />,
    document.getElementById('dataForm')
  );
});
