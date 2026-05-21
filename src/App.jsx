import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './companents/Sidebar/Sidebar'
import Contact from './pages/ContactPages/ContactPages'
import Sutudent from './pages/SutudentPages/SutudentPages'
import Teacher from './pages/TeachersPages/TeachersPages' // Komponent nomi Teacher

const App = () => {
  return (
    <> 
      <BrowserRouter>
        
        <Sidebar />

        {/* Asosiy kontent qismi */}
        <div style={{ flex: 1, padding: '20px' }}>
          <Routes>
            <Route path='contact' element={<Contact />} />
            <Route path='student' element={<Sutudent />} />
            {/* Bu yerda Teachers emas, import qilingan Teacher yoziladi */}
            <Route path='teachers' element={<Teacher />} />
          </Routes>
        </div>

      </BrowserRouter>
    </>
  )
}

export default App