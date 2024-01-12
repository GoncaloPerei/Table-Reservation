import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import ReactDOM from 'react-dom/client'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-kzjm5760tstl1slt.us.auth0.com"
    clientId="qn7si2L0E2TJKsshQY6v26TZoWp3NIq2"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
);