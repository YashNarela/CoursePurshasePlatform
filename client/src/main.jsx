import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'

import 'bootstrap/dist/css/bootstrap.min.css';

import rootReducer from './reducer/index.reducer.js'
import { configureStore } from '@reduxjs/toolkit'


const store = configureStore({

        reducer: rootReducer,
    
})



createRoot(document.getElementById('root')).render(

    <Provider store={store}>
    <App />
    </Provider>,
 
)
