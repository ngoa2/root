import { Component } from "react";
import SearchItem from "./SearchItem"
class SearchContainer extends Component {
    render() {
        return (
            <div>
                {this.props.brands.map(brand => <SearchItem brandName = {brand} />)}
            </div>
        )
    }
}

export default SearchContainer;