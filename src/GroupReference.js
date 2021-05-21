import React from 'react';
import julianne from './imgs/julianne.png';
import alan from './imgs/alan.png';
import sam from './imgs/sam.png';
import simon from './imgs/simon.png';


class GroupReference extends React.Component {

    render () {
      return (
        <div class = "container" style = {{display: "flex", flexDirection: "column", justifyContent:"center", marginBottom: 0, backgroundColor:"white"}}>
            <h1 style={{fontSize:64, marginTop:100}}>Meet our team</h1>
            <h2 style={{fontSize:28, marginBottom:20}}>We are a team of students from the University of Washington
Information School developing this as our Capstone project.</h2>
            <div class="row-container" style = {{marginBottom:100}}>
                <img src={julianne}></img>
                <img src={simon}></img>
                <img src={sam}></img>
                <img src={alan}></img>
            </div>
            <p>On June 20th, the Root capstone project and landing page will be shutting down.</p>
        </div>
    );
  }
  }
  
  export default GroupReference;