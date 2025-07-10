import { createContext, useReducer } from "react";

const initialState={language:"en"}

function reducer(state,action){
    switch(action.type){
        case "change":
            return{...state,language:action.payload}
            default:
                return state;
    }
}
const LanguageContext=createContext();

export function LanguageProvider({children}){
    const[state,dispatch]=useReducer(reducer,initialState)

    return(
       <LanguageContext.Provider value={{state,dispatch}}>
        {children}
       </LanguageContext.Provider>
    )
}
export default LanguageContext