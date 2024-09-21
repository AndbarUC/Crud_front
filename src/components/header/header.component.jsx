import "./header.css";
import miImagen from '../../assets/logo.png';
import { Meowfacts } from "../meowfacts/meowfacts.component"; 


export const HeaderComp = (props)=>{
    
    //console.log(this.Meowfacts.Meowfacts());
    return (
        <div className="container">
            <img src={miImagen} alt="PTM" />
            <Meowfacts />
        </div>
    );
}