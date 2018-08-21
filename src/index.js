// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './manifest';
import App from './components/app/App';
import registerServiceWorker from './registerServiceWorker';

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.render(<App />, rootElement);
}
registerServiceWorker();
