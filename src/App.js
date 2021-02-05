import HeaderNext from './Default/HeaderNext';
import Footer from './Default/Footer';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

import './App.css';

function App() {
  return (
    <div className="App">
      <HeaderNext />
      <AmplifySignOut />
      <Footer />
    </div>
  );
}

export default withAuthenticator(App);