import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import { store } from './shared/helpers';
import { configureFakeBackend } from './shared/helpers';

import './styles/index.scss';

import { App } from './components/App';
import * as serviceWorker from './serviceWorker';

// setup fake backend
configureFakeBackend();



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

serviceWorker.unregister();
