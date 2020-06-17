import React, { useState } from 'react';
import Routes from './src/routes'
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import * as firebase from 'firebase';
import firebaseConfig from './src/config/firebaseConfig';

import { Provider } from 'react-redux';
import store from './src/store';

firebase.initializeApp(firebaseConfig);

const getFonts = async () => await Font.loadAsync(
  {
    'Lato': require('./src/assets/fonts/Lato-Regular.ttf'),
    'Lato-Bold': require('./src/assets/fonts/Lato-Bold.ttf'),
  });


export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  return (
    <>
      { fontsLoaded ?
        (
          <Provider store={store}>
            <Routes />
          </Provider>
        ) :
        <AppLoading
          startAsync={getFonts}
          onFinish={() => setFontsLoaded(true)}
        />
      }
    </>
  );
}
