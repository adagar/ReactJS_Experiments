import React from "react";
import * as Constants from "./Constants";

class Square extends React.Component {
    render(){
        
        const { color, coordinate } = this.props;
        console.log("In the components: " + coordinate);
        return (
            <div 
                className = {"Square"}
                style = {{
                    backgroundColor: `${color}`,
                    left: `${Constants.CELL_SIZE * (coordinate.charCodeAt(0) - 97)}`,
                    top: `${Constants.CELL_SIZE * (coordinate[1])}`,
                }}
            />
        )
    }
}

export default Square;