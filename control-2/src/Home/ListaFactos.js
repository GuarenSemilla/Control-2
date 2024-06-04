import React, { useEffect, useState } from 'react';

function ListaFactos() {
    const [mensajes, setUsers] = useState([]);

    useEffect(() => {
        // Realiza la petición al backend
        fetch(`https://api.chucknorris.io/jokes/search?query=Francisco`)
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error:', error));
    }, []);

    const listItems = mensajes.map(user => (
        <li key={user.id}>
            Name: {user.value}, updated_at: {user.correo}
        </li>
    ));
    return (
        <div>
            <h1>Lista de Usuarios</h1>
            <ul>{listItems}</ul>
        </div>
    );
}

export default ListaFactos;
