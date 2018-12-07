import React from "react";
import Square from "./Square";
import * as Constants from "./Constants";

import Pawn from "./Pieces/Pawn";
import Knight from "./Pieces/Knight";
import Bishop from "./Pieces/Bishop";
import Rook from "./Pieces/Rook";
import Queen from "./Pieces/Queen";
import King from "./Pieces/King";

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

    //player 1 pieces
    board[6][0].piece = new Pawn(1);
    board[6][1].piece = new Pawn(1);
    board[6][2].piece = new Pawn(1);
    board[6][3].piece = new Pawn(1);
    board[6][4].piece = new Pawn(1);
    board[6][5].piece = new Pawn(1);
    board[6][6].piece = new Pawn(1);
    board[6][7].piece = new Pawn(1);
    board[7][0].piece = new Rook(1);
    board[7][1].piece = new Knight(1);
    board[7][2].piece = new Bishop(1);
    board[7][3].piece = new Queen(1);
    board[7][4].piece = new King(1);
    board[7][5].piece = new Bishop(1);
    board[7][6].piece = new Knight(1);
    board[7][7].piece = new Rook(1);

    //player 2 pieces
    board[1][0].piece = new Pawn(2);
    board[1][1].piece = new Pawn(2);
    board[1][2].piece = new Pawn(2);
    board[1][3].piece = new Pawn(2);
    board[1][4].piece = new Pawn(2);
    board[1][5].piece = new Pawn(2);
    board[1][6].piece = new Pawn(2);
    board[1][7].piece = new Pawn(2);
    board[0][0].piece = new Rook(2);
    board[0][1].piece = new Knight(2);
    board[0][2].piece = new Bishop(2);
    board[0][3].piece = new Queen(2);
    board[0][4].piece = new King(2);
    board[0][5].piece = new Bishop(2);
    board[0][6].piece = new Knight(2);
    board[0][7].piece = new Rook(2);

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
