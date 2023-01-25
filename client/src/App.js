import { Outlet } from 'react-router-dom';
import './App.css';
import Auth from './pages/Auth';
function App() {

  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
