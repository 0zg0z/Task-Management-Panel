import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'
import './index.css'
import TaskManager from './Pages/TaskManager.jsx'
import MainPage from './Pages/MainPage.jsx'
import UserProfile from './Pages/UserProfile.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/taskPanel" element={<TaskManager />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)