import React, { useState, useEffect } from 'react';


export const Uselessfacts = () => {
   let [mensaje, setMensaje] = useState('');
   const url = "https://uselessfacts.jsph.pl/api/v2/facts/random";
    
    useEffect(() => {
        fetch(url)
        .then((resp) => 
            {   resp.json().then(
                    (data) => {
                        if( mensaje === '' )
                        {
                            setMensaje(data.text);
                        }
                    }
                )
            } )
        .catch((error) => console.log(error));
    }, []);

    
    return mensaje;
      
    
};