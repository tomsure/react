import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import 'antd/dist/reset.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ConfigProvider locale={zhCN}>
    <Provider store={store}>
      <HashRouter>
        < App />
      </HashRouter>
    </Provider>
  </ConfigProvider >
);
