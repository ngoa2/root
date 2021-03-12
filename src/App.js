import './App.css';
import TopNav from './TopNav.js';
import HomePage from './HomePage.js';
import BrandSearchPage from './BrandSearchPage.js';
import WriteUpPage from './WriteUpPage.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div style = {{backgroundColor: "#F5EFE2", height: "100vh", width: "100wh"}}>
      <Router>
        <div class = "top-nav">
          <div class = "nav-bar">
              <Link to="/home"><p style = {{fontSize: '30px'}}><a>Home</a></p></Link>
              <Link to="/search"><p style = {{fontSize: '30px'}}><a>Brand Search Index</a></p></Link>
          </div>
          <h1 style = {{fontSize: '48px', paddingLeft: 10, paddingRight: 10}}>Root</h1>
        </div>
      <Switch>
        <Route path="/home">
            <HomePage />
        </Route>
        <Route path="/search">
            <BrandSearchPage />
        </Route>

        <Route path="/writeup">
            <WriteUpPage />
        </Route>
      </Switch>
    </Router>
        
    </div>

  );
}

export default App;
