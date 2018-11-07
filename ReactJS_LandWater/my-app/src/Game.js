import React from "react";
import * as Constants from "./Constants";
import Square from "./Square";

class Game extends React.Component {
  constructor() {
    super();
    this.rows = Constants.HEIGHT / Constants.CELL_SIZE;
    this.cols = Constants.WIDTH / Constants.CELL_SIZE;
    this.board = this.makeStartState();
    this.squares = this.makeLevel();
    this.targetRatio = this.makeTargetRatio();
  }

  state = {
    squares: [],
    victory: false,
    targetRatio: {}
  };

  calculateNeighbors(board, x, y) {
    let neighbors = 0;
    const dirs = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, 1],
      [1, 1],
      [1, 0],
      [1, -1],
      [0, -1]
    ];
    for (let i = 0; i < dirs.length; i++) {
      const dir = dirs[i];
      let y1 = y + dir[0];
      let x1 = x + dir[1];

      if (
        x1 >= 0 &&
        x1 < this.cols &&
        y1 >= 0 &&
        y1 < this.rows &&
        board[y1][x1]
      ) {
        neighbors++;
      }
    }

    return neighbors;
  }

  //create an empty board
  makeStartState() {
    let board = [];
    for (let y = 0; y < this.rows; y++) {
      board[y] = [];
      for (let x = 0; x < this.cols; x++) {
        if (y === this.rows - 1 && x === this.cols - 1) {
          board[y][x] = "end fas fa-building land";
        } else if (y == 0 && x == 0) {
          board[y][x] = "start fas fa-truck land";
        } else {
          board[y][x] = Math.random() < 0.5 ? "land" : "water";
        }
      }
    }
    return board;
  }

  //create squares from this.board array
  makeLevel() {
    let squares = [];
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        let value = this.board[y][x];
        squares.push({ x, y, value });
      }
    }
    return squares;
  }

  //find out the relative location of click event
  getElementOffset() {
    const rect = this.boardRef.getBoundingClientRect();
    const doc = document.documentElement;

    return {
      x: rect.left + window.pageXOffset - doc.clientLeft,
      y: rect.top + window.pageYOffset - doc.clientTop
    };
  }

  makeTargetRatio = () => {
    let workingSquares = this.cols * this.rows - 2;
    let waterTarget = Math.floor(Math.random() * workingSquares);
    let landTarget = workingSquares - waterTarget + 2;
    console.log(waterTarget, landTarget);
    return { waterTarget, landTarget };
  };

  calculateRatio = () => {
    let waterTot = 0;
    let landTot = 0;
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        if (this.board[y][x].includes("land")) {
          landTot++;
        } else {
          waterTot++;
        }
      }
    }
    return { waterTot, landTot };
  };

  //see if player won
  checkGameState = event => {
    this.connectionLookup = [];
    if (
      this.targetRatio.landTarget === this.calculateRatio().landTot &&
      this.targetRatio.waterTarget === this.calculateRatio().waterTot &&
      this.completeConnection(0, 0)
    ) {
      console.log("You win!");
    }
    this.setState({ squares: this.makeLevel() });
  };

  connectionLookup = [];

  completeConnection(x, y) {
    const dirs = [[0, 1], [1, 0], [-1, 0], [0, -1]];
    for (let i = 0; i < dirs.length; i++) {
      const dir = dirs[i];
      let y1 = y + dir[0];
      let x1 = x + dir[1];
      if (!this.connectionLookup.includes(`${x1}, ${y1}`)) {
        if (
          x1 >= 0 &&
          x1 < this.cols &&
          y1 >= 0 &&
          y1 < this.rows &&
          this.board[y1][x1].includes("land")
        ) {
          console.log(
            "checking for connection from",
            x,
            ",",
            y,
            this.board[y][x],
            "to",
            x1,
            ",",
            y1,
            this.board[y1][x1]
          );

          if (this.board[y1][x1].includes("end")) {
            console.log("Won!");
            return true;
          } else {
            this.connectionLookup.push(`${x}, ${y}`);
            console.log(this.connectionLookup);
            this.completeConnection(x1, y1);
            this.board[y1][x1] = this.board[y1][x1] + " fas fa-circle";
          }
        }
      }
    }
    return false;
  }

  //handleCLick Event
  handleClick = event => {
    const elemOffset = this.getElementOffset();
    const offsetX = event.clientX - elemOffset.x;
    const offsetY = event.clientY - elemOffset.y;

    const x = Math.floor(offsetX / Constants.CELL_SIZE);
    const y = Math.floor(offsetY / Constants.CELL_SIZE);

    if (x >= 0 && x <= this.cols && y >= 0 && y <= this.rows) {
      let boardVal = this.board[y][x];
      if (boardVal === "land") {
        this.board[y][x] = "water";
      } else if (boardVal === "water") {
        this.board[y][x] = "land";
      }
    }
    console.log(this);
    this.setState({ squares: this.makeLevel() });
  };

  render() {
    const { squares } = this.state;
    return (
      <div>
        <div
          className="Board"
          style={{
            width: Constants.WIDTH,
            height: Constants.HEIGHT,
            backgroundSize: `${Constants.CELL_SIZE}px ${Constants.CELL_SIZE}px`
          }}
          onClick={this.handleClick}
          ref={n => {
            this.boardRef = n;
          }}
        >
          {squares.map(square => (
            <Square
              x={square.x}
              y={square.y}
              key={`${square.x}, ${square.y}`}
              value={square.value}
            />
          ))}
        </div>
        <div className="controls">
          <div className="ratio-goal">
            Target ratio:{" "}
            {" " +
              this.targetRatio.landTarget +
              " to " +
              this.targetRatio.waterTarget}
          </div>
          <div className="ratio-status">
            Current ratio:{" "}
            {" " +
              this.calculateRatio().landTot +
              " to " +
              this.calculateRatio().waterTot}
          </div>
          <button onClick={this.checkGameState}>Drive!</button>
        </div>
      </div>
    );
  }
}

export default Game;
