import './App.scss';
import { FC } from 'react';
import Views from './routes/routes';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './store/store';

const App: FC = () => {

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor} >
          <Views />
        </PersistGate>
      </Provider>
    </>
  )
}

export default App;
