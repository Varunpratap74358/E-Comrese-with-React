
import axios from 'axios'
import './App.css'
import Categry from './Componantes/Categry'
import Products from './Componantes/Products'
import { useEffect, useState } from 'react'

function App() {
  let [finalCategry,setFinalCategry]=useState([])
  let [finalPro,setFinalPro]=useState([])
  let [catName,setCatName]=useState('')

  let getCategry=()=>{
    axios.get('https://dummyjson.com/products/categories')
    .then((res)=>res.data)
    .then((finalRes)=>{
      setFinalCategry(finalRes)
    })
  }

  let getProduct=()=>{
    axios.get('https://dummyjson.com/products')
    .then((res)=>res.data)
    .then((finalres)=>{
      setFinalPro(finalres.products)
      // console.log(finalres)
    })
  }


useEffect(()=>{
  getCategry()
  getProduct()
},[])

useEffect(()=>{
  if(catName !=='')
  {
    axios.get(`https://dummyjson.com/products/category/${catName}`)
    .then((res)=>res.data)
    .then((finalRes)=>{
      setFinalPro(finalRes.products)
    })
  }
},[catName])


let pItem=finalPro.map((v,i)=>{
  console.log(v)
  return(
    <Products key={i} pdata={v}/>
  )
})


  return (
    <>
      <div className='py-[40px]'>
        <div className='max-w-[1320px] mx-auto'>
          <h1 className='text-center text-[40px] font-bold mb-[30px]'>Our Product</h1>
            <div className='grid grid-cols-[30%_auto] gap-[20px]'>
                <div className=''>
                  <Categry finalCategry={finalCategry} setCatName={setCatName} />
                </div>
                <div>
                  <div className='grid grid-cols-3 gap-5 cursor-pointer'>
                   {/* <Products /> */}
                   {/* {pItem} */}

                   {finalPro.length>=1?pItem:"Product not found"}

                  </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default App



