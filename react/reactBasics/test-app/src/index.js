import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// entry point of our application
// report web vitals

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <div>hello</div> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


//reportWebVitals();

// report web vital function, dont really need it
reportWebVitals(console.log);
// then go to browser developer mode, and open up `console`
// can see that a object is consoled out and telling 
// Object
// delta : 5.600000001490116  // e.g. how long the first contentful paint took
// entries: [PerformanceNavigationTiming]
// id: "v2-1678681043167-5808084180739"
// name: "TTFB"
// value:  5.600000001490116
// [[Prototype]]: Object
