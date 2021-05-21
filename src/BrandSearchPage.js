
import SearchContainer from './SearchContainer';
import React from 'react';

class BrandSearchPage extends React.Component {

  state = {
    names: [
      "Zara",
      "Nike",
      "Patagonia",
      "Everlane",
      "Uniqlo",
      "Allbirds",
      "HM",
    ], 
    searchTerm: ''
  }

  editSearchTerm = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  dynamicSearch = () => {
    return this.state.names.filter(name => name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
  }

  render () {
    return (
    <div>
        <div class = "container" style = {{display: "flex", flexDirection: "column", justifyContent:"center", marginBottom: 0,}}>
            <p style = {{fontSize: 50}}>Search for a brand you want to learn about</p>

            <div style ={{width:"80vw"}}>
              <div class = "row-container" style = {{justifyItems:"center", height: "5vh", marginBottom: "10px"}}>
                <input id = "searchbar" value = {this.state.searchTerm} onChange = {this.editSearchTerm} type="text" placeholder="Search.."></input>
                {/* <button id = "searchbar">All categories</button> */}
                <button id = "searchbar">Search</button>
              </div>
              <SearchContainer brands = {this.dynamicSearch()}/>
            </div>
            <a id = "clearbit-logo" href="https://clearbit.com" target="_blank">Logos provided by Clearbit</a>
        </div>
    </div>
  );
}
}

export default BrandSearchPage;