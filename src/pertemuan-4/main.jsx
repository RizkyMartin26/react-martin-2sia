import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './tailwind.css'
import FrameworkList from './FrameworkList'
import ResponsiveDesign from './ResponsiveDesign' // Memanggil komponen sesuai arahan modul

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Aplikasi Utama */}
    <FrameworkList />
    
    {/* Tugas Latihan Responsive Design di bagian bawah layar */}
    <div className="bg-slate-100 pb-20">
      <ResponsiveDesign />
    </div>
  </StrictMode>,
)