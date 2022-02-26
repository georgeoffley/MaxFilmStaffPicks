import './App.css';
//import { getAllPicks } from './getPicks'
import { useState, useEffect } from 'react'

function App() {
  const API_URL = 'https://9ubroihs37.execute-api.us-east-1.amazonaws.com/default/MaxFilmQuery'

  const [picks, setPicks] = useState([]);

  useEffect(() => {

    const fetchPicks = async () => {
      try {
        const response = await fetch(API_URL, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json'},
        });
        const listPicks = await response.json();
        console.log(listPicks)
        setPicks(listPicks);
      } catch (err) {
        console.log(err.stack)
      }
    }

    (async () => await fetchPicks())();
  }, [])

  return (
    <div className="App">
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
