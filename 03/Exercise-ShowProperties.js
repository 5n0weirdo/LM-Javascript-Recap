const game = {
  id: 0,
  name: "DL",
  releaseDate: "2023",
  isReleased: false,
};
function showProp(obj) {
  for (key in obj) {
    if (typeof obj[key] === "string") {
      console.log(key, obj[key]);

    }
  }
}
showProp(game);
