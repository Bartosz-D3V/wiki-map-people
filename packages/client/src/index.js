// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './manifest';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

const rootElement = document.getElementById('root');

const getBaseUrl = () =>
  process.env.mode === 'prod' ? process.env.REACT_APP_PUBLIC_URL : 'http://localhost:8080';

if (rootElement) {
  ReactDOM.render(<App baseUrl={getBaseUrl()} />, rootElement);
}
registerServiceWorker();
