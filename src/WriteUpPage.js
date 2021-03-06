import rating1 from "./imgs/1rating.png";
import rating2 from "./imgs/2rating.png";
import rating3 from "./imgs/3rating.png";
import rating4 from "./imgs/4rating.png";
import rating5 from "./imgs/5rating.png";
import rating7 from "./imgs/7rating.png";
import rating8 from "./imgs/8rating.png";
import rating9 from "./imgs/9rating.png";

import React, {Component} from 'react';

class WriteUpPage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      brand: {}
    };
  }

  componentDidMount() {
    let brandTitle = this.props.brandTitle
    fetch("https://api.root.quest/brandsearch?name="+brandTitle)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            brand: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      let SusTags = [
        "100% organic cotton",
        "Recycled materials",
        "No exotic animal use",
        "Eco-friendly materials",
        "Forestry management",
        "100% renewable energy",
        "ZQ Merino Certified Wool",
        "Water usage reduction",
        "Chemical usage reduction",
        "100% sustainable cotton",
        "Uses blend of recycled wool",
        "Uses wool and leather",
        "No textile waste reduction initiatives"
      ]
    
    
      let PracticeTags = [
        "Freedom of association",
        "Nondiscrimination policies",
        "Child labour policies",
        "FLA Workplace code of conduct certified",
        "100% living wage",
        "Fair trade certified",
        "No chemical waste reduction initiatives",
        "No COVID-19 worker protection",
        "Living wage payment unclear",
        "Unfavorable working conditions",
        "No guarantee of living wage"
        ]
    
      let TransparencyTags = [
        "Reports available online",
        "Supply chain transparent",
        "Sustainable apparel coalition certified",
        "Moderate supply chain transparency",
        "OEKO TEX STANDARD 100 Certified",
        "Bluesign certified",
        "Responsible down standard certified",
        "Low supply chain transparency",
        "No supply chain certifications"
        ]
    
    
      let goodTags = [
        "Reports available online",
        "Supply chain transparent",
        "Sustainable apparel coalition certified",
        "Moderate supply chain transparency",
        "OEKO TEX STANDARD 100 Certified",
        "Bluesign certified",
        "Responsible down standard certified",
        "Freedom of association",
        "Nondiscrimination policies",
        "Child labour policies",
        "FLA Workplace code of conduct certified",
        "100% living wage",
        "Fair trade certified",
        "100% organic cotton",
        "Recycled materials",
        "No exotic animal use",
        "Eco-friendly materials",
        "Forestry management",
        "100% renewable energy",
        "ZQ Merino Certified Wool",
        "Water usage reduction",
        "Chemical usage reduction",
        "100% sustainable cotton",
        "Uses blend of recycled wool"
      ]
    
      let badTags = [
        "Low supply chain transparency",
        "No supply chain certifications",
        "No chemical waste reduction initiatives",
        "No COVID-19 worker protection",
        "Living wage payment unclear",
        "Unfavorable working conditions",
        "No guarantee of living wage",
        "Uses wool and leather",
        "No textile waste reduction initiatives"
      ]

      let materials = [
        "100% organic cotton",
        "recycled materials", 
        "eco-friendly materials", 
        "ZQ Merino Certified Wool", 
        "tencel", 
        "hemp", 
        "low impact dyes"
      ]

      let animals = [
        "Uses wool and leather", "No exotic animal use", "Uses blend of recycled wool",  "uses exotic animal hair", "vegan products",
      ]

      let waste = ["100% renewable energy", "Water usage reduction", "Chemical usage reduction", "No textile waste reduction initiatives","No chemical waste reduction initiatives", "100% renewable energy"]

      let et = ["100% living wage", "freedom of association", "living wage initiatives", "code of conduct", "unfavorable working conditions", "child labor policies", "no guarantee of living wage", "no COVID-19 worker protection", "unclear living wage payments", "nondiscrimination policies"]
      
      let report = ["reports available online"]

      let certification = ["FLA Workplace Code of Conduct", "Sustainable Apparel Coalition", "OEKO TEX STANDARD 100", "Bluesign certified", "GOTS certification", "B Corps Certification", "Fair Trade Certified"]

      let supplyT = ["low supply chain transparency", "supply chain transparent"]


      // rating bar
      let Average = this.state.brand.Average;
      let imgSrc = "./imgs/1rating.png"
        if (Average <= 1.0/3.0) {
          imgSrc = rating1;
        }
        if (Average >= 2.0/3.0) {
          imgSrc = rating2;
        }
        if (Average >= 3.0/3.0) {
          imgSrc = rating3;
        } 
        if (Average >= 4.0/3.0) {
          imgSrc = rating4;
        }
        if (Average >= 5.0/3.0 || Average >= 7.0/3.0) {
          imgSrc = rating5;
        }
        if (Average >= 7.0/3.0) {
          imgSrc = rating7;
        }
        if (Average >= 8.0/3.0) {
          imgSrc = rating8;
        }
        if (Average == 9.0/3.0) {
          imgSrc = rating9;
        }
      

      // tag creation
      let tagString = this.state.brand.Tags;
      let tagArr = tagString.split(",");
      let goodSus = "";
      let goodEth = "";
      let goodT = "";
      let badSus = "";
      let badEth ="";
      let badT = "";
      let reportTag = "does not have";
      let certTag = "";

      let wasteTag = "any disclosed means";
      let wasteChoice = "does not"
      let animalHairTag = "wool and leather use";
      let animalHairChoice = "bad"

      for (let i = 0; i < tagArr.length; i++) {
        let tagName = tagArr[i].trim()

        if (SusTags.includes(tagName) && goodTags.includes(tagName)) {
          goodSus = tagName;
        } else if (SusTags.includes(tagName) && badTags.includes(tagName)){
          badSus = tagName
        }

        if (PracticeTags.includes(tagName) && goodTags.includes(tagName)) {
          goodEth = tagName;
        } else if (SusTags.includes(tagName) && badTags.includes(tagName)){
          badEth = tagName
        }


        if (TransparencyTags.includes(tagName) && goodTags.includes(tagName)) {
          goodT = tagName;

        } else if (SusTags.includes(tagName) && badTags.includes(tagName)){
          badT = tagName
        }

        if (certification.includes(tagName)) {
          certTag = tagName
        }

        if (report.includes(tagName)) {
          reportTag = "has";
        }

        if (animals.includes(tagName) && goodTags.includes(tagName)) {
          animalHairChoice = "good"
          animalHairTag = tagName
        }

        if (waste.includes(tagName) && goodTags.includes(tagName)) {
          wasteChoice = "does"
          wasteTag = tagName
        }
      }

      // decision making for write up page
      let envRating = this.state.brand.Environment;
      let envChoice = envRating;
      if (envChoice == 1) {
        envChoice = "little to no"
      } else if (envChoice == 2) {
        envChoice = "some"
      } else {
        envChoice = "many"
      }
      let ethRating = this.state.brand.EthicalPractices;
      let ethChoice = ethRating;
      let omitEthTag = ""
      if (ethChoice == 1 || goodEth == "") {
        ethChoice = "little to no"
        if (goodEth != "") {
          omitEthTag = "Click here for more information on " + {goodEth} + "."
        }
      } else if (envChoice == 2) {
        ethChoice = "some"
        omitEthTag = "Click here for more information on " + {goodEth} + "."
      } else {
        ethChoice = "many"
        omitEthTag = "Click here for more information on " + {goodEth} + "."
      }


      let transparency = this.state.brand.Transparency;
      let tChoice = transparency;
      if (goodT != "") {
        tChoice = ""
      } else {
        tChoice = " little to no "
      }
      let brandName = this.state.brand.BrandName;
      let logoSrc = this.props.logoSrc;

      let altBrands = this.props.altBrands;
      let altBrandsArr = altBrands.split(",");

      let link1 = "https://root.quest/#/writeup/" + altBrandsArr[0];
      let src1 = altBrandsArr[0].toLowerCase() + ".png";

      let link2 = "https://root.quest/#/writeup/" + altBrandsArr[1];
      let src2 = altBrandsArr[1].toLowerCase() + ".png";

      let link3  = "https://root.quest/#/writeup/" + altBrandsArr[2];
      let src3 = altBrandsArr[2].toLowerCase() + ".png";

      let omitSus = ""
      if (goodSus != "") {
        omitSus = "such as "
      }

      return (
        <div id = "writeup">
          <div class = "row-container" style = {{marginBottom: '20px', flexGrow:0, alignContent:"flex-start", justifyContent: "flex-start", 
  alignContent: "center", alignItems: "center"}}>
            <img id = "writeup-logo"src = {logoSrc}></img>
            <div id = 'writeUpLeft'>
              <h1>{brandName}</h1>
            </div>
          </div>

          <div id = "writeup-category">
              <h2>Our Rating</h2>
              <div class = "row-container" style = {{marginBottom: '20px'}}>
              <p>We have rated {brandName} a {Average}. This is an average score of a {envRating} in sustainable materials, a {ethRating} in ethical practices, and a {transparency} in supply chain transparency.</p>
              <img id = "writeup-rating-scale" src = {imgSrc}></img>
            </div>
          </div>

          <div id = "writeup-category">
            <h2>Sustainable Materials</h2>
            <p>{brandName}???s sustainable materials rating is {envRating}. {brandName} uses {envChoice} sustainable materials {omitSus} {goodSus}. {brandName} has {animalHairChoice} policies for animal hair use such as {animalHairTag}. {brandName} {wasteChoice} practice waste management through {wasteTag}.</p>
          </div>
        
          <div id = "writeup-category">
            <h2>Ethical Practices</h2>  
            <p>{brandName}???s ethical practices rating is {ethRating}. {brandName} has {ethChoice} initiatives to protect their workers{goodEth}. </p>
          </div>

          <div id = "writeup-category" style={{marginBottom:70}}>
            <h2>Supply Chain Transparency</h2>
            <p> {brandName}???s Supply chain transparency rating is {transparency}. {brandName} has {tChoice} supply chain transparency. {brandName} {reportTag} reports available online about their practices. The brand also has certifications such as {certTag} which is evidence for transparency in the supply chain.</p>
          </div>
{/* 
          <div id = "writeup-category">
            <h2>Sustainable Alternatives</h2>
            <div class ="row-container" style={{marginBottom:70}}>
            <a href={link1}><img id = "alternativeImg" src = {src1}></img></a>
            <a href={link2}><img id = "alternativeImg" src = {src2}></img></a>
            <a href={link3}><img id = "alternativeImg" src = {src3}></img></a>
            </div>
          </div>  */}
        </div>



  );
  }
}
}

export default WriteUpPage;