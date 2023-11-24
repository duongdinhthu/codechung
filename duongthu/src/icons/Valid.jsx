import {IconContext} from "react-icons";
import {FaCheckCircle} from "react-icons/fa"
export default function ErroIcon(){
    return(
        <IconContext.Provider value={{color:"green",size:"1.7rem"}}>
            <FaCheckCircle/>

        </IconContext.Provider>
    );
}