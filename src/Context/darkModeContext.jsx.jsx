import { createContext, useState } from "react";

export const darkModeContext = createContext();
const {Provider} = darkModeContext;

const DarkModePovider = ({children}) =>{

    const [isDark, setIsDark] = useState(false);

    const container = document.getElementById('root') ;
    

    const toggleDarkMode = () => {
        isDark === false ? setIsDark(true) : setIsDark(false);
        isDark === false ? container.classList.add('dark') : container.classList.remove('dark');
    }

    const funcionesContexto = {
        toggleDarkMode,
        isDark
    }

    return(
        <Provider value={funcionesContexto}>
            {children}
        </Provider>
    )
}

export default DarkModePovider;