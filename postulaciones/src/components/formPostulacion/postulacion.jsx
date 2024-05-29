import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
const { VITE_URL } = import.meta.env

export default function Postulacion({postulacion, vacante, empresa, portal}) {

  const [portales, setPortales] = useState([])

  useEffect(() => {
    async function getData() {
      try {
        const { data } = await axios(`${VITE_URL}portales`)
        setPortales(data)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])


  return (<>
    <div className='form-floating'>
      <input type="text" className='form-control' placeholder='Vacante' value={postulacion.vacante} onChange={(e) => {vacante(e)}}/>
      <label>Vacante</label>
    </div>

    <div className='form-floating '>
      <input type="text" className='form-control' placeholder='Empresa' value={postulacion.empresa} onChange={(e) => { empresa(e)}} />
      <label>Empresa</label>
    </div>

    <select className='form-select ' defaultValue='default' value={postulacion.portal} onChange={(e) => { portal(e)}}>
      <option value="default" disabled>Seleccione una opcion</option>
      {portales && portales.length > 0
        ? portales.map((portal) => {
          return <option key={portal.id} value={portal.id}>{portal.name}</option>
        })
        : <option value='null' disabled>No hay portales</option>
      }
    </select>
  </>)
}
