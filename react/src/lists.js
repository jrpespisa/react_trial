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
  },
  render: function() {
    var tasksFromServer = this.loadTasksFromServer
    var taskNodes = this.state.data.map(function(task, i) {
      return (
        <Task
          key = {task.id}
          id = {task.id}
          item= {task.item}
          handleDeleteTask={tasksFromServer}/>
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
        <TaskForm url="api/v1/lists" onTaskSubmit={this.loadTasksFromServer}/>
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
    this.props.handleDeleteTask();
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
    var taskcontent = this.state.item.trim();
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: this.props.url,
      dataType: 'json',
      cache: false,
      data: {
        list: {
          item: taskcontent
        }
      },
      success: function(data) {
        console.log(data);
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
    this.props.onTaskSubmit();
    this.setState({item: ''})
  },
  render: function() {
    return (
      <form className="form-inline" onSubmit={this.handleSubmit}>
        <input
          type='text'
          value={this.state.item}
          onChange={this.onChange} />
        <button className="btn btn-default" type="submit">Add</button>
      </form>
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
