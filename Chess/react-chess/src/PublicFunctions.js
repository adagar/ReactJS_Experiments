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
