import React, { useEffect, useState } from 'react'
import Card from './Card'

function Category() {
    const [newProducts,setNewProducts]=useState([])
    const [showData,setShowData]=useState(false)

const data =()=>{

    const input=document.getElementById("input")
    const value=input.value;
    console.log(value);

    
        fetch(`https://dummyjson.com/products/category/${value}`)
        .then(data=>data.json())
        .then(res=>{
            
            setNewProducts(res.products)
            console.log(res);
        })


}
 
const show=()=>{
    setShowData(true)

}
 
const hide=()=>{
    setShowData(true)

}

    const remove=(active)=>{
        const lproduct=newProducts.filter(item=>item!==active)
        setNewProducts(lproduct)
    }


  return (
    <div>
           <div className=' flex '>
            <h3 onClick={show}  className='mt-20 ml-20 absolute hover:cursor-pointer hover:underline'>
                Category Available--{'>'} </h3>

                { showData ?<div className='mt-28 absolute ml-20 flex gap-5'  >
                    <ul>
                        <li>smartphones</li>
                        <li>laptops</li>
                        <li>fragrances</li>
                    </ul>
                    <ul>
                        <li>skincare</li>
                        <li>groceries</li>
                        <li>home-decoration</li>
                    </ul>

                </div> :""}

               
            <div className='flex justify-center gap-3 w-full mt-20'>
        <input type="text" id='input' className=' border-2 p-3 border-blue-700 rounded hover:bottom-2 hover:border-blue-300' />
        <button onClick={data}  className='border bg-blue-700 text-white p-3 rounded ' >search</button>
        </div>
        </div>
    
    <div className='flex flex-wrap justify-evenly  '>


{newProducts.map(item=>(
    
    <Card 
        key={item.id}
        id={item.id}
        title={item.title}
        description={item.description}
        price={item.price}
        brand={item.brand}
        category={item.category}
        thumbnail={item.thumbnail}
        stock={item.stock}
        remove={()=>remove(item)}
 

        
    />
))
    
}

</div>
        
    </div>
  )
}

export default Category
