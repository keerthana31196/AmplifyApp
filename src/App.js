import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { Container } from '@material-ui/core';

import HeaderNext from './Default/HeaderNext';
import Footer from './Default/Footer';
import Main from './Views/Main';

import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <HeaderNext />
        <Main />
        <Footer />
      </Container>

      <AmplifySignOut />

    </div>
  );
}

export default withAuthenticator(App);