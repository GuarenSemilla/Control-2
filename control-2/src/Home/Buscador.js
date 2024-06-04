import React, { useState } from 'react';

function Buscador() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const fetchUserProfile = async () => {
            try {
              console.log("Fetching user profile for email:", email);
              const response = await fetch(`https://api.chucknorris.io/jokes/random`);
              if (!response.ok) {
                const text = await response.text();
                throw new Error(`Error ${response.status}: ${text}`);
              }
              const data = await response.json();
            } catch (error) {
              console.error('Error fetching user profile:', error);
            }
          };
    } catch (error) {
      setError('Error de red: ' + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Login</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
}

export default Buscador;
