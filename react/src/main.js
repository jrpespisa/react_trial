import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
var metricCats
var MetricForm = React.createClass ({
  getInitialState: function() {
    return {
      category: 'Air',
      type: 'Usage',
      amount: 'PlaceHolder',
    };
  },
  handleCategoryChange: function(event) {
    this.setState({category: event.target.value});
  },
  handleTypeChange: function(event) {
    this.setState({type: event.target.value});
  },
  handleInputChange: function(event) {
    this.setState({amount: event.target.value});
  },

  render: function() {

    const categoryList = ['Air', 'Water', 'Electricity', 'Waste'];
    const typeList = ['Usage', 'Meter Reading'];

    return (
      <div>
        <form>
          <div className="form-group">
            <label for ="metcat">Category </label>
            <select onChange={this.handleCategoryChange}>
              {categoryList.map( category => <option value={category}>{category}</option>)}
            </select>
          </div>
          <div className="form-group">
            <label for ="mettype">Type </label>
            <select onChange={this.handleTypeChange}>
              {typeList.map( type => <option value={type}>{type}</option>)}
            </select>
          </div>
          <div className="form-group">
            <label for ="metamt">Amount </label>
            <input
            type='text'
            value={this.state.amount}
            onChange={this.handleInputChange}
            />
          </div>
      </form>
      </div>
    )
  }

});
var FormBox = React.createClass ({
    render: function () {
      return (
        <div>
          <div className="panel panel-default">
            <div className="panel-heading">
              <h2>Data Form</h2>
            </div>
            <div className="panel-body">
              <MetricForm />
            </div>
          </div>
        </div>
    )
  }
})
setInterval(function() {
  ReactDOM.render(
    <FormBox />,
    document.getElementById('dataForm')
  );
});
