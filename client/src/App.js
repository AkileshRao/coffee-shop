import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import Auth from "./pages/Auth";

function App() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  return (
    <div className="App">
      {!isAuthenticated ? <Auth /> : <Main />}
    </div>
  );
}

export default App;
