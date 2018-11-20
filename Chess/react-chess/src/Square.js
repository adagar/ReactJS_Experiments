import React from "react";
import * as Constants from "./Constants";

class Square extends React.Component {
    render(){
        
        const { color, coordinate } = this.props;
        console.log(`${50 * (coordinate.charCodeAt(0) - 97)}`);
        return (
            <div 
                className = {"Square"}
                style = {{
                    backgroundColor: `${color}`,
                    left: `${Constants.CELL_SIZE * (coordinate.charCodeAt(0) - 97)}px`,
                    top: `${Constants.CELL_SIZE * (coordinate[1])}px`,
                }}
            />
        )
    }
}

export default Square;