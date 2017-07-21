import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';


const themeReducer = (state, action) => {
    if (!state) return {
        themeColor: 'red'
    };
    switch (action.type) {
        case 'CHANGE_COLOR':
            return { ...state, themeColor: action.themeColor };
        default:
            return state
    }
};

const store = createStore(themeReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
