import './App.css';
import GameList from './components/GameList/GamesList';
import Navbar from './components/Navbar';
import Carousel from './components/CarouselHome';

function App() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <div className="App">
        <GameList />        
      </div>
    </div>
  );
}

export default App;
