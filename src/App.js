import Homepage from './components/Homepage'
import Header from './components/Header';
import ToTop from './components/ToTop';
import listingService from './services/listings.js' 
import { useState, useEffect } from 'react';


function App() {
  const [toggle, setToggle] = useState(false)
  const [display, setDisplay] = useState([])

  useEffect( () => {
    let data
    let events = []
    if (toggle) {
      data = listingService.getAllTest();
    } else {
      data = listingService.getAll()
    }
    data.forEach((event) => {
      event.Dates.forEach((date) => {
        const dateEvent = {
          Title: event.Title,
          Type: event.Type,
          Date: date,
          Image: event.Image,
          Description: event.Description,
        };
        events.push(dateEvent);
      });
    });
    console.log("a", events)
    setDisplay(events);
  }, [toggle])

  return (
    <div className="App bg-[#F0F0F0] w-screen h-screen">
      <Header toggle={toggle} setToggle={setToggle}/>
      <Homepage listings={display} />
      <ToTop />
    </div>
  );
}

export default App;
