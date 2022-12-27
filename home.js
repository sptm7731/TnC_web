//...........background image scroll..................

$(window).scroll(function() {
  var scroll = $(window).scrollTop();
	$(".about").css({
		backgroundSize: (100 + scroll/10)  + "%",
		top: -(scroll/10)  + "%",

		//.......................................................Blur suggestion from @janwagner: https://codepen.io/janwagner/ in comments
		//"-webkit-filter": "blur(" + (scroll/200) + "px)",
		//filter: "blur(" + (scroll/200) + "px)"
	});
});

//element2

$(window).scroll(function() {
  var scroll = $(window).scrollTop();
	$("#gfx,#photo,#web,#software,#motion,#advertisement,#video,#writing,#media_management").css({
		backgroundSize: (100 + scroll/300)  + "%",
		top: -(scroll/10)  + "%",
	});
});


//..............animation section......................


//..........animation....minions_body.........

var ball = document.getElementsByClassName("ball");
    document.onmousemove = function() {
    var x = event.clientX * 100 / window.innerWidth + "%";
    var y = event.clientY * 70 / window.innerHeight + "%";

     for (var i = 0; i < 2; i++) {
        ball[i].style.left = x / 2;
        ball[i].style.top = y / 2;
        ball[i].style.transform = "translate(" + x + "," + y + ")";
     }
}


//........card...........


const cards = document.querySelector(".cards");
const images = document.querySelectorAll(".card__img");
const backgrounds = document.querySelectorAll(".card__bg");
const range = 40;

// const calcValue = (a, b) => (((a * 100) / b) * (range / 100) -(range / 2)).toFixed(1);
const calcValue = (a, b) => (a / b * range - range / 2).toFixed(1); // thanks @alice-mx

let timeout;
document.addEventListener('mousemove', ({ x, y }) => {
  if (timeout) {
    window.cancelAnimationFrame(timeout);
  }

  timeout = window.requestAnimationFrame(() => {
    const yValue = calcValue(y, window.innerHeight);
    const xValue = calcValue(x, window.innerWidth);

    cards.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`;

    [].forEach.call(images, image => {
      image.style.transform = `translateX(${-xValue}px) translateY(${yValue}px)`;
    });

    [].forEach.call(backgrounds, background => {
      background.style.backgroundPosition = `${xValue * .045}px ${-yValue * .045}px`;
    });
  });
}, false);



