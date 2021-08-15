import React from 'react';
import { AuthProvider } from './context/AuthContext';
import './App.css';
import Bank from './pages/bank/Bank';

function App() {
  return (
    <AuthProvider>
      <div className='App'>
        <h2>#5 useReducer</h2>
        <Bank />
      </div>
    </AuthProvider>
  );
}

export default App;
