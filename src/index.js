import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
// import { PersistGate } from 'redux-persist/integration/react'
// import {store, persistor} from "./store/store";
import store from './reduxStore'
import './index.css';
import 'antd/dist/antd.css';
import App from './App';


// ReactDOM.render(
//   <Provider store={store}>
//     <PersistGate loading={null} persistor={persistor}>
//       <App />
//     </PersistGate>
//   </Provider>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);
