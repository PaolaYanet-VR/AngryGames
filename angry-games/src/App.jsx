import './App.css';
import GameList from './components/GameList/GamesList';
import Navbar from './components/Router/Navbar';
import Carousel from './components/GameList/CarouselHome';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <div className="App">
        <GameList />        
      </div>
    </div>
  );
}

export default App;
