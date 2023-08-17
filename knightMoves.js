function knightMoves(startCoor, endCoor, maxWidth = 8, maxHeight = 8) {
  // throw error if start or end coordinates are out of range
  if (!(startCoor[0] >= 0 && startCoor[0] < maxWidth && startCoor[1] >= 0 && startCoor[0] < maxHeight)) throw new Error("Start coordinates out of range.");
  if (!(endCoor[0] >= 0 && endCoor[0] < maxWidth && endCoor[1] >= 0 && endCoor[0] < maxHeight)) throw new Error("End coordinates out of range.");

  // knight can move either:
  // 2 squares laterally (coordinate index 0) and 1 square longitudinally (coordinate index 1), OR
  // 1 square laterally (coordinate index 0) and 2 squares longitudinally (coordinate index 1)
  const dx = [-2, -2, -1, -1, 1, 1, 2, 2];
  const dy = [-1, 1, -2, 2, -2, 2, -1, 1];

  const visited = [...Array(maxWidth)].map(() => Array(maxHeight).fill(false));

  const queue = [];
  queue.push(startCoor);
  queue[0].push(0); // add initial distance of 0 for starting coordinates

  let current;
  while (queue.length) {
    current = queue.shift();
    const x = current[0];
    const y = current[1];
    const dist = current[2];

    if (x === endCoor[0] && y === endCoor[1]) { // if current coordinates match end coordinates
      return dist;
    }
    if (visited[x][y] === false) {
      visited[x][y] = true;
      for (let i = 0; i < dx.length; i++) {
        const x1 = x + dx[i];
        const y1 = y + dy[i];
        if (x1 >= 0 && x1 < maxWidth && y1 >= 0 && y1 < maxHeight) {
          queue.push([x1, y1, dist + 1]);
        }
      }
    }
  }
}

const start = [1, 5];
const end = [7, 7];
console.log(knightMoves(start, end));
