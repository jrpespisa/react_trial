import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

let testList = <ul onClick ={event => alert('Test')}>This is a test list</ul>;

$(function() {
  ReactDOM.render(
    testList,
    document.getElementById('app')
  );
});
