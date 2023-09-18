import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import userReducer from './features/user'
import productReducer from './features/product'
import urlReducer from './features/url'
import { usersApi } from './features/apiSlice'
import productsFilteredReducer from './features/filteredProducts'
import cartReducer from './features/cart'
import singleProductReducer from './features/singleProduct';

const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
    urlPage: urlReducer,
    filteredProducts: productsFilteredReducer,
    cart: cartReducer,
    singleProduct:singleProductReducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ApiProvider api={usersApi}>
      <Provider store={store}>
    <App />
    </Provider>
    </ApiProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
