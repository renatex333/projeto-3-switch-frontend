import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Homepage from "./components/Homepage";
import FriendsList from './components/FriendsList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="switch-logo" src="/switch-logo.png" alt="Switch Logo" />
        {/* Aqui vai o menu hamburguer também */}
      </header>
      <Router>
        <div>
          {/* <ul>
            <li>
              <Link to="">Home</Link>
            </li>
          </ul> */}
          <Routes>
            <Route exact path='' element={[<Homepage/>, <FriendsList/>]}></Route>
          </Routes>
        </div>
      </Router>
      
    </div>
  );
}

export default App;
