import React from "react";
import * as Constants from "./Constants";

class Square extends React.Component {
  render() {
    const { x, y, value } = this.props;
    return (
      <div
        className={"Square " + value}
        style={{
          left: `${Constants.CELL_SIZE * x + 1}px`,
          top: `${Constants.CELL_SIZE * y + 1}px`,
          width: `${Constants.CELL_SIZE - 1}px`,
          height: `${Constants.CELL_SIZE - 1}px`
        }}
      />
    );
  }
}

export default Square;
