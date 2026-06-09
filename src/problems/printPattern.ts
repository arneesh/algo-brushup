// n= 1  return 1

// n=2,

// 222
// 212
// 222

// n=3

// 33333
// 32223
// 32123
// 32223
// 33333

function printPattern(n: number) {
  const size = 2 * n - 1;

  for (let i = 0; i < size; i++) {
    let row = "";
    for (let j = 0; j < size; j++) {
      const dist = Math.min(i, j, size - 1 - i, size - 1 - j);

      row += n - dist + " ";
    }
    console.log(row.trim());
  }
}

printPattern(2);
printPattern(3);
printPattern(4);
