import React from 'react';
import Square from "./Square";
import * as Constants from "./Constants";


class Game extends React.Component {
    constructor() {
        super();        
    }

    componentDidMount() {
        this.makeGameBoard();
    }

    state = {
        squares: [],
    }

    makeGameBoard = (event) => {
        console.log("Generating board");
        let board = [];
        let currColor = "white";
        for(let row = 0; row < 8; row++)
        {
            let rowSquares = [];
            for(let column = 0; column < 8; column++)
            {
                //create an coordinate notation
                let alphaNotation = String.fromCharCode(97 + column);
                let coordinateStr = alphaNotation + row.toString();

                let square = {
                    coordinate: coordinateStr,
                    color: currColor
                }
                rowSquares.push(square);

                //swap cell color
                if(currColor === "white"){
                    currColor = "black";
                } else {
                    currColor = "white";
                }
            }
            board.push(rowSquares);
        }
        this.setState({ squares: board })
    }

    render() {
        const { squares } = this.state;
        return (
            <div 
                className = "Board"
                style = {{
                    width: Constants.CELL_SIZE * 8,
                    height: Constants.CELL_SIZE * 8,
                }}
            {...squares.map(row => (
                <div
                className = {`${row}`}
                /*
                {row.map( square => (
                    <Square
                    coordinate = {square.coordinate}
                    color = {square.color}
                    />
                ))}      
                */
               />          
            ))}
            />
        );
    }
}

export default Game;