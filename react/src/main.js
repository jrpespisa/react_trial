import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
var metricCats
var MetricForm = React.createClass ({
  getInitialState: function() {
    return {
      category: '',
      type: '',
      amount: '',
    };
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },

  render: function() {

    const categoryList = ['Air', 'Water', 'Electricity', 'Waste'];

    return (
      <select>
        {categoryList.map( category => <option>{category}</option>)}
      </select>
    )
  }

});

setInterval(function() {
  ReactDOM.render(
    <MetricForm />,
    document.getElementById('dataForm')
  );
});
