import React from "react";
import * as Constants from "./Constants";

class Square extends React.Component {
  handleClick = () => {
    this.props.onClick(this.props.coordinate);
  }
  render() {
    const { color, coordinate, piece, selected } = this.props;
    return (
      <div
        className={`Square ${color} ${selected ? "selected" : null}`}
        style={{
          left: `${Constants.CELL_SIZE * (coordinate.charCodeAt(0) - 97)}px`,
          top: `${Constants.CELL_SIZE * coordinate[1]}px`,
          backgroundImage: `${piece ? piece : 'none'}`
        }}
        onClick = {this.handleClick}
      >
        {coordinate}
      </div>
    );
  }
}

export default Square;
