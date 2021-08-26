import './App.css';

import Nasa from './nasa/Nasa';
import Weather from './weather/Weather';
import Ticketmaster from './ticketmaster/Ticketmaster';


function App() {
  return (
    <div className="App">
      <Nasa/>
      <Weather/>
      <Ticketmaster/>
    </div>
  );
}

export default App;
