import './App.css';
import MainPage from './pages/mainpage'
import Login from './pages/login.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>

<Switch>

    <div className="App">
      <Route path="/dashboard">

      <MainPage />
</Route>
      <Route  path="/">
        <Login />
      </Route>
    </div>
</Switch>
    </Router>
  );
}

export default App;
