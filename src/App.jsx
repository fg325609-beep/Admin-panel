import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './companents/Sidebar/Sidebar'
import Contact from './pages/ContactPages/ContactPages'
import Sutudent from './pages/SutudentPages/SutudentPages'
import Teacher from './pages/TeachersPages/TeachersPages' 
import Layaut from './companents/Layaut/Layaut'


const App = () => {
  return (
    <> 
      <BrowserRouter>
        
        <Sidebar />

        <div style={{ flex: 1, padding: '20px' }}>
          <Routes>
           <Route element={<Layaut/>}>
             <Route path='contact' element={<Contact />} />
            <Route path='student' element={<Sutudent />} />
            <Route path='teachers' element={<Teacher />} />
           </Route>
          </Routes>
        </div>

      </BrowserRouter>
    </>
  )
}

export default App