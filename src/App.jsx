
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import './App.css'
import { Button } from './components/ui/button'
import { useUser } from '@clerk/clerk-react';
import Header from './HomeCompo/Header';

function App() {
  const { userId, isLoaded, isSignedIn } = useUser();
  const navigate = useNavigate()

  if (!isSignedIn && isLoaded) {
    return <Navigate to={'auth/signin'}></Navigate>
  }
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  )
}

export default App
