import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { Container } from '@material-ui/core';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import HeaderNext from './Default/HeaderNext';
import Footer from './Default/Footer';
import Main from './Views/Main';
import RestaurantMenu from './Views/RestaurantMenu';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Container>
  
          <HeaderNext />
          <Switch>
            <Route path="/" exact render={props => <Main {...props}/>}  />
            <Route path="/restaurant" render={props => <RestaurantMenu {...props}/>} />
          </Switch>
          <Footer />

        </Container>
      </Router>
      <AmplifySignOut className="amplify-so" />

    </div>
  );
}

export default withAuthenticator(App);