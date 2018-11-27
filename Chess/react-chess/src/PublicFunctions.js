export const upRow = coord => {
  let newCoordAlpha = String.fromCharCode(coord.fromCharCodeAt(1) + 1);
  return coord[0] + newCoordAlpha;
};

export const downRow = coord => {
  let newCoordAlpha = String.fromCharCode(coord.fromCharCodeAt(1) - 1);
  return coord[0] + newCoordAlpha;
};

export const leftCol = coord => {
  let newCoordAlpha = String.fromCharCode(coord.fromCharCodeAt(0) - 1);
  return newCoordAlpha + coord[1];
};

export const rightCol = coord => {
  let newCoordAlpha = String.fromCharCode(coord.fromCharCodeAt(1) + 1);
  return newCoordAlpha + coord[1];
};

export const upRightDiag = coord => {
  return rightCol(upRow(coord));
};

export const upLeftDiag = coord => {
  return leftCol(upRow(coord));
};

export const downRightDiag = coord => {
  return rightCol(downRow(coord));
};

export const downLeftDiag = coord => {
  return leftCol(downRow(coord));
};

export const getSrcToDestPath = (src, dest) => {
  let alphaSrc = src[0];
  let numSrc = src[1];
  let alphaDest = dest[0];
  let numDest = dest[1];

  //use if/else to find cardinal direction
  //src is left of destination
  if(alphaSrc < alphaDest) {
    //moving right
    if(numSrc < numDest) {
      //moving up and to right
      return;
    } else if(numSrc > numDest) {
      //moving down and to the right
    } else {
      //moving right
    }
  } else if( alphaSrc > alphaDest) {
    //moving left
    if(numSrc < numDest) {
      //moving up and to left
      return;
    } else if(numSrc > numDest) {
      //moving down and to the left
    } else {
      //moving left
    }
  } else {
    //no alpha movement
    if(numSrc < numDest) {
      //moving up
      return;
    } else if(numSrc > numDest) {
      //moving down
    }
  }
}