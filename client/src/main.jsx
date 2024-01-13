import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Auth0Provider
      domain="dev-kzjm5760tstl1slt.us.auth0.com"
      clientId="qn7si2L0E2TJKsshQY6v26TZoWp3NIq2"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <App />
    </Auth0Provider>,
  </BrowserRouter>,
)
