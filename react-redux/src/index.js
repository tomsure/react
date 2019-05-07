import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList'
import {Provider} from 'react-redux'
import store from './store/index' 
const App=(
<Provider store={store}>  {/*使用Provider并绑定store*/}
       <TodoList />
    </Provider>

)


ReactDOM.render(App, document.getElementById('root'));

