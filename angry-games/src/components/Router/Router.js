import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';
  import GamesPage from '../../pages/GamesPage';
  import TopNavbar from './Navbar';
  
  export default function Router() {
    return (
      <div>
        <BrowserRouter>
          <TopNavbar />
          <Switch>
              <Route path="/games" component={GamesPage} />
              <Redirect exact path="/" to="/games" />
            </Switch>
        </BrowserRouter>
      </div>
    );
  }