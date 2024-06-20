function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Event listener for the button
document.getElementById("randomButton").addEventListener("click", function () {
  const newColor = getRandomColor();
  document.body.style.backgroundColor = newColor;
});

document.getElementById("greenButton").addEventListener("click", function () {
  document.body.style.backgroundColor = "green";
});

document.getElementById("redButton").addEventListener("click", function () {
  document.body.style.backgroundColor = "red";
});

document.getElementById("blueButton").addEventListener("click", function () {
  document.body.style.backgroundColor = "blue";
});
