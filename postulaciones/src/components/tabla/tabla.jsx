import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
const { VITE_URL } = import.meta.env

export default function Tabla({agregar}) {

  const [registros, setRegistros] = useState([])
  const [update, setUpdate] = useState(true)

  async function borrarRegistro(id){
    const confirmar = confirm('Esta seguro de borrar este registro?')
    if (confirmar){
      const { data } = await axios.delete(`${VITE_URL}registro/${id}`)
      console.log(data)
      setUpdate(!update)
    }
  }

  useEffect(()=>{
    async function getData(){
      try {
        const { data } = await axios(`${VITE_URL}registro`)
        setRegistros(data)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [update, agregar])

  return (<>
    <table className='table table-striped table-bordered container mx-auto text-center my-3 '>
      <thead>
        <tr>
          <th>Vacante</th>
          <th>Empresa</th>
          <th>Fecha</th>
          <th>Hora</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {registros && registros.length > 0 
        ? registros.map((registro) => {
            return (
              <tr key={registro.id}>
                <td>{registro.vacante}</td>
                <td>{registro.empresa}</td>
                <td>{registro.createdAt.slice(0, 10)}</td>
                <td>{registro.createdAt.slice(11, 19)}</td>
                <td>
                  <button onClick={()=>{borrarRegistro(registro.id)}} className='btn btn-danger'>Delete</button>
                </td>
              </tr>
            )
          })
        : <tr><td colSpan={5}>No hay datos para mostrar</td></tr>
        }
      </tbody>
    </table>
  </>)
}
