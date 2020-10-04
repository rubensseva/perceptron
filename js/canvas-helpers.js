function onCanvasClick(canvas, context, color, coords, event) {
  let rect = canvas.getBoundingClientRect();
  let x = event.clientX - rect.left;
  let y = event.clientY - rect.top;
  console.log("Coordinate x: " + x, "Coordinate y: " + y);
  coords.push({ coords: { x, y }, color });
  console.log("Coords: " + JSON.stringify(coords));

  context.fillStyle = color === "red" ? "#FF0000" : "#0000FF";
  context.beginPath();
  context.arc(x, y, 2, 0, 2 * Math.PI);
  context.fill();
}
