import graphic from './imgs/Open_Doodles.png';
import graphic2 from './imgs/rating-scale.png';
import graphic3 from './imgs/browser-screencaps.png';
import graphic4 from './imgs/search-bar.png';
import graphic5 from './imgs/fact-image1.png';
import graphic6 from './imgs/fact-image2.png';

function HomePage() {
  return (
    <div style = {{backgroundColor: "#F5EFE2", height: "100vh", width: "100wh"}}>
        <div className = "container" style = {{justifyContent:"center"}}>

          <div className = "item1">
            <p style ={{fontSize: 50}}>We help you<br></br>make ethical and<br></br>sustainable choices.</p>
            <p style ={{fontSize: 30}}>Use our plugin to help you stay mindful during<br></br>your shopping experience.</p>
            <button style ={{marginTop: 100}}><p>Add to Chrome (it's free!)</p></button>

          </div>

          <div className = "item2">
            <img src = {graphic} />
          </div>
        
        </div>
      
      <div class = "container" style ={{alignContent:"center", justifyContent: "center", marginTop: 30}}> 
        <p style = {{fontSize: 50}}>We do the research so you don’t have to.</p>
      </div>


      <div class = "row-container">
        <img src = {graphic2} style = {{maxWidth: "589.97px", maxHeight: "159.97px", verticalAlign:"middle"}} />
        <p style = {{fontSize: "34px", marginLeft:"40px"}}>When visiting a clothing<br></br> retail/marketplace website, an<br></br>indicator will appear rating that <br></br> brand in terms of sustainability and<br></br> ethical practices. </p>
      </div>

      <div class = "row-container" style = {{alignContent:"center", justifyContent:"center"}}>
        <p style = {{fontSize: "34px"}}>Click our icon on the chrome <br></br>toolbar to learn information about <br></br>the company’s practices.</p>
        <img src = {graphic3} style = {{maxWidth: "667.65px", maxHeight: "483px", marginLeft:"50px", verticalAlign:"middle"}}/>
      </div>
    
      <div class = "row-container">
        <img src = {graphic4} style = {{maxWidth: "578px", maxHeight: "98px"}}/>
          <p style = {{fontSize: "34px", marginLeft: "40px"}}>Search for brands/online <br></br>marketplaces through our <br></br>brand index.</p>
      </div>

      <div class = "container" style = {{alignContent: "center", justifyContent: "center"}}>
        <p style = {{fontSize: "40px", marginRight: "15vw"}}>The fashion industry is the second largest polluter in the world.</p>
      </div>
      
      <div class = "container" style = {{justifyContent: "flex-end"}}>
        <p style = {{fontSize: "40px", marginRight: "15vw"}}>When we only treat garments as <br></br>disposable, we contribute to <br></br>negative consumption habits <br></br>that ultimately lead to detrimental effects <br></br>to the environment.</p>
        <img src = {graphic5} style = {{maxWidth: "665.44px", maxHeight: "476px"}} />
      </div>
      
      <div class = "container" style = {{alignContent: "center", justifyContent: "center"}}>
        <p style = {{fontSize: "40px", marginRight: "150px"}}>Many companies are guilty of ‘greenwashing’ or marketing <br></br>misleading information to deceive consumers into thinking they are <br></br>more sustainable than they really are.</p>
      </div>

      <div class = "container">
        <img src = {graphic6} style = {{maxWidth: "638.75px", maxHeight: "425px"}}/>
        <p style = {{fontSize: "40px", marginLeft: "50px"}}>We demand radical transparency.</p>
      </div>

    </div>

  );
}

export default HomePage;
