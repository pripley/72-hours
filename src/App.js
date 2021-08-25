import logo from './logo.svg';
import './App.css';
import Nasa from './nasa/nasa';
import Weather from './weather/weather';
import Ticketmaster from './ticketmaster/ticketmaster';

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
