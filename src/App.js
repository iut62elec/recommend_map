import logo from './logo.svg';
import './App.css';


import { Amplify } from 'aws-amplify';

import { NavBar, SideBar, SocialPost,SocialPostCollection} from './ui-components';
import { Flex, View,  withAuthenticator,AmplifyS3Image } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';

Amplify.configure(awsExports);
// ======


function App() {
  return (
    <div className="App">
      <NavBar />

      <SocialPostCollection/>
    </div>
  );
}

export default withAuthenticator(App);
