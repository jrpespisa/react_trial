import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

//Category Component
let metriccat = <select>
            <option>Water</option>
            <option>Electricity</option>
          </select>;

$(function () {
  ReactDOM.render(
    metriccat,
    document.getElementById('category')
  );
});

//Type Component
let metrictype = <select>
                    <option>Usage</option>
                    <option>Meter Reading</option>
                  </select>;

$(function () {
  ReactDOM.render(
    metrictype,
    document.getElementById('type')
  );
});

//Input Component
let inputfield = <input type="text" className="form-control" id="qty" placeholder="100 kWh"/>
;

$(function () {
  ReactDOM.render(
    inputfield,
    document.getElementById('inputdata')
  );
});
