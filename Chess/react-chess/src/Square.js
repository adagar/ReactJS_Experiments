import React from "react";
import * as Constants from "./Constants";

class Square extends React.Component {
    render(){
        console.log(this.props);
        /*
        const { color, coordinate } = this.props;
        */
       const color = "black";
       console.log(this.key);
        return (
            <div 
                className = {"Square"}
                style = {{
                    backgroundColor: `${color}`,
                    left: `${Constants.CELL_SIZE * (this.key.charCodeAt(0) - 97)}`,
                    top: `${Constants.CELL_SIZE * (this.key[1])}`,
                }}
            />
        )
    }
}

export default Square;