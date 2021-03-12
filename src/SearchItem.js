import graphic1 from "./imgs/f21.png";
import graphic2 from "./imgs/ok-rating.png";
import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class SearchItem extends Component {

    render() {
        return (
            <Link to="/writeup">

                <button style = {{padding: 0, marginBottom: 10, borderRadius: 0, display:"inline-block", border: "transparent", width: "fit-content", width: "80vw"}}>
                        
                    <div id = "search-item" class = "row-container" style = {{marginBottom: "0px"}}>
                        <div>
                        <img id = "brand-logo" src = {graphic1}></img>
                        </div>
                        <div class = "container" style = {{marginLeft: "30px", alignItems:"flex-start", marginBottom: "0px", flexDirection:"column", height:"10vh"}}>
                        <p style = {{marginBottom: 0, fontSize: 20  }}>{this.props.brandName}</p>
                        <div class = "row-container" style = {{marginBottom: "0px"}}>
                            <p style = {{fontWeight:"lighter", color: "#999FAA" , fontSize: 16}} >Last Updated</p>
                            <p style = {{fontWeight:"lighter", color: "#999FAA",marginLeft: "15px", fontSize: 16}}>January 13, 2021</p>
                        </div>
                        </div>

                        <img id = "smiley" src = {graphic2}></img>
                    </div>
            </button>
        </Link>

        )
    }
}

export default SearchItem;