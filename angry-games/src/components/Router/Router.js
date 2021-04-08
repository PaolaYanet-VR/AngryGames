import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';
  import GamesPage from '../../Pages/GamesPage';
  import TopNavbar from './Navbar';
  import './Router.css'
  
  export default function Router() {
    return (
      <div>
        <BrowserRouter>
          <TopNavbar />
          <div className="Catalogo">
            <Switch>
              <Route path="/games" component={GamesPage} />
              <Redirect exact path="/" to="/games" />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }