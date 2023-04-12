import { Outlet, useLoaderData } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { createContext } from 'react'
import { ToastContainer } from 'react-toastify'
import StayTop from './utilities/StayTop'


export const AllJobsData = createContext([]);

function App() {
  const jobData = useLoaderData();
  return (
    <AllJobsData.Provider value={jobData}>
      <StayTop />
      <Nav />
      <Outlet />
      <Footer />
      <ToastContainer />
    </AllJobsData.Provider>
  )
}

export default App
