import "./footer.css";
import {Uselessfacts as UF} from "../../service/uselessfacts.service"

export const FooterComp = (props)=>{
    return (
        <footer className="container-footer">
            <UF />
        </footer>
    );
}