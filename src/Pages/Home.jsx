import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { axios_Instance } from '../Config/Get_api'

export default function Home() {
    const dispatch = useDispatch()


    useEffect(()=>{
        get_Data()
    },[])

    const get_Data = async ()=>{
        const detdata = await axios_Instance.get("/products")
        console.log(detdata.data);
    }
  return (
    <div>
      Product
    </div>
  )
}
