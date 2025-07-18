import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-ajkoh6s6sz15iztu.us.auth0.com"
      clientId="fh5yg3N63cvR51ysC5treiLKFiS1Yrey"
      authorizationParams={{
        redirect_uri: window.location.origin,
         audience: "https://api.myapp.com"
      }}
      cacheLocation="localstorage"
      >
    <App />
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
