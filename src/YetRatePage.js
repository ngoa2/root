
import React from 'react';

class YetRatePage extends React.Component {
  render () {
    return (
    <div>
        <div class = "container" style = {{display: "flex", flexDirection: "column", justifyContent:"center", marginBottom: 0,}}>
        <h1 style = {{fontSize: 70}}>Sorry we haven't rated {this.props.brandTitle} yet!</h1>
        <p>Our brand index is still in its early stages so we'd appreciate it if you could help us grow! </p>
        <p><a href = "http://root.quest/#/rate">Click here to submit a rating request!</a></p>
        </div>
    </div>
  );
}
}

export default YetRatePage;