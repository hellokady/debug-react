import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const Header = () => React.createElement('h1', {
  style: {
    textAlign: 'center',
    color: 'red',
    fontSize: '1rem'
  }
}, 'div', <span><br />span</span>)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
