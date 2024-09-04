import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './HomeCompo/Home.jsx'
import Dashboard from './Dashboard/Dashboard.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
import AuthSignIn from './Authentication/AuthSignIn.jsx'
import EditResume from './Dashboard/Resume/EditResume.jsx'


// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}


const router = createBrowserRouter([
  {
    element: <App></App>,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      },
      {
        path: '/dashboard/resume/:resumeId/edit',
        element: <EditResume></EditResume>
      }
    ]
  },
  {
    path: '/',
    element: <Home></Home>
  },
  {
    path: '/auth/signin',
    element: <AuthSignIn></AuthSignIn>
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router}></RouterProvider>
    </ClerkProvider>

  </StrictMode>,
)
