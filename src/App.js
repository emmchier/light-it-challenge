import MainContextProvider from './providers/MainContextProvider';
import AppRouter from './routers/AppRouter';

const App = () => (
  <MainContextProvider>
    <AppRouter />
  </MainContextProvider>
);

export default App;
