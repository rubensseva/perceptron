function onCanvasClick(canvas, color, coords, event) {
  let rect = canvas.getBoundingClientRect();
  let x = event.clientX - rect.left;
  let y = event.clientY - rect.top;
  console.log(400 - y - 200);
  coords.push({
    coords: [1.0, x - 200, 400 - y - 200],
    color: color === "blue" ? 1.0 : 0.0,
  });
}

function drawDots(context, coords) {
  coords.forEach((coordObj) => {
    context.fillStyle = coordObj.color === 1.0 ? "#0000FF" : "#FF0000";
    context.beginPath();
    context.arc(
      coordObj.coords[1] + 200,
      400 - (coordObj.coords[2] + 200),
      2,
      0,
      2 * Math.PI
    );
    context.fill();
  });
}
