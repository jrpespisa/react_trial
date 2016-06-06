import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

let testList = <ul onClick ={event => alert('Different Test')}>This is a different test list</ul>;

$(function() {
  ReactDOM.render(
    testList,
    document.getElementById('app')
  );
});
