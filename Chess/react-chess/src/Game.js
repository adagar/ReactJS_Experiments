import React from "react";
import Square from "./Square";
import * as Constants from "./Constants";
import Queen from "./Queen";
import "./index.css";

class Game extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.makeGameBoard();
  }

  state = {
    squares: []
  };

  initGamePieces = () => {
    const { squares } = this.state;
    return squares;
  };

  handleClick = evt => {
    console.log(evt.target);
    evt.target.style = {...evt.target.state, backgroundColor: "RGB(111,143,114)"}; 
  }

  makeGameBoard = event => {
    console.log("Generating board");
    let board = [];
    let currColor = "white";
    for (let row = 0; row < 8; row++) {
      if (row % 2 === 0) {
        currColor = "white";
      } else {
        currColor = "black";
      }
      let rowSquares = [];
      for (let column = 0; column < 8; column++) {
        //create an coordinate notation
        let alphaNotation = String.fromCharCode(97 + column);
        let coordinateStr = alphaNotation + row.toString();

        let square = {
          coordinate: coordinateStr,
          color: currColor
        };
        rowSquares.push(square);

        //swap cell color
        if (currColor === "white") {
          currColor = "black";
        } else {
          currColor = "white";
        }
      }
      board.push(rowSquares);
    }

    board[0][0].piece = new Queen(1);
    this.setState({ squares: board });
  };

  RenderRow = props => {
    console.log("My prop values: ", props);
    return (
      <div className="row">
        {props.row.map(square => (
          <Square
            key={square.coordinate}
            color={square.color}
            coordinate={square.coordinate}
            piece={square.piece ? square.piece.style.backgroundImage : null}
            onClick = {this.handleClick}
          />
        ))}
      </div>
    );
  };

  render() {
    const { squares } = this.state;
    console.log(squares);
    return (
      <div>
        <div
          className="Board"
          style={{
            width: Constants.CELL_SIZE * 8,
            height: Constants.CELL_SIZE * 8
          }}
        >
          <div>
            {squares.map((row, i) => (
              <this.RenderRow row={row} key={i} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
