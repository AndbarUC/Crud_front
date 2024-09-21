
import  { useState, useEffect } from 'react';
import './tablereact.css'

export const TableReactComp = () => {

  let response = [];
    const url = "http://localhost:8080/api/v1/products";
     
     useEffect(() => {
      
         fetch(url, {
          method: 'GET',
          mode: 'no-cors',
	        headers: {
              'Content-type':'application/json',
              'Transfer-Encoding' : "chunked",
        	}
    	})
      .then(response => {
        if (!response.ok) {
          console.log(response);
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then( (data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log('Fetch error: ', error);
      })
        


     },[]
    ); 

  
  return (
    <div>
      <div className='blockSearch'>
        <input type='text' className='search'/>
        <button className='searchBtn' >Buscar</button>
      </div>
      <table>
        <thead>
        <tr>
        <th>ID</th>
        <th>Nombre</th>
        <th>Descripción</th>
        <th>Precio</th>
        <th>Stock</th>
        <th>Acciones</th>
        </tr>
        </thead>

        <tbody>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>
            <button>Eliminar</button>
            <button>Editar</button>
          </td>
        </tr>    
        </tbody>    
      </table>

    </div>
  );
  
};

                                

//export default TableReactComp;