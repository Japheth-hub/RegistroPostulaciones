import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
const { VITE_URL } = import.meta.env

export default function Portal({name, portal}) {

  // const [portales, setPortales] = useState([])

  // useEffect(() => {
  //   async function getData() {
  //     try {
  //       const { data } = await axios(`${VITE_URL}portales`)
  //       setPortales(data)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   getData()
  // }, [])


  return (<>
    <div className='form-floating'>
      <input type="text" className='form-control' placeholder='Vacante' value={name} onChange={(e)=>{portal(e)}}/>
      <label>Nombre</label>
    </div>
  </>)
}
