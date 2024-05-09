import React, { useEffect, useState } from 'react'
import Card from './Card'
import Category from './Category'

function CartHandler() {
    const [cartData,setCartData]=useState([])

    useEffect(()=>{
        fetch(`https://dummyjson.com/products/1`)
        .then(data=>data.json())
        .then(res=>{
            
            setCartData(res)
            console.log(res);
        })
    },[])



  return (
    <div className='flex justify-evenly flex-wrap'>


        <Card 
            
            id={cartData.id}
            title={cartData.title}
            description={cartData.description}
            brand={cartData.brand}
            stock={cartData.stock}
            price={cartData.price}
            category={cartData.category}
            thumbnail={cartData.thumbnail}


   />


      
    </div>
  )
}

export default CartHandler
