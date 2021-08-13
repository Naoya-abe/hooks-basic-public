import React from 'react';
import { AuthProvider } from './context/AuthContext';
import './App.css';
import UserAuth from './components/userAuth/UserAuth';

function App() {
  return (
    <AuthProvider>
      <div className='App'>
        <h2>#4 useContext</h2>
        <UserAuth />
      </div>
    </AuthProvider>
  );
}

export default App;
