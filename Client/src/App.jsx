
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Home from './pages/Home'
import About from './pages/About'
import DoctorLogin from './pages/DoctorLogin'
import DoctorSearch from './pages/DoctorSearch'
import DoctorResigtraction from './pages/DoctorRagistraction'
import DoctorHomeDashboard from './pages/DoctorHomeDashboard'
import BookNow from './pages/BookNow'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='search' element={<DoctorSearch/>}/>
        <Route path='login' element={<DoctorLogin/>}/>
        <Route path='booknow/:id' element={<BookNow/>}/>
        <Route path='registration' element={<DoctorResigtraction/>}/>
        </Route>
      </Routes>
      <Routes>
        <Route path='dashboard' element={<DoctorHomeDashboard/>}>

        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
