import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

var Tasks = React.createClass({
  // Action for loading data from the rails API
  loadTasksFromServer: function() {
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
    this.loadTasksFromServer();
    setInterval(this.loadTasksFromServer, 2000);
  },
  render: function() {
    var taskNodes = this.state.data.map(function(task) {
      return (
        <Task
          key = {task.id}
          id = {task.id}
          item= {task.item}
        />
      )
    })
    var options = this.state.data.map(function(task){
      return (
        <DoingStuff
          key={task.id}
          optionName={task.item}/>
      )
    })
    return (
    <div>
      <h2>To Do</h2>
      <ul>
        {taskNodes}
      </ul>
      <form>
        <TaskForm url="api/v1/lists" />
      </form>
      <select>
        {options}
      </select>
    </div>
    )
  }
})
var Task = React.createClass({
  handleDelete: function(e) {
    e.preventDefault();
    $.ajax({
      method: 'DELETE',
      url: "/api/v1/lists/" + this.props.id,
      dataType: 'json',
      cache: false,
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function() {
    return (
      <li>{this.props.item}<button class="btn btn-danger" onClick={this.handleDelete}>Delete</button></li>
    )
  }
})
var TaskForm = React.createClass({
  getInitialState: function() {
    return {item: ''};
  },
  onChange(e) {
    this.setState({ item: e.target.value })
  },
  handleSubmit: function(e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: this.props.url,
      dataType: 'json',
      cache: false,
      data: {
        list: {
          item: this.state.item.trim()
        }
      },
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
    this.setState({item: ''})
  },
  render: function() {
    return (
      <div>
        <input
          type='text'
          value={this.state.item}
          onChange={this.onChange} />
        <button className="btn btn-default" type="submit" onClick={this.handleSubmit}>Add</button>
      </div>
    )
  }
})
var DoingStuff = React.createClass({
  render: function() {
    return (
      <option>{this.props.optionName}</option>
    )
  }
})
setInterval(function() {
  ReactDOM.render(
    <Tasks url="api/v1/lists" />,
    document.getElementById('tasks')
  )
})
