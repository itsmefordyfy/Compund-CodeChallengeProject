import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'
import { store, persistor } from '../store'
interface ReduxProviderProps{
  children: React.ReactNode
}
export const ReduxProvider: React.FC<ReduxProviderProps> = ({ children }) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {children}
    </PersistGate>
  </Provider>
)
