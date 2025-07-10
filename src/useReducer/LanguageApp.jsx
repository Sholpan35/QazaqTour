import { LanguageProvider } from "./LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

function LangApp(){
    return(
        <div>
            <LanguageProvider>
                <LanguageSwitcher/>
            </LanguageProvider>
        </div>
    )
}
export default LangApp