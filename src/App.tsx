import './App.css'
import { useEffect, useState } from 'react'

import Grid from '@mui/material/Grid2'
import DishTable from './components/DishTable'
import Student from './components/Student'

import type { Dish } from './interface/Dish'




function App() {

  let url = "https://raw.githubusercontent.com/aavendan/datos/refs/heads/main/tasteatlas/bestdishes100-2425.json"

  const [data, setData] = useState<Dish[]>([])
   useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        if (!response.ok) throw new Error(`HTTP ${response.status}`)
        const json = await response.json()

        if (Array.isArray(json)) {
          setData(json as Dish[])
        } else {
          setData((json?.data ?? []) as Dish[])
        }
      } catch (error) {
        console.error('Error al cargar datos:', error)
        setData([])
      }
    }

    fetchData()
  }, [url])



  return (
    <Grid container spacing={5}>
      {/* Student */}
      <Grid size={{ xs: 12 }}>
        {/*PENDIENTE: Envíe sus datos (apellidos, nombres y paralelo) como props del componente */}
        <Student apellidos="TU_APELLIDO" nombres="TU_NOMBRE" paralelo="2" />
      </Grid>

      {/* DishTable */}
      <Grid size={{ xs: 12 }}>
        {/* PENDIENTE: Envíe la variable de estado como prop */}
        <DishTable data={data} />
      </Grid>
    </Grid>
  )
}
export default App
