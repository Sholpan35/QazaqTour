import React, { useState } from "react";
import axios from "axios"
import Usefetch from "./UseForm";

function Axios1(){
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState("")

  function Validation(){
    const{error}=UseForm(email)
    console.log(error)
  }
  return(
    <div>
        <input type="email" onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" onChange={(e)=>setPassword(e.target.value)} />
        <button onClick={Validation}></button>
    </div>
  )
}
export default Axios1