import React, { useState } from "react";

function UseSearchFilter(items){
    const[search,setSearch]=useState("")
const filteredItems=items.filter(item=>
item.name.toLowerCase().includes(search.toLowerCase()||item.brand.toLowerCase().includes(search.toLowerCase())))
return{search,setSearch,filteredItems}
}