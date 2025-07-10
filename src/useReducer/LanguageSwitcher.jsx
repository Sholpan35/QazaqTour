import { useContext } from "react";
import LanguageContext from "./LanguageContext";

function LanguageSwitcher(){
    const{state, dispatch}=useContext(LanguageContext)
    const translations={
        en:{
            title: 'Clothes store',
            desc: 'the best clothes store',
            navhome:"Home",
            navcontact:"Contact",
            navsearch:"Search",
            navnew:"New collection"
        }, 
        kz:{
            title: 'Киім дүкені',
            desc: 'Өте керемет киім дүкені',
            navhome:"basty bet",
            navcontact:"Bailanys",
            navsearch:"Izdey",
            navnew:"Zhana toptama"
        }, 
        ru:{
        title:"Магазин одежды",
        desc:"Самый лучший магазин одежды",
        navhome:"главная страница",
        navcontact:"Связаться",
        navsearch:"Poisk",
        navnew:"Novaiya kolleksia"
        }
    }
    return(
        <div>
            <select onChange={(e)=>dispatch({type:"change",payload:e.target.value})}>
                <option value="en">english</option>
                <option value="ru">russian</option>
                <option value="kz">kazakh</option>
            </select>
            <h2>{translations[state.language].title}</h2>
            <p>{translations[state.language].desc}</p>
            <a href="">{translations[state.language].navhome}</a> <br />
            <a href="">{translations[state.language].navcontact}</a> <br />
        <a href="">{translations[state.language].navsearch}</a><br />
        <a href="">{translations[state.language].navnew}</a>
        </div>
    )
}
 export default LanguageSwitcher