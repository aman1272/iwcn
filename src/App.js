import Navbar from './Screens/Navbar';
import Home from './Screens/Home';
import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('')

  const getData = (props) => {
    setInputValue(props)
  }

  return (
    <>
      <Navbar getData={getData} />
      <Home data={inputValue} />
    </>
  );
}

export default App;
