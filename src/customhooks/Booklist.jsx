import React from "react";
import UseSearchFilter from "./UseSearchFilter"
 import{useState} from 'react'

 function Booklist(){
    const[items,setItems]=useState(" ","Titanik","qargyn")
    const{search,setSearch,filtredItems}=UseSearchFilter(items)
    return(
        <div>
            <input type="" name="" onChange={(e)=>setSearch(e.target.value)} />
            {
                filtredItems.map((item)=>{
                    return(
                        <p>{item.name.price.brand}</p>
                    )
                })
            }
        </div>
    )
 }