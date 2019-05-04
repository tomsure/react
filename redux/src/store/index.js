import {createStore,applyMiddleware,compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer'
import saga from './saga'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const sagaMiddleware=createSagaMiddleware()
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware) )  //第三方中间件;
const store=createStore(
    reducer,  enhancer
    )  //创建store

sagaMiddleware.run(saga)
export default store