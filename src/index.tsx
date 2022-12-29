import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';
import {BrowserRouter } from "react-router-dom";
import ScrollToTop from './scrollToTop';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store = {store}>
      <BrowserRouter>
        <ScrollToTop>
         <App />
        </ScrollToTop>  
      </BrowserRouter>
    </Provider>
);
