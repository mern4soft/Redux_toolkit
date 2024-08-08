import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store.js'
import Todo from './Todo.jsx'
import Addtodos from './Addtodo.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <App />
    <Addtodos/>
    <Todo/>
  </Provider>




)
