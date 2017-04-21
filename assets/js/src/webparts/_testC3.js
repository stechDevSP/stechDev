// import React from 'react';
// import ReactDOM from 'react-dom';
// import c3 from 'c3';


// (function(APP) {
//     "use strict";

//     APP.CHART = {};

//     APP.CHART.init = function() {

//         var TestChart = React.createClass({
//             render() {
//                 return (
//                     <div className="chart-container">
//                         <div id="chart"></div>
//                         <div id="chart2"></div>
//                     </div>
//                 );
//             }
//         });

//         ReactDOM.render(
//             <TestChart />,
//             document.getElementById('app1')
//         );

//         var chart = c3.generate({
//             bindto: '#chart',
//             data: {
//                 columns: [
//                     ['data', 91.4]
//                 ],
//                 type: 'gauge',
//                 onmouseover: function(d, i) { console.log("onmouseover", d, i, this); },
//                 onmouseout: function(d, i) { console.log("onmouseout", d, i, this); },
//                 onclick: function(d, i) { console.log("onclick", d, i, this); },
//             },
//             gauge: {
//                 label: {
//                     //            format: function(value, ratio) {
//                     //              return value;
//                     //            },
//                     //            extents: function (value, isMax) {
//                     //                return value + '%';
//                     //            },
//                     //          show: false // to turn off the min/max labels.
//                 },
//                 //          min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
//                 //          max: 100, // 100 is default
//                 //          units: ' %',
//                 //          width: 39 // for adjusting arc thickness
//             },
//             color: {
//                 pattern: ['#FF0000', '#F6C600', '#60B044'], // the three color levels for the percentage values.
//                 threshold: {
//                     //            unit: 'value', // percentage is default
//                     //            max: 200, // 100 is default
//                     values: [30, 60, 90] // alternate first value is 'value'
//                 }
//             }
//         });

//         var chart2 = c3.generate({
//             bindto: '#chart2',
//             data: {
//                 columns: [
//                     //            ["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
//                     ["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
//                     ["virginica", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
//                     ["setosa", 30],
//                     //            ["versicolor", 40],
//                     //            ["virginica", 50],
//                 ],
//                 type: 'donut',
//                 onmouseover: function(d, i) { console.log("onmouseover", d, i, this); },
//                 onmouseout: function(d, i) { console.log("onmouseout", d, i, this); },
//                 onclick: function(d, i) { console.log("onclick", d, i, this); },
//                 order: null // set null to disable sort of data. desc is the default.
//             },
//             axis: {
//                 x: {
//                     label: 'Sepal.Width'
//                 },
//                 y: {
//                     label: 'Petal.Width'
//                 }
//             },
//             donut: {
//                 label: {
//                     //            format: function (d, ratio) { return ""; }
//                 },
//                 title: "Iris Petal Width",
//                 width: 70
//             }
//         });
//         setTimeout(function() {
//             chart2.load({
//                 columns: [
//                     ['data1', 30, 20, 50, 40, 60, 50],
//                 ]
//             });
//         }, 1000);
//         setTimeout(function() {
//             chart2.unload({
//                 ids: 'virginica'
//             });
//         }, 2000);
//     };

// })(window.APP = window.APP || {});
