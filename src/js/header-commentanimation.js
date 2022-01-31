const staggerVisualizerEl = document.querySelector(".stagger-visualizer");
const fragment = document.createDocumentFragment();
const grid = [17, 17];
const col = grid[0];
const row = grid[1];
let dpr = window.devicePixelRatio || 1;
let x1 = screen.width / 2;
let x2 = screen.width;
let y1 = 60;
let y2 = screen.height - 60;
let randx = getRandomArbitrary(x1, x2 - 300);
let randy = getRandomArbitrary(y1, y2);
let mobile = window.matchMedia("(max-width: 700px)");

const sentences = [
  "I created a WebApp to solve a problem.",
  "I solved a problem that I was facing recently!",
  "Checkout my 3D printed solution.",
  "How do you solve this problem?",
  "To help myself, I created this solution.",
];

const animationfunction = () => {
  const staggersAnimation = anime
    .timeline({
      direction: "reverse",
      targets: ".stagger-visualizer .stagger-triangle",
      easing: "easeInOutSine",
      delay: anime.stagger(400),
      autoplay: false,
    })
    .add({
      duration: 2000,
    })
    .add({
      targets: ".stagger-visualizer .rotate180",
      rotate: {
        value: 180,
        duration: 0,
        easing: "easeInOutSine", //#endregion
      },
      easing: "easeOutExpo",
      duration: 0,
    })
    .add({
      targets: ".header-commentcontainer",
      width: 290,
      opacity: 0,
      duration: 300,
    })
    .add({
      translateX: () => anime.random(-10, 10),
      translateY: () => anime.random(-100, 10),
      delay: anime.stagger(8, { from: "last" }),
      borderRadius: ["0%", "100%"],
      easing: "easeInOutQuad",
      scale: 0,
      opacity: 0,
      duration: 600,
      begin: function () {
        document.getElementById("header-comment").innerText =
          sentences[random([0, 1, 2, 3, 4])];
      },
    });

  let showcomment = anime
    .timeline({
      targets: ".header-commentanimation",
      easing: "easeInOutSine",
      loop: false,
      autoplay: false,
    })
    .add({
      translateX: randx,
      translateY: randy,
      opacity: 1,
      duration: 0,
    });

  showcomment.play();
  staggersAnimation.play();
};

setInterval(function () {
  if (mobile.matches) {
    randx = 30;
    randy = y2 - 100;
  } else {
    randx = getRandomArbitrary(x1, x2 - 300);
    randy = getRandomArbitrary(y1, y2 - 300);
  }
  animationfunction();
  // console.log(randx, x1, x2, "<-x_|_y->", randy, y1, y2);
}, 4500);

function random(numbers) {
  console.log(numbers[Math.floor(Math.random() * numbers.length)]);
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function getsize() {}

getsize();

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function checkWindowsize() {
  x1 = screen.width / 2;
  x2 = screen.width;
  y2 = screen.height;
  -y1;
  mobile = window.matchMedia("(max-width: 700px)");
  console.log("checkwindowsize");
}

window.addEventListener("resize", checkWindowsize);
