import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import './form.css'
import Portal from './formPortal/portal'
import Postulacion from './formPostulacion/postulacion'
import { validacionPostulacion, validacionPortal } from '../validaciones/validaciones'
import Tabla from './tabla/tabla'
const { VITE_URL } = import.meta.env


export default function Form() {

  const [tipo, setTipo] = useState('Postulacion')
  const [namePortal, setNamePortal] = useState('')
  const [agregar, setAgregar] = useState(true)
  const [formPostulacion, setFormPostulacion] = useState({
    vacante: '',
    empresa: '',
    portal: 'default'
  })

  function handleVacante(e){
    setFormPostulacion({...formPostulacion, vacante: e.target.value})
  }
  function handleEmpresa(e){
    setFormPostulacion({...formPostulacion, empresa: e.target.value})
  }
  function handlePortal(e){
    setFormPostulacion({...formPostulacion, portal: e.target.value})
  }

  function handleName(e){
    setNamePortal(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
  }

  async function submit(){
    try {
      if (tipo === 'Portal') {

        const result = await validacionPortal(namePortal)
        if (result.length === 0){
          const { data } = await axios.post(`${VITE_URL}portales`, { name: namePortal })
          setNamePortal('')
          console.log(data)
        } else {
          console.log(result)
        }

      } else if (tipo === 'Postulacion') {

        const result  = await validacionPostulacion(formPostulacion)
        if(result.length === 0){
          const { data } = await axios.post(`${VITE_URL}registro`, {
            vacante: formPostulacion.vacante,
            empresa: formPostulacion.empresa,
            id: formPostulacion.portal,
          })
          setFormPostulacion({
            vacante: '',
            empresa: '',
            portal: 'default'
          })
          setAgregar(!agregar)
          console.log(data)
        } else {
          console.log(result)
        }
      }

    } catch (error) {
      console.log(error)
    }
  }



  return (<>
    <form className='form bg-secondary-subtle p-3 m-auto' onSubmit={handleSubmit}>
      <div className='type'>
        <button className={`${tipo === 'Postulacion' && 'active'}`} onClick={() => { setTipo('Postulacion') }}>Postualcion</button>
        <button className={`${tipo === 'Portal' && 'active'}`} onClick={() => { setTipo('Portal') }}>Portal</button>
      </div>
      
      {tipo === 'Postulacion' && <Postulacion postulacion={formPostulacion} vacante={handleVacante} empresa={handleEmpresa} portal={handlePortal}/>}
      {tipo === 'Portal' && <Portal name={namePortal} portal={handleName}/>}

      <div className='actions'>
        <button className='btn btn-primary' onClick={submit}>Agregar {tipo}</button>
      </div>
    </form>

    <Tabla agregar={agregar}/>

  </>)
}
