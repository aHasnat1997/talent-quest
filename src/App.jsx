import { Outlet, useLoaderData } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { createContext } from 'react'


export const AllJobsData = createContext([]);

function App() {
  const jobData = useLoaderData();
  return (
    <AllJobsData.Provider value={jobData}>
      <Nav />
      <Outlet />
      <Footer />
    </AllJobsData.Provider>
  )
}

export default App
