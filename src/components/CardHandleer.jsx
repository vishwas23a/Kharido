import React, { useEffect, useState } from 'react'
import Card from './Card'

function CardHandleer() {
    
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch("https://dummyjson.com/products")
        .then(data=>data.json())
        .then(res=>{
            
            setProducts(res.products)
            console.log(res);
        })
    },[])


    const remove=(active)=>{
        const lproduct=products.filter(item=>item!==active)
        setProducts(lproduct)
    }




  return (
    <div className='flex flex-wrap justify-evenly  overflow-auto '>

        {products.map(item=>(
            
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
  )
}

export default CardHandleer
