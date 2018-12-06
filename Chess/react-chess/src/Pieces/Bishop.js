import Piece from "./Piece.js";
import * as ChessFunc from "../PublicFunctions";

export default class Bishop extends Piece {
  constructor(player) {
    super(
      player,
      player === 1
        ? "https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg" 
        : "https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg"
    );

    const isMovePossible = (src, dest) => {
      let deltaRow = src.charCodeAt(1) - dest.charCodeAt(1);
      let deltaCol = src.charCodeAt(0) - dest.charCodeAt(0);

      return (
        Math.abs(deltaCol) === Math.abs(deltaRow)
      );
    };

    const getSrcToDestPath = (src, dest) => {
      return ChessFunc.downRightDiag(src, dest);
    };
  }
}
