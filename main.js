
var d = document.querySelector("#container");
d.addEventListener("mousemove", function (e) {
    parallaxIt(e, ".landing-intro__background", -30);
}, false)
// $("#container").mousemove(function (e) {
//     // parallaxIt(e, ".slide", -100);
//     parallaxIt(e, ".landing-intro__background", -30);
// });

function parallaxIt(e, target, movement) {
    var $this = $("#container");
    var relX = e.pageX - $this.offset().left;

    TweenMax.to(target, 1, {
        x: (relX - $this.width() / 2) / $this.width() * movement,
    });
}