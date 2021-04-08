import './App.css';
import GameList from './components/GameList/GamesList';
import Navbar from './components/Router/Navbar';
import Carousel from './components/GameList/CarouselHome';

function App() {
  return (
    <div>
      <Navbar />
      <div className="App">
        <Carousel />
        <GameList />        
      </div>
    </div>
  );
}

export default App;
