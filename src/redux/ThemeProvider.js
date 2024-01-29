'use client';

import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '@/redux/configureStore';
import { Provider } from 'react-redux';

function ThemeProvider({ children }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}

export default ThemeProvider;
