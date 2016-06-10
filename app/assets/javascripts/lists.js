webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\n__webpack_require__(1);\n\nvar _react = __webpack_require__(299);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(335);\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Tasks = _react2.default.createClass({\n  displayName: 'Tasks',\n\n  // Action for loading data from the rails API\n  loadTasksFromServer: function loadTasksFromServer() {\n    $.ajax({\n      url: this.props.url,\n      dataType: 'json',\n      cache: false,\n      success: function (data) {\n        this.setState({ data: data });\n      }.bind(this),\n      error: function (xhr, status, err) {\n        console.error(this.props.url, status, err.toString());\n      }.bind(this)\n    });\n  },\n  getInitialState: function getInitialState() {\n    return { data: [] };\n  },\n  componentDidMount: function componentDidMount() {\n    this.loadTasksFromServer();\n  },\n  render: function render() {\n    var tasksFromServer = this.loadTasksFromServer;\n    var taskNodes = this.state.data.map(function (task, i) {\n      return _react2.default.createElement(Task, {\n        key: task.id,\n        id: task.id,\n        item: task.item,\n        handleDeleteTask: tasksFromServer });\n    });\n    var options = this.state.data.map(function (task) {\n      return _react2.default.createElement(DoingStuff, {\n        key: task.id,\n        optionName: task.item });\n    });\n    return _react2.default.createElement(\n      'div',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'To Do'\n      ),\n      _react2.default.createElement(\n        'ul',\n        null,\n        taskNodes\n      ),\n      _react2.default.createElement(TaskForm, { url: 'api/v1/lists', onTaskSubmit: this.loadTasksFromServer }),\n      _react2.default.createElement(\n        'select',\n        null,\n        options\n      )\n    );\n  }\n});\nvar Task = _react2.default.createClass({\n  displayName: 'Task',\n\n  handleDelete: function handleDelete(e) {\n    e.preventDefault();\n    $.ajax({\n      method: 'DELETE',\n      url: \"/api/v1/lists/\" + this.props.id,\n      dataType: 'json',\n      cache: false,\n      error: function (xhr, status, err) {\n        console.error(this.props.url, status, err.toString());\n      }.bind(this)\n    });\n    this.props.handleDeleteTask();\n  },\n  render: function render() {\n    return _react2.default.createElement(\n      'li',\n      null,\n      this.props.item,\n      _react2.default.createElement(\n        'button',\n        { 'class': 'btn btn-danger', onClick: this.handleDelete },\n        'Delete'\n      )\n    );\n  }\n});\nvar TaskForm = _react2.default.createClass({\n  displayName: 'TaskForm',\n\n  getInitialState: function getInitialState() {\n    return { item: '' };\n  },\n  onChange: function onChange(e) {\n    this.setState({ item: e.target.value });\n  },\n\n  handleSubmit: function handleSubmit(e) {\n    var taskcontent = this.state.item.trim();\n    e.preventDefault();\n    $.ajax({\n      type: \"POST\",\n      url: this.props.url,\n      dataType: 'json',\n      cache: false,\n      data: {\n        list: {\n          item: taskcontent\n        }\n      },\n      success: function (data) {\n        console.log(data);\n      }.bind(this),\n      error: function (xhr, status, err) {\n        console.error(this.props.url, status, err.toString());\n      }.bind(this)\n    });\n    this.props.onTaskSubmit();\n    this.setState({ item: '' });\n  },\n  render: function render() {\n    return _react2.default.createElement(\n      'form',\n      { className: 'form-inline', onSubmit: this.handleSubmit },\n      _react2.default.createElement('input', {\n        type: 'text',\n        value: this.state.item,\n        onChange: this.onChange }),\n      _react2.default.createElement(\n        'button',\n        { className: 'btn btn-default', type: 'submit' },\n        'Add'\n      )\n    );\n  }\n});\nvar DoingStuff = _react2.default.createClass({\n  displayName: 'DoingStuff',\n\n  render: function render() {\n    return _react2.default.createElement(\n      'option',\n      null,\n      this.props.optionName\n    );\n  }\n});\nsetInterval(function () {\n  _reactDom2.default.render(_react2.default.createElement(Tasks, { url: 'api/v1/lists' }), document.getElementById('tasks'));\n});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWFjdC9zcmMvbGlzdHMuanM/NDQzNyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQUksUUFBUSxnQkFBTSxXQUFOLENBQWtCO0FBQUE7OztBQUU1Qix1QkFBcUIsK0JBQVc7QUFDOUIsTUFBRSxJQUFGLENBQU87QUFDTCxXQUFLLEtBQUssS0FBTCxDQUFXLEdBRFg7QUFFTCxnQkFBVSxNQUZMO0FBR0wsYUFBTyxLQUhGO0FBSUwsZUFBUyxVQUFTLElBQVQsRUFBZTtBQUN0QixhQUFLLFFBQUwsQ0FBYyxFQUFDLE1BQU0sSUFBUCxFQUFkO0FBQ0QsT0FGUSxDQUVQLElBRk8sQ0FFRixJQUZFLENBSko7QUFPTCxhQUFPLFVBQVUsR0FBVixFQUFlLE1BQWYsRUFBdUIsR0FBdkIsRUFBNEI7QUFDakMsZ0JBQVEsS0FBUixDQUFjLEtBQUssS0FBTCxDQUFXLEdBQXpCLEVBQThCLE1BQTlCLEVBQXNDLElBQUksUUFBSixFQUF0QztBQUNELE9BRk0sQ0FFTCxJQUZLLENBRUEsSUFGQTtBQVBGLEtBQVA7QUFXRCxHQWQyQjtBQWU1QixtQkFBaUIsMkJBQVc7QUFDMUIsV0FBTyxFQUFDLE1BQU0sRUFBUCxFQUFQO0FBQ0QsR0FqQjJCO0FBa0I1QixxQkFBbUIsNkJBQVc7QUFDNUIsU0FBSyxtQkFBTDtBQUNELEdBcEIyQjtBQXFCNUIsVUFBUSxrQkFBVztBQUNqQixRQUFJLGtCQUFrQixLQUFLLG1CQUEzQjtBQUNBLFFBQUksWUFBWSxLQUFLLEtBQUwsQ0FBVyxJQUFYLENBQWdCLEdBQWhCLENBQW9CLFVBQVMsSUFBVCxFQUFlLENBQWYsRUFBa0I7QUFDcEQsYUFDRSw4QkFBQyxJQUFEO0FBQ0UsYUFBTyxLQUFLLEVBRGQ7QUFFRSxZQUFNLEtBQUssRUFGYjtBQUdFLGNBQU8sS0FBSyxJQUhkO0FBSUUsMEJBQWtCLGVBSnBCLEdBREY7QUFPRCxLQVJlLENBQWhCO0FBU0EsUUFBSSxV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LFFBSGpCLEdBREY7TUFLRTtBQUFBO1FBQUEsRUFBUSxXQUFVLGlCQUFsQixFQUFvQyxNQUFLLFFBQXpDO1FBQUE7QUFBQTtBQUxGLEtBREY7QUFTRDtBQXhDOEIsQ0FBbEIsQ0FBZjtBQTBDQSxJQUFJLGFBQWEsZ0JBQU0sV0FBTixDQUFrQjtBQUFBOztBQUNqQyxVQUFRLGtCQUFXO0FBQ2pCLFdBQ0U7QUFBQTtNQUFBO01BQVMsS0FBSyxLQUFMLENBQVc7QUFBcEIsS0FERjtBQUdEO0FBTGdDLENBQWxCLENBQWpCO0FBT0EsWUFBWSxZQUFXO0FBQ3JCLHFCQUFTLE1BQVQsQ0FDRSw4QkFBQyxLQUFELElBQU8sS0FBSSxjQUFYLEdBREYsRUFFRSxTQUFTLGNBQVQsQ0FBd0IsT0FBeEIsQ0FGRjtBQUlELENBTEQiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG52YXIgVGFza3MgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIC8vIEFjdGlvbiBmb3IgbG9hZGluZyBkYXRhIGZyb20gdGhlIHJhaWxzIEFQSVxuICBsb2FkVGFza3NGcm9tU2VydmVyOiBmdW5jdGlvbigpIHtcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiB0aGlzLnByb3BzLnVybCxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICBjYWNoZTogZmFsc2UsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2RhdGE6IGRhdGF9KTtcbiAgICAgIH0uYmluZCh0aGlzKSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKHRoaXMucHJvcHMudXJsLCBzdGF0dXMsIGVyci50b1N0cmluZygpKTtcbiAgICAgIH0uYmluZCh0aGlzKVxuICAgIH0pO1xuICB9LFxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7ZGF0YTogW119O1xuICB9LFxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5sb2FkVGFza3NGcm9tU2VydmVyKCk7XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHRhc2tzRnJvbVNlcnZlciA9IHRoaXMubG9hZFRhc2tzRnJvbVNlcnZlclxuICAgIHZhciB0YXNrTm9kZXMgPSB0aGlzLnN0YXRlLmRhdGEubWFwKGZ1bmN0aW9uKHRhc2ssIGkpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUYXNrXG4gICAgICAgICAga2V5ID0ge3Rhc2suaWR9XG4gICAgICAgICAgaWQgPSB7dGFzay5pZH1cbiAgICAgICAgICBpdGVtPSB7dGFzay5pdGVtfVxuICAgICAgICAgIGhhbmRsZURlbGV0ZVRhc2s9e3Rhc2tzRnJvbVNlcnZlcn0vPlxuICAgICAgKVxuICAgIH0pXG4gICAgdmFyIG9wdGlvbnMgPSB0aGlzLnN0YXRlLmRhdGEubWFwKGZ1bmN0aW9uKHRhc2spe1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPERvaW5nU3R1ZmZcbiAgICAgICAgICBrZXk9e3Rhc2suaWR9XG4gICAgICAgICAgb3B0aW9uTmFtZT17dGFzay5pdGVtfS8+XG4gICAgICApXG4gICAgfSlcbiAgICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDI+VG8gRG88L2gyPlxuICAgICAgPHVsPlxuICAgICAgICB7dGFza05vZGVzfVxuICAgICAgPC91bD5cbiAgICAgICAgPFRhc2tGb3JtIHVybD1cImFwaS92MS9saXN0c1wiIG9uVGFza1N1Ym1pdD17dGhpcy5sb2FkVGFza3NGcm9tU2VydmVyfS8+XG4gICAgICA8c2VsZWN0PlxuICAgICAgICB7b3B0aW9uc31cbiAgICAgIDwvc2VsZWN0PlxuICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSlcbnZhciBUYXNrID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBoYW5kbGVEZWxldGU6IGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgJC5hamF4KHtcbiAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICB1cmw6IFwiL2FwaS92MS9saXN0cy9cIiArIHRoaXMucHJvcHMuaWQsXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgY2FjaGU6IGZhbHNlLFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IodGhpcy5wcm9wcy51cmwsIHN0YXR1cywgZXJyLnRvU3RyaW5nKCkpO1xuICAgICAgfS5iaW5kKHRoaXMpXG4gICAgfSk7XG4gICAgdGhpcy5wcm9wcy5oYW5kbGVEZWxldGVUYXNrKCk7XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxsaT57dGhpcy5wcm9wcy5pdGVtfTxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlRGVsZXRlfT5EZWxldGU8L2J1dHRvbj48L2xpPlxuICAgIClcbiAgfVxufSlcbnZhciBUYXNrRm9ybSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge2l0ZW06ICcnfTtcbiAgfSxcbiAgb25DaGFuZ2UoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpdGVtOiBlLnRhcmdldC52YWx1ZSB9KVxuICB9LFxuICBoYW5kbGVTdWJtaXQ6IGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgdGFza2NvbnRlbnQgPSB0aGlzLnN0YXRlLml0ZW0udHJpbSgpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAkLmFqYXgoe1xuICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICB1cmw6IHRoaXMucHJvcHMudXJsLFxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIGNhY2hlOiBmYWxzZSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbGlzdDoge1xuICAgICAgICAgIGl0ZW06IHRhc2tjb250ZW50XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgfS5iaW5kKHRoaXMpLFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IodGhpcy5wcm9wcy51cmwsIHN0YXR1cywgZXJyLnRvU3RyaW5nKCkpO1xuICAgICAgfS5iaW5kKHRoaXMpXG4gICAgfSk7XG4gICAgdGhpcy5wcm9wcy5vblRhc2tTdWJtaXQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtpdGVtOiAnJ30pXG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZvcm0taW5saW5lXCIgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5pdGVtfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfSAvPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiIHR5cGU9XCJzdWJtaXRcIj5BZGQ8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICApXG4gIH1cbn0pXG52YXIgRG9pbmdTdHVmZiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPG9wdGlvbj57dGhpcy5wcm9wcy5vcHRpb25OYW1lfTwvb3B0aW9uPlxuICAgIClcbiAgfVxufSlcbnNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICBSZWFjdERPTS5yZW5kZXIoXG4gICAgPFRhc2tzIHVybD1cImFwaS92MS9saXN0c1wiIC8+LFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrcycpXG4gIClcbn0pXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3JlYWN0L3NyYy9saXN0cy5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }
]);