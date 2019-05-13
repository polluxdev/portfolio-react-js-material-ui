import React from 'react';
import './App.css';
import Main from './components/pages/Main';
import AppBar from './components/AppBar';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div>
      <AppBar>
        <Link to='/home'>Home</Link>&nbsp;&nbsp;
        <Link to='/profile'>Profile</Link>&nbsp;&nbsp;
        <Link to='/contact'>Contact</Link>&nbsp;&nbsp;
        <Link to='/portfolio'>Portofolio</Link>&nbsp;&nbsp;
      </AppBar>
      <Main/>
    </div>
  );
}

export default App;
