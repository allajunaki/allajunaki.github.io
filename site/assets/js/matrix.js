window.addEventListener('load', eventWindowLoaded, false);

function eventWindowLoaded() {
  canvasApp();
}
function canvasSupport(e) {

  return !!e.getContext;

}
function canvasApp() {
  var canvas = document.getElementById('matrix-canvas');

  if (!canvasSupport(canvas)) {
    return;
  }

  var ctx = canvas.getContext('2d');
  var w = canvas.width = window.innerWidth;
  var h = canvas.height = window.innerHeight;
  var yPositions = Array(300).join(0).split('');

  function runMatrix() {
    if (typeof Game_Interval != 'undefined') clearInterval(Game_interval);
    Game_Interval = setInterval(drawScreen, 100);
  }
  function getRandomColor() {
    var colorset = ['#0D0208', '#003B00', '#008F11', '#00FF41'];
    //return Math.round(Math.random() * 255);
    var selectedColor = Math.round(Math.random() * 3);
    return colorset[selectedColor];
  }
  function drawScreen() {
    var spacer = 20;
    var color = 'rgba(' + getRandomColor() + ',' + getRandomColor() + ',' + getRandomColor() + ',0.5)';
    ctx.fillStyle = 'rgba(0,0,0,.05)';

    ctx.fillRect(0, 0, w, h);
    // ctx.fillStyle = '#0f0';
    ctx.fillStyle = color;
    ctx.font = '15px Monaco';
    var textToDisplay = "abilashmohan.com"
    var comingSoon = textToDisplay.split("");
    var csLen = comingSoon.length;
    var runner = 0;
    yPositions.map(function (y, index) {
      //text = String.fromCharCode(1e2 + Math.random() * 33);
      //var color = 'rgba(' + getRandomColor() + ',' + getRandomColor() + ',' + getRandomColor() +',.8)';
      var color = getRandomColor();
      ctx.fillStyle = color;
      text = comingSoon[(index + (y / spacer)) % csLen];
      runner = runner >= csLen ? 0 : runner;
      x = (index * spacer) + spacer;
      ctx.fillText(text, x, y);
      if (y > spacer + Math.random() * 18000) {
        yPositions[index] = 0;
      } else {
        yPositions[index] = y + spacer;
      }
    })
  }

  runMatrix();

}
