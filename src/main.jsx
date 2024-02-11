import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain='zumthezazaking.us.auth0.com'
    clientId='pmppVJN6U49gcCpuJ79nV0zJXia8eC84'
    authorizationParams={{
      redirect_uri:window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
)
