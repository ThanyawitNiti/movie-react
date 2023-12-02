import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import axios from './config/axios'
import Card from './card/Card'

function App() {
  const [data, setData] = useState()

  useEffect(()=>{
    axios
      .get('/movie/watch/list')
      .then((res)=>{
        setData(res.data)
      })
      .catch((err)=>{
        console.log(err)
      })
  },[])

  console.log(data)
  return (
    <>
    <div className='border-2 border-red-200  flex flex-wrap justify-center'>
     <div className='flex flex-row flex-wrap gap-5 justify-center py-4'>
      {data.map((el)=>(
        <Card key={el.id} name={el.original_title} overview={el.overview} rate={el.vote_average} bgDrop={el.backdrop_path
        } poster={el.poster_path}/>
      ))}
     </div>
    </div>
    </>
  )
}

export default App
