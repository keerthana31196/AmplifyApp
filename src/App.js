import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { Container } from '@material-ui/core';
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import HeaderNext from './Default/HeaderNext';
import Footer from './Default/Footer';
import Main from './Views/Main';

import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Router> */}
        <Container>
          {/* <Switch> */}
            <HeaderNext />
            <Main />
            <Footer />
          {/* </Switch> */}
        </Container>
      {/* </Router> */}
      <AmplifySignOut />

    </div>
  );
}

export default withAuthenticator(App);