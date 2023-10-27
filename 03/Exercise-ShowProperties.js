const tech = {
  id: 0,
  title: "JavaScript",
  level: "Good",
};

function showProperties(obj) {
  for (let key in obj)
    if (typeof obj[key] === "string") console.log(key, obj[key]);
}

showProperties(tech);
