import React from 'react';


class BrandRequestForm extends React.Component {

    render () {
      return (
        <div class = "container" style = {{display: "flex", flexDirection: "column", justifyContent:"center", marginBottom:70, marginTop: 70}}>
            <h1>Brand Rating Request Form</h1>
            <p style={{fontSize:20}}>Interested in seeing information on a brand that is not in our database yet? Fill out the form below to put that brand on our priority list to be added. We wil also notify you when the brand has been posted!</p>
            <input class = "form-input" placeholder="Your Email"></input>
            <input class = "form-input" placeholder="Brand Name"></input>
            <button style = {{marginTop:80}}><p style ={{padding: 5, marginRight:60, marginLeft:60, marginTop:0, marginBottom:0}}>Suggest</p></button>
        </div>
    );
  }
  }
  
  export default BrandRequestForm;