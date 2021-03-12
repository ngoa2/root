import graphic1 from "./imgs/brand-article.png";
import graphic2 from "./imgs/HMrating.png";
import kotn from "./imgs/kotn.png";
import pact from "./imgs/pact.png";
import hos from "./imgs/house-of-sunny.png";

function WriteUpPage() {
  return (
    <div id = "writeup">
      <div class = "row-container" style = {{marginBottom: '20px'}}>
        <img src = {graphic1}></img>
        <div id = 'writeUpLeft'>
          <h1>Forever 21</h1>
          <p>A summary of the brand will go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
        </div>
      </div>

      <div id = "writeup-category">
          <h2>Our rating</h2>
          <div class = "row-container" style = {{marginBottom: '20px'}}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
          <img id = "writeup-rating-scale" src = {graphic2}></img>
        </div>

      </div>

      <div id = "writeup-category">
        <h2>Sustainable materials</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
      </div>
     
      <div id = "writeup-category">
        <h2>Ethical Practices</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
      </div>
     

      <div id = "writeup-category">
        <h2>Brand transparency</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
      </div>

      <div id = "writeup-category">
        <h2>Sustainable Alternatives</h2>
        <div class ="row-container">
          <img id = "alternativeImg" src = {kotn}></img>
          <img id = "alternativeImg" src = {pact}></img>
          <img id = "alternativeImg" src = {hos}></img>
        </div>
      </div>
    </div>



  );
}

export default WriteUpPage;