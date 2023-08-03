import './App.scss'
import { LoginProvider } from './context/LoginContext';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <LoginProvider >
      <AppRouter />
    </LoginProvider>
  );
}

export default App;