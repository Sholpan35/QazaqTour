import { useState } from "react";
import React from "react";

function UseForm({email,password}){
   const[error,setError]=useState('')
   if(!email.includes("@")){
      setError("email durus emes")
   }else if(password.length<6){
      setError("qypia soz 6tanbadan kem bolmay kazhet")
   }else{
      setError("siz satti tirkeldiniz")
   }
   return{error}
}
export default UseForm