import Piece from "./Piece.js";
import * as ChessFunc from "./PublicFunctions";

export default class Queen extends Piece {
  constructor(player) {
    super(
      player,
      player === 1
        ? "https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg"
        : "https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg"
    );

    const isMovePossible = (src, dest) => {
      let deltaRow = src.charCodeAt(1) - dest.charCodeAt(1);
      let deltaCol = src.charCodeAt(0) - dest.charCodeAt(0);

      return (
        (deltaRow != 0 && deltaCol === 0) ||
        (deltaRow === 0 && deltaCol != 0) ||
        Math.abs(deltaCol) === Math.abs(deltaRow)
      );
    };

    const getSrcToDestPath = (src, dest) => {
      return ChessFunc.downRightDiag(src, dest);
    };
  }
}
