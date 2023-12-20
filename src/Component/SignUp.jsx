
import React, { useState } from 'react';
import 'tailwindcss/tailwind.css'; 


const LoginPage = () => {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  
  const handleLogin = (e) => {
    e.preventDefault();


    console.log('Username:', username);
    console.log('Password:', password);

    
  };

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center">
      <div className="w-96">
        <h2 className="text-2xl font-bold mb-4">Login Page</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium">
              Username:
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-white text-black px-4 py-2 rounded-md"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
