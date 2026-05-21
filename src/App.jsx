import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// XATOLAR TUZATILDI: Komponentlarning asl eksport nomlari (ContactPages va SutudentPages) to'g'ri import qilindi
import ContactPages from './pages/ContactPages/ContactPages'
import SutudentPages from './pages/SutudentPages/SutudentPages'
import TeachersPages from './pages/TeachersPages/TeachersPages' 
import Layaut from './companents/Layaut/Layaut' 

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Asosiy shablon */}
        <Route path="/" element={<Layaut />}>
          
          {/* Saytga kirganda avtomatik /students sahifasiga o'tadi */}
          <Route index element={<Navigate to="/students" replace />} />
          
          {/* Yo'llar (path) Sidebar-dagi Link-lar bilan mutloq mos kelishi shart */}
          <Route path="contacts" element={<ContactPages />} />
          <Route path="students" element={<SutudentPages />} />
          <Route path="teachers" element={<TeachersPages />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App