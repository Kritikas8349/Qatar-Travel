import { useState } from 'react';
import './App.css';
import Home from './component/Home';
import ScrollToTopButton from './component/ScrollToTopButtom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

        <Home/>
        <ScrollToTopButton/>

        
    </>
  )
}

export default App
