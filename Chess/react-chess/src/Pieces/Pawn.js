import Piece from "./Piece.js";
import * as ChessFunc from "../PublicFunctions";

export default class Pawn extends Piece {
  constructor(player) {
    super(
      player,
      player === 1
        ? "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg" 
        : "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg"
    );
  }

    isMovePossible = (src, dest) => {
      let deltaRow = src.charCodeAt(1) - dest.charCodeAt(1);
      let deltaCol = src.charCodeAt(0) - dest.charCodeAt(0);

      return (
        (deltaRow != 0 && deltaCol === 0) ||
        (deltaRow === 0 && deltaCol != 0) ||
        Math.abs(deltaCol) === Math.abs(deltaRow)
      );
    };

    getSrcToDestPath = (src, dest) => {
      return null;
    };
  }
