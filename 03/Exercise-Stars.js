console.log(showStars(5));

function showStars(rows) {
  let line = "";
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= i; j++) {
      line += "*";
    }
    line += "\n";
  }
  return line;
}
