import './App.css';
import GameList from './components/GameList/GamesList';
import Navbar from './components/Navbar';
import Carousel from './components/CarouselHome';

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
