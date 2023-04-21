import Homepage from './components/Homepage'

const listings = [
  {
    Title: "Beethoven's Greatest Works",

    Type: "Master’s Performance",

    Dates: ["2023-06-23T23:00:00Z", "2023-07-23T23:00:00Z"],

    Image: "*plugin any image url here*",

    Description: "Come witness this amazing performance.",
  },
];

function App() {
  return (
    <div className="App">
      <Homepage listings={listings} />
    </div>
  );
}

export default App;
