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

  handleClick = (coordinate) => {
    console.log(coordinate);
    
    const squares = this.state.squares.slice();
    //reset all squares
    for(let i = 0; i < squares.length; i++){
      let thisRow = squares[i];
      for(let j = 0; j < thisRow.length; j++){
        squares[i][j].selected = false;
      }
    }

    const column =  coordinate.charCodeAt(0) - 97;
    const row =  coordinate.charCodeAt(1) - 48;
    squares[row][column].selected = true;
    this.setState({squares: squares});
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
          color: currColor,
          selected: false
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
            selected = {square.selected}
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
