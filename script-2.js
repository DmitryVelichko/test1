var b = 0.55191502449;
var damages_canvas = document.getElementById("area");
var ctx_damages = damages_canvas.getContext("2d");
var circle_rect = damages_canvas.getBoundingClientRect();
var circles = [];
var markerColor = "#f00";
var circle_drag = false;
var circle_canvas_update = true;

damages_canvas.addEventListener("mousedown", drawCircleMouseDown, false);
damages_canvas.addEventListener("mouseup", drawCircleMouseUp, false);
damages_canvas.addEventListener("mousemove", drawCircleMouseMove, false);
requestAnimationFrame(updateCircleCanvas);

function updateCircleCanvas() {
  if (circle_canvas_update) {
    drawCircleCanvas();
    circle_canvas_update = false;
  }

  requestAnimationFrame(updateCircleCanvas);
}

function drawCircle(circle) {
  var k = circle.firstk,
    siiry = circle.startY,
    siirx = circle.startX;

  ctx_damages.clearRect(0, 0, damages_canvas.width, damages_canvas.height);
  ctx_damages.beginPath();

  ctx_damages.moveTo(0 * k + siirx, 1 * k + siiry);
  ctx_damages.bezierCurveTo(
    b * k + siirx,
    1 * k + siiry,
    1 * k + siirx,
    b * k + siiry,
    1 * k + siirx,
    0 + siiry
  );
  ctx_damages.moveTo(0 * k - 2 * 0 * k + siirx, 1 * k - 2 * 1 * k + siiry);
  ctx_damages.bezierCurveTo(
    b * k - 2 * b * k + siirx,
    1 * k - 2 * 1 * k + siiry,
    1 * k - 2 * 1 * k + siirx,
    b * k - 2 * b * k + siiry,
    1 * k - 2 * 1 * k + siirx,
    0 - 2 * 0 + siiry
  );
  ctx_damages.moveTo(0 * k + siirx, 1 * k + siiry);
  ctx_damages.bezierCurveTo(
    b * k - 2 * b * k + siirx,
    1 * k + siiry,
    1 * k - 2 * 1 * k + siirx,
    b * k + siiry,
    1 * k - 2 * 1 * k + siirx,
    0 - 2 * 0 + siiry
  );
  ctx_damages.moveTo(0 * k - 2 * 0 * k + siirx, 1 * k - 2 * 1 * k + siiry);
  ctx_damages.bezierCurveTo(
    b * k + siirx,
    1 * k - 2 * 1 * k + siiry,
    1 * k + siirx,
    b * k - 2 * b * k + siiry,
    1 * k + siirx,
    0 + siiry
  );
  ctx_damages.stroke();
}

function drawCircleMouseDown(e) {
  circle = {
    startX: e.offsetX - circle_rect.left,
    startY: e.offsetY - circle_rect.top,
    firstk: 10,
  };
  circle_drag = true;
  circles.push(circle);
  circle_canvas_update = true;
}
function drawCircleCanvas() {
  ctx_damages.setTransform(1, 0, 0, 1, 0, 0);
  ctx_damages.clearRect(0, 0, damages_canvas.width, damages_canvas.height);
  ctx_damages.fillStyle = "transparent"; // Color
  ctx_damages.strokeStyle = markerColor; // Color
  circles.forEach(drawCircle);
}
function drawCircleMouseUp() {
  circle_drag = false;
  circle_canvas_update = true;
}
function drawCircleMouseMove(e) {
  // tätä uusi
  if (circle_drag) {
    console.log(e.offsetX - circle.startX);
    circle.firstk = Math.hypot(
      e.offsetX - circle.startX,
      e.offsetY - circle.startY
    );

    circle_canvas_update = true;
  }
}