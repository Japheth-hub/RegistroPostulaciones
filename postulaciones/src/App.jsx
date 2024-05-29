import { useState } from 'react'
import './App.css'
import Form from './components/form'

function App() {
  const [count, setCount] = useState(0)

  return (<>
    <h2 className='h2 text-center py-2 '>Registro de Postulaciones</h2>
    <div className='container m-auto divForm'>
      <Form/>
    </div>
  </>)
}

export default App
