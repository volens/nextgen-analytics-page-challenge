import React from 'react';
import './App.css'
import Dashboard from '../pages/Dashboard';
import Navigation from '../components/navigation/Navigation';

function App() {
  return (
     <div className="main-app ">
       <Navigation/>
       <Dashboard/>

     </div>
  );
}

export default App;
