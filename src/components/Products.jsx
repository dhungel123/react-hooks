import React, { useState } from 'react'
import { productsData } from '../../productsData';

const Products = () => {
    const [products,setProducts]=useState(productsData);
  
    const removeProduct=(_id)=>{
       // console.log("removed");
       const removeOne=products.filter((item)=>{
        if(item._id!==_id){
            return item;
        }
       });
       setProducts(removeOne);
    }

  return (
    <div>
        {products.map((item)=>{
            const {name,_id,price}=item;

           return( 
           <div style={{display:"flex",gap:"2rem"}}  key={_id}>
                <h3>{name}</h3>
                <h3>{price}</h3>
                <button  onClick={()=>removeProduct(_id)}>Remove</button>
            </div>
           );
        }
        )
        }
    </div>
  );
}

export default Products;