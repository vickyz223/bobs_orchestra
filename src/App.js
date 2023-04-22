import Homepage from './components/Homepage'
import listingService from './services/listings.js' 
import { useState, useEffect } from 'react';


function App() {
  const [toggle, setToggle] = useState(false)
  const [display, setDisplay] = useState([])

  useEffect( () => {
    if (toggle) {
      setDisplay(listingService.getAllTest())
    } else {
      setDisplay(listingService.getAll())
    }
  }, [toggle])

  return (
    <div className="App">
      <button onClick={() => setToggle(!toggle)}>Toggle all</button>
      <Homepage listings={display} />
    </div>
  );
}

export default App;
