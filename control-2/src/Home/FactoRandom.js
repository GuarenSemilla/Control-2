import React, { useEffect, useState } from 'react';


function FactoRandom() {
    const [mensaje, setMensaje] = useState('');

    const fetchJoke = () => {
        fetch('https://api.chucknorris.io/jokes/random')
            .then(response => response.json())
            .then(data => setMensaje(data))
            .catch(error => console.error('Error:', error));
    };

    useEffect(() => {
        fetchJoke();
    }, []);

    const handleReset = () => {
        fetchJoke();
    };

    return (
        <div>
            <h3>{mensaje.value}</h3>
            <div>
            <button onClick={handleReset}>Otro random fact</button>
            </div>
        </div>
    );
}

export default FactoRandom;
