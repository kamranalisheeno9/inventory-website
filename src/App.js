import './App.css';
import { useState } from "react";
import MainPage from './pages/mainpage'
import Login from './pages/login.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {

  const [displayLogin,setDisplayLogin]=useState(false)
  return (
    <Router>

<Switch>

    <div className="App">
      <Route path="/dashboard">
      <MainPage display={displayLogin} setDisplay={setDisplayLogin} />
</Route>
      <Route  path="/">
        <Login display={displayLogin} setDisplay={setDisplayLogin} />
      </Route>
    </div>
</Switch>
    </Router>
  );
}

export default App;
