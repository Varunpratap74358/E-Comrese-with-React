import React from 'react'

const Categry = ({finalCategry,setCatName}) => {

    let cat=finalCategry.map((v,i)=>{
        return(
            <li onClick={()=>setCatName(v)} key={i} className='bg-[#ccc] mb-2 p-[7px] cursor-pointer outher text-[18px] font-p[600]'>{v}</li>
        )
    })


  return (
      <div className='max-w-[290px]'>
      <h1 className='text-[25px] font-[500] p-[10px]'>Categri</h1>
      <ul>
       {cat}
       {cat}
      </ul>
    </div>
  )
}

export default Categry
