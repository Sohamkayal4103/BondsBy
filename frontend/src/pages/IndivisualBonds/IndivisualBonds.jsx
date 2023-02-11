import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'

export default function IndivisualBonds() {
    let { id } = useParams();
   useEffect(() => {
    const fetchData = async () => {
        const response = await fetch(`http://localhost:5000/api/bonds/${id}`)
        const data = await response.json()
        console.log(data)
        }
        fetchData()
   },[])
  return (
    <div>IndivisualBonds</div>
  )
}
