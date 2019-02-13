window.onload = function() {
  var scene = document.getElementById('scene');

  function handleBackgroundPosition(scene, x) {
    scene.style.backgroundPositionX = x / 15 + '%, ' + x / 50 + '%, ' + (x / 60 + 50) + '%, ' + (50 + x / 90) + '%, 50%';
  }

  scene.addEventListener('mousemove', function(e) {
    var x = e.clientX;

    handleBackgroundPosition(scene, x);
  });

  window.addEventListener('deviceorientation', function(e) {
    var x = e.beta * 3;

    handleBackgroundPosition(scene, x);
  });
}