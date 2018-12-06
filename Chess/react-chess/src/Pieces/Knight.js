import Piece from "./Piece.js";
import * as ChessFunc from "./PublicFunctions";

export default class Rook extends Piece {
  constructor(player) {
    super(
      player,
      player === 1
        ? "https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg" 
        : "https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg"
    );

    const isMovePossible = (src, dest) => {
      let deltaRow = src.charCodeAt(1) - dest.charCodeAt(1);
      let deltaCol = src.charCodeAt(0) - dest.charCodeAt(0);

      return (
        (deltaRow === 1 && deltaCol === 2) ||
        (deltaRow === -1 && deltaCol === 2) ||
        (deltaRow === 1 && deltaCol === -2) ||
        (deltaRow === -1 && deltaCol === -2) ||
        (deltaRow === 2 && deltaCol === 1) ||
        (deltaRow === -2 && deltaCol === 1) ||
        (deltaRow === 2 && deltaCol === -1) ||
        (deltaRow === -2 && deltaCol === -1)
      );
    };

    const getSrcToDestPath = (src, dest) => {
      return [];
    };
  }
}
