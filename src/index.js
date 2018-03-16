import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import Movies from './components/movies';

const store = configureStore();

ReactDOM.render( <Provider store={store}>
    <Movies />
</Provider>, document.getElementById('root'));
registerServiceWorker();
