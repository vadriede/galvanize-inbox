import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Adapter from 'enzyme-adapter-react-16';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
