import './App.css'
import LoginBtn from './components/LoginBtn'
import LogoutBtn from './components/LogoutBtn';
import { useAuth0 } from '@auth0/auth0-react'

function App() {

  const { user, isAuthenticated } = useAuth0();

  return (
    <>
      <h1>Hello World</h1>
      {isAuthenticated ? (
        <div>
          {user.name}
          <br/><br/>
          <LogoutBtn/>
        </div>
      ) : <LoginBtn/>}
    </>
  )
}

export default App
