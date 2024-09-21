import React, {  useState, useEffect, useRef  } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./meowfacts.css";


export function Meowfacts() {
    
    let [mensaje, setMensaje] = useState([]);
    const url = "https://meowfacts.herokuapp.com/?lang=esp-es&count=2";
    const linkRef = useRef(null);
        
        useEffect(() => {
            fetch(url)
            .then((resp) =>  resp.json() )
            .then( (data) => { 
               
                setMensaje([
                    data.data[0],
                    data.data[1]
                    ]);                
            } )
            .catch((error) => console.log(error) )
            .finally( (f) => {} );
        }, []);

        useEffect(() => {
            if (linkRef.current) {
              linkRef.current.click();
            }
          }, []);
      

        return (
            <div>
                <a hidden href="#modal1" ref={linkRef} >DESLIZAR</a>

                <div id="modal1" className="modalmask">
                    <div className="modalbox movedown">
                        <a href="#close" title="Close" className="close">X</a>
                        <h2>Sabías que...</h2>
                        <p>{mensaje[0]}</p>
                        <p>{mensaje[1]}</p>
                    </div>
                </div>
            </div>
        );

    
};
