import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList'
import TodoList1 from './TodoList1'

import store from './store'
import {Provider} from 'react-redux'
const App=(
   <Provider store={store}>
       <TodoList></TodoList>
       <TodoList1></TodoList1>
       
   </Provider>
)
ReactDOM.render(App, document.getElementById('root'));

