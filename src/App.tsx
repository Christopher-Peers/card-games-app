import React from 'react';
import { Provider } from 'react-redux';

import { store } from './store';
import './App.css';



function App() {

    console.log(store.getState());
    return (
        <Provider store={store}>
            <h1>Card Games</h1>
        </Provider>
    );
}

export default App;
