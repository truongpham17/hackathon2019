import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider as ReduxProvider } from 'react-redux';
import store, { persistor } from './src/store';

import Navigation from './src/Navigation';

export default class App extends React.Component {
  render() {
    console.disableYellowBox = true;

    return (
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigation />
        </PersistGate>
      </ReduxProvider>
    );
  }
}
