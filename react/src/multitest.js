import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

let testList = <ul onClick ={event => alert('Another Test')}>This is a test item</ul>;

$(function() {
  ReactDOM.render(
    testList,
    document.getElementById('list')
  );
});
