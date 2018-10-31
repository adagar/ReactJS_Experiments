import React from "react";
import "./Game.css";
import * as Constants from "./Constants";
import Cell from "./Cells";

class Game extends React.Component {
  constructor() {
    super();
    this.rows = Constants.HEIGHT / Constants.CELL_SIZE;
    this.cols = Constants.WIDTH / Constants.CELL_SIZE;
    this.board = this.makeEmptyBoard();
    console.log(Constants.CELL_SIZE);
  }

  state = {
    cells: [],
    interval: 100,
    isRunning: false
  };

  runGame = () => {
    this.setState({ isRunning: true });
    this.runIteration();
  };

  stopGame = () => {
    this.setState({ isRunning: false });
    if (this.timeoutHandler) {
      window.clearTimeout(this.timeoutHandler);
      this.timeoutHandler = null;
    }
  };

  runIteration() {
    console.log("running iteration");
    let newBoard = this.makeEmptyBoard();

    //TODO: Add iteration logic here

    this.board = newBoard;
    this.setState({ cells: this.makeCells() });

    this.timeoutHandler = window.setTimeout(() => {
      this.runIteration();
    }, this.state.interval);
  }

  handleIntervalChange = event => {
    this.setState({ interval: event.target.value });
  };

  //create an empty board
  makeEmptyBoard() {
    let board = [];
    for (let y = 0; y < this.rows; y++) {
      board[y] = [];
      for (let x = 0; x < this.cols; x++) {
        board[y][x] = false;
      }
    }
    return board;
  }

  //create cells from this.board array
  makeCells() {
    let cells = [];
    for (let x = 0; x < this.rows; x++) {
      for (let y = 0; y < this.cols; y++) {
        if (this.board[x][y]) {
          cells.push({ x, y });
        }
      }
    }
    return cells;
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
  //handleCLick Event
  handleClick = event => {
    const elemOffset = this.getElementOffset();
    const offsetX = event.clientX - elemOffset.x;
    const offsetY = event.clientY - elemOffset.y;
    console.log(offsetX);
    const x = Math.floor(offsetX / Constants.CELL_SIZE);
    const y = Math.floor(offsetY / Constants.CELL_SIZE);
    console.log(y);
    if (x > 0 && x < this.cols && y >= 0 && y <= this.rows) {
      this.board[x][y] = !this.board[x][y];
    }

    this.setState({ cells: this.makeCells() });
  };
  render() {
    const { cells } = this.state;
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
        />
        {cells.map(cell => (
          <Cell x={cell.x} y={cell.y} key={`${cell.x}, ${cell.y}`} />
        ))}
        <div className="controls">
          Update every{" "}
          <input
            value={this.state.interval}
            onChange={this.handleIntervalChange}
          />{" "}
          msec{" "}
          {this.isRunning ? (
            <button className="button" onClick={this.stopGame}>
              Stop
            </button>
          ) : (
            <button className="button" onClick={this.runGame}>
              Run
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Game;
