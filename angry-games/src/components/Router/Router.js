import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';
  import GamesPage from '../../Pages/GamesPage';
  import AddGamePage from '../../Pages/AddGamePage';
  import TopNavbar from './Navbar';
  import './Router.css'
  
  export default function Router() {
    return (
      <div>
        <BrowserRouter>
          <TopNavbar />
          <div className="Catalogo">
            <Switch>
              <Route path="/home" component={GamesPage} />
              <Route path="/addGame" component={AddGamePage} />
              <Redirect exact path="/" to="/home" />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }