import './App.css';
import TopNav from './TopNav.js';
import HomePage from './HomePage.js';
import RatePage from './RatePage.js';
import BrandSearchPage from './BrandSearchPage.js';
import WriteUpPage from './WriteUpPage.js';
import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const TITLE = 'Root'
class App extends React.Component{
  constructor(props){
    super(props);
    
  }

  componentDidMount() {
    document.title = TITLE;
  }

  render() {
  return (
    <div style = {{backgroundColor: "#F5EFE2", height: "100vh", width: "100wh"}}>
      <Router>
        <div class = "top-nav">
          <div class = "nav-bar">
              <Link to="/"><p style = {{fontSize: '30px'}}><a>Home</a></p></Link>
              <Link to="/search"><p style = {{fontSize: '30px'}}><a>Brand Search Index</a></p></Link>
              <Link to="/rate"><p style = {{fontSize: '30px'}}><a>Rate a brand</a></p></Link>

          </div>
          <h1 style = {{fontSize: '48px', paddingLeft: 10, paddingRight: 10}}>Root</h1>
        </div>
      <Switch>
        <Route path="/search">
            <BrandSearchPage />
        </Route>

        <Route path="/rate">
            <RatePage />
        </Route>

        <Route path="/writeup/nike">
            <WriteUpPage brandTitle="Nike" logoSrc="nike.png" altBrands="Adidas,Patagonia,Bleed"/>
        </Route>

        <Route path="/writeup/patagonia">
            <WriteUpPage brandTitle="Patagonia" logoSrc="patagonia.png" altBrands="Houdini,Finisterre,Superstainable"/>
        </Route>

        <Route path="/writeup/allbirds">
            <WriteUpPage brandTitle="Allbirds" logoSrc="allbirds.png" altBrands="Adidas,Kotn,Bleed"/>
        </Route>

        <Route path="/writeup/uniqlo">
            <WriteUpPage brandTitle="Uniqlo" logoSrc="uniqlo.png" altBrands="Synergy,Pact,Bleed"/>
        </Route>

        <Route path="/writeup/everlane">
            <WriteUpPage brandTitle="Everlane" logoSrc="everlane.png" altBrands="Hopaal,Kotn,Synergy"/>
        </Route>

        <Route path="/writeup/zara">
            <WriteUpPage brandTitle="Zara" logoSrc="zara.png" altBrands="Reformation,Ganni,Hopaal"/>
        </Route>

        <Route path="/writeup/reformation">
            <WriteUpPage brandTitle="Reformation" logoSrc="reformation.png" altBrands="Synergy,Ganni,Hopaal"/>
        </Route>

        <Route path="/writeup/hm">
            <WriteUpPage brandTitle="HM" logoSrc="hm.png" altBrands="Kotn,Reformation,BackBeat"/>
        </Route>

        <Route path="/">
            <HomePage />
        </Route>
            
      </Switch>
    </Router>
        
    </div>

  );
  }
}

export default App;
