const _canvas = document.querySelector('canvas');
const _ctx = _canvas.getContext('2d');

function drawCanvas()
{
    const _image = new Image();
    _image.src = "img/_TPF0535.png";
    _image.onload = function()
    {
        _ctx.drawImage(_image,0,0,_canvas.width,_canvas.height);
    }
}
drawCanvas();

// Wrap every letter in a span
var textWrapper = document.querySelectorAll('.ml6 .letters');
textWrapper.forEach(element => element.innerHTML = element.textContent.replace(/\S/g, "<span class='letter'>$&</span>"))

anime.timeline({loop: true})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml6',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  $(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > $('#canvas').offset().top + $('#canvas').outerHeight()) {
            $('.navbar').addClass('collant');
            console.log("collant");
        } else {
            $('.navbar').removeClass('collant');
            console.log("bye");
        }
    });
});