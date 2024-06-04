import React, { useEffect, useState } from 'react';


function Sandia() {
    const [mensaje, setMensaje] = useState('');
    useEffect(() => {
        // Realiza la petición al backend
        fetch('https://api.chucknorris.io/jokes/random')
          .then(response => response.json())
          .then(data => setMensaje(data))
          .catch(error => console.error('Error:', error));
    }, []);
    console.log(mensaje);
  return (
    <div>
        <h3>{mensaje.value}</h3>
      </div>
  );
}

export default Sandia;
