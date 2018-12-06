import Piece from "./Piece.js";
import * as ChessFunc from "./PublicFunctions";

export default class King extends Piece {
    constructor(player){
        super(player, (player === 1? "https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg"));

        isMovePossible(src, dest){
            return(
                ChessFunc.upLeftDiag(src) === dest ||
                ChessFunc.upRow(src) === dest ||
                ChessFunc.upRightDiag(src) === dest ||
                ChessFunc.rightCol(src) === dest ||
                ChessFunc.downRightDiag(src) === dest ||
                ChessFunc.downRow(src) === dest ||
                ChessFunc.downRightDiag(src) === dest ||
                ChessFunc.leftCol(src) === dest
            ) 
        }

        /*
            Always return empty array because of one step
            @return{[]}
        */
       getSrcToDestPath(src, dest){
           return [];
       }
    }
}