webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\n__webpack_require__(1);\n\nvar _react = __webpack_require__(299);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(335);\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar formInfo = function formInfo() {\n  return {\n    datatype: \"$\",\n    measuretype: \"$\",\n    usage: \"$\",\n    meter_reading: \"$\"\n  };\n};\n\nvar request = $.ajax({\n  method: \"POST\",\n  url: \"/api/v1/datapoints\",\n  data: {\n    datapoint: {\n      datatype: formInfo.datatype,\n      measuretype: formInfo.measuretype,\n      usage: formInfo.usage,\n      meter_reading: formInfo.meter_reading\n    }\n  }\n});\nrequest.done(function () {});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWFjdC9zcmMvZGF0YXR5cGVBamF4LmpzPzRkODYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFJLFdBQVcsU0FBWCxRQUFXLEdBQVc7QUFDeEIsU0FBTztBQUNMLGNBQVUsR0FETDtBQUVMLGlCQUFhLEdBRlI7QUFHTCxXQUFPLEdBSEY7QUFJTCxtQkFBZTtBQUpWLEdBQVA7QUFNRCxDQVBEOztBQVNBLElBQUksVUFBVSxFQUFFLElBQUYsQ0FBTztBQUNuQixVQUFRLE1BRFc7QUFFbkIsT0FBSyxvQkFGYztBQUduQixRQUFNO0FBQ0osZUFBVztBQUNULGdCQUFVLFNBQVMsUUFEVjtBQUVULG1CQUFhLFNBQVMsV0FGYjtBQUdULGFBQU8sU0FBUyxLQUhQO0FBSVQscUJBQWUsU0FBUztBQUpmO0FBRFA7QUFIYSxDQUFQLENBQWQ7QUFZQSxRQUFRLElBQVIsQ0FBYSxZQUFXLENBRXZCLENBRkQiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG52YXIgZm9ybUluZm8gPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHtcbiAgICBkYXRhdHlwZTogXCIkXCIsXG4gICAgbWVhc3VyZXR5cGU6IFwiJFwiLFxuICAgIHVzYWdlOiBcIiRcIixcbiAgICBtZXRlcl9yZWFkaW5nOiBcIiRcIlxuICB9O1xufTtcblxudmFyIHJlcXVlc3QgPSAkLmFqYXgoe1xuICBtZXRob2Q6IFwiUE9TVFwiLFxuICB1cmw6IFwiL2FwaS92MS9kYXRhcG9pbnRzXCIsXG4gIGRhdGE6IHtcbiAgICBkYXRhcG9pbnQ6IHtcbiAgICAgIGRhdGF0eXBlOiBmb3JtSW5mby5kYXRhdHlwZSxcbiAgICAgIG1lYXN1cmV0eXBlOiBmb3JtSW5mby5tZWFzdXJldHlwZSxcbiAgICAgIHVzYWdlOiBmb3JtSW5mby51c2FnZSxcbiAgICAgIG1ldGVyX3JlYWRpbmc6IGZvcm1JbmZvLm1ldGVyX3JlYWRpbmdcbiAgICB9XG4gIH1cbn0pO1xucmVxdWVzdC5kb25lKGZ1bmN0aW9uKCkge1xuXG59KTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vcmVhY3Qvc3JjL2RhdGF0eXBlQWpheC5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }
]);