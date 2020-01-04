import React, {useEffect} from 'react';
import './App.css';

import Navbar from './containers/Navbar/Navbar';
import Main from './components/Main/Main';
import UserInput from './containers/UserInput/UserInput';
import About from './components/About/About';

function App() {

  // Sets theme preference on first use
  useEffect(() => {
    if (localStorage.getItem('darkMode') == null) {
      localStorage.setItem('darkMode', false);
    }
    window.scrollTo(0, 0);
  }, []);

  return <div className="App">
    <Navbar/>
      
    <Main>
      <UserInput/>
      <About/>
    </Main>

  </div>
}

export default App;
