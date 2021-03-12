import NavBar from './NavBar.js';

function TopNav() {
    return (
        <div class = "top-nav">
            <NavBar></NavBar>
            <h1 style = {{fontSize: '48px', paddingLeft: 10, paddingRight: 10}}>Root</h1>
        </div>
    );
  }
  
  export default TopNav;