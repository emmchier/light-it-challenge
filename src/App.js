import AppRouter from './routers/AppRouter';

import ApiContextProvider from './providers/ApiContextProvider';
import MainContextProvider from './providers/MainContextProvider';

const App = () => (
  <ApiContextProvider>
    <MainContextProvider>
      <AppRouter />
    </MainContextProvider>
  </ApiContextProvider>
);

export default App;
