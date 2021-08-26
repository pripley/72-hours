import './App.css';
import Nasa from './Nasa/Nasa';
import Weather from './Weather/Weather';
import Ticketmaster from './Ticketmaster/Ticketmaster'

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
