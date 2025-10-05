import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import RootLayout from './routes/RootLayout.jsx'
import HomePage from './routes/HomePage.jsx'
import InstantBooking from './routes/InstantBooking.jsx'
import EmergencyServices from './routes/EmergencyServices.jsx'
import KnowledgeHub from './routes/KnowledgeHub.jsx'
import CustomerDashboard from './routes/CustomerDashboard.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'instant-booking', element: <InstantBooking /> },
      { path: 'emergency-services', element: <EmergencyServices /> },
      { path: 'knowledge-hub', element: <KnowledgeHub /> },
      { path: 'dashboard', element: <CustomerDashboard /> },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
