import React from 'react'
import { BrowserRouter} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import AppRoutes from './routes/AppRoutes'

const App = () => {
  return (
      <main>
      <BrowserRouter>
      <Navbar/>
      <AppRoutes/>
      </BrowserRouter>
      </main>
  )
}

export default App

