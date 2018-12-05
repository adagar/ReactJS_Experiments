export const upRow = coord => {
  let newCoordAlpha = String.fromCharCode(coord.charCodeAt(1) + 1);
  return coord[0] + newCoordAlpha;
};

export const downRow = coord => {
  let newCoordAlpha = String.fromCharCode(coord.charCodeAt(1) - 1);
  return coord[0] + newCoordAlpha;
};

export const leftCol = coord => {
  let newCoordAlpha = String.fromCharCode(coord.charCodeAt(0) - 1);
  return newCoordAlpha + coord[1];
};

export const rightCol = coord => {
  let newCoordAlpha = String.fromCharCode(coord.charCodeAt(1) + 1);
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
  let alphaSrc = src.charCodeAt(0);
  let numSrc = src.charCodeAt(1);
  let alphaDest = dest.charCodeAt(0);
  let numDest = dest.charCodeAt(1);
  let path = [];

  //use if/else to find cardinal direction
  //src is left of destination
  if (alphaSrc < alphaDest) {
    //moving right
    if (numSrc < numDest) {
      //moving up and to right
      for (let i = 0; i < numDest - numSrc; i++) {
        let thisAlpha = String.fromCharCode(alphaSrc + i);
        let thisNum = String.fromCharCode(numSrc + i);
        let newCoord = thisAlpha + thisNum;
        path.push(newCoord);
      }
    } else if (numSrc > numDest) {
      //moving down and to the right
      for (let i = 0; i < numDest - numSrc; i++) {
        let thisAlpha = String.fromCharCode(alphaSrc + i);
        let thisNum = String.fromCharCode(numSrc - i);
        let newCoord = thisAlpha + thisNum;
        path.push(newCoord);
      }
    } else {
      //moving right
      for (let i = 0; i < numDest - numSrc; i++) {
        let thisAlpha = String.fromCharCode(alphaSrc);
        let thisNum = String.fromCharCode(numSrc + i);
        let newCoord = thisAlpha + thisNum;
        path.push(newCoord);
      }
      return;
    }
  } else if (alphaSrc > alphaDest) {
    //moving left
    if (numSrc < numDest) {
      //moving up and to left
      for (let i = 0; i < numDest - numSrc; i++) {
        let thisAlpha = String.fromCharCode(alphaSrc - i);
        let thisNum = String.fromCharCode(numSrc + i);
        let newCoord = thisAlpha + thisNum;
        path.push(newCoord);
      }
    } else if (numSrc > numDest) {
      //moving down and to the left
      for (let i = 0; i < numDest - numSrc; i++) {
        let thisAlpha = String.fromCharCode(alphaSrc - i);
        let thisNum = String.fromCharCode(numSrc - i);
        let newCoord = thisAlpha + thisNum;
        path.push(newCoord);
      }
    } else {
      //moving left
      for (let i = 0; i < numDest - numSrc; i++) {
        let thisAlpha = String.fromCharCode(alphaSrc - i);
        let thisNum = String.fromCharCode(numSrc);
        let newCoord = thisAlpha + thisNum;
        path.push(newCoord);
      }
    }
  } else {
    //no alpha movement
    if (numSrc < numDest) {
      //moving up
      for (let i = 0; i < numDest - numSrc; i++) {
        let thisAlpha = String.fromCharCode(alphaSrc);
        let thisNum = String.fromCharCode(numSrc + i);
        let newCoord = thisAlpha + thisNum;
        path.push(newCoord);
      }
    } else if (numSrc > numDest) {
      //moving down
      for (let i = 0; i < numDest - numSrc; i++) {
        let thisAlpha = String.fromCharCode(alphaSrc);
        let thisNum = String.fromCharCode(numSrc - i);
        let newCoord = thisAlpha + thisNum;
        path.push(newCoord);
      }
    }
  }
  return path;
};
