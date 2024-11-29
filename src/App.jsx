import { useState } from 'react'

import './App.css'
import AppointmentForm from './components/FormCard2'
import FormCard2 from './components/FormCard3'

function App() {
  return (
    <div className='mainWraper'>
    <FormCard2/>
      <AppointmentForm/>
    </div>
  )
}

export default App
