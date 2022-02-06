const bg = document.querySelector(".particle-container");
const title = document.querySelector(".leadusercomment");
const framentparticle = document.createDocumentFragment();
const gridParticle = [30, 15];
const colParticle = gridParticle[0];
const rowParticle = gridParticle[1];
const fieldParticle = colParticle * rowParticle;
const Lead1 = 60;
const Lead2 = 200;
const Lead3 = 20;
const Lead4 = 90;
let position = 0;

let Comments = [
  {
    autor: "Daniel10 20.10.2021",
    comment: `<span class="fontColor_Dark Font-Marked">I have created </span> an application that uses artificial intelligence to help keyword before archiving or submitting to a photo agency.`,
    link: "https://www.reddit.com/r/naturephotography/comments/lcs6hm/over_the_last_few_days_i_created_a_web_app_to/",
  },
  {
    autor: "Daniel1 20.10.2021",
    comment: `<span class="fontColor_Dark Font-Marked">I have created </span> an application that uses artificial intelligence to help keyword before archiving or submitting to a photo agency.`,
    link: "https://www.reddit.com/r/naturephotography/comments/lcs6hm/over_the_last_few_days_i_created_a_web_app_to/",
  },
  {
    autor: "Daniel2 20.10.2021",
    comment: `<span class="fontColor_Dark Font-Marked">I have created </span> an application that uses artificial intelligence to help keyword before archiving or submitting to a photo agency.`,
    link: "https://www.reddit.com/r/naturephotography/comments/lcs6hm/over_the_last_few_days_i_created_a_web_app_to/",
  },
];

for (let i = 0; i < fieldParticle; i++) {
  const div = document.createElement("div");
  framentparticle.appendChild(div);
  div.className = "el";
  if (i == Lead1 || i == Lead2 || i == Lead3 || i == Lead4) {
    div.classList.add("elLead");
  }
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

bg.appendChild(framentparticle);

const BackgroundAnimation = anime
  .timeline({
    targets: ".el",
    duration: 1500,
    // delay: anime.stagger(10, { grid: gridParticle, from: "first" }),
    loop: true,
    easing: "cubicBezier(.5, .05, .1, .3)",
  })

  .add({
    translateX: 0,
    translateY: 0,
    opacity: 1,
    duration: 0,
  })
  .add({
    translateX: [
      {
        value: anime.stagger("2px", {
          grid: gridParticle,
          from: "first",
          axis: "x",
        }),
      },
      {
        value: anime.stagger("-2px", {
          grid: gridParticle,
          from: "first",
          axis: "x",
        }),
      },
      {
        value: anime.stagger("0", {
          grid: gridParticle,
          from: "first",
          axis: "x",
        }),
      },
    ],
    translateY: [
      {
        value: anime.stagger("2px", {
          grid: gridParticle,
          from: "last",
          axis: "y",
        }),
      },
      {
        value: anime.stagger("-2px", {
          grid: gridParticle,
          from: "last",
          axis: "y",
        }),
      },
      {
        value: anime.stagger("0", {
          grid: gridParticle,
          from: "last",
          axis: "y",
        }),
      },
    ],
    delay: anime.stagger(30, { grid: gridParticle, from: "first" }),
    scale: 1,
    backgroundColor: "#edf67d",
    borderRadius: 0,
  })
  .add(
    {
      targets: ".particle-visualizer .particle-triangle ",
      opacity: 1,
      changeBegin: function (anim) {
        BackgroundAnimation2.restart();
        BackgroundAnimation2.play();
        console.log("yooo");
        document.getElementById("particle-comment").innerHTML =
          Comments[position].comment;
        document
          .getElementById("particle-link")
          .setAttribute("href", Comments[position].link);
        document.getElementById("particle-autor").innerHTML =
          Comments[position].autor;
        position += 1;
        if (position >= Comments.length) {
          position = 0;
        }
      },
    },
    "-=600"
  )
  .add(
    {
      targets: ".particle-anime-comment ",
      opacity: 1,
      duration: 10,
    },
    "-=600"
  )
  .add({
    duration: 5000,
  })
  .add(
    {
      targets: ".particle-anime-comment",
      opacity: 0,
      duration: 10,
    },
    "-=600"
  )
  .add({
    targets: ".particle-triangle ",
    opacity: 0,
    duration: 10,
  })
  .add({
    easing: "easeInCubic",
    translateX: () => anime.random(-30, 30),
    translateY: () => anime.random(-10, 10),
    duration: 500,
    borderRadius: 0,
    backgroundColor: "#dbe5e6",
    scale: () => anime.random(0.3, 0.4),

    // delay: anime.stagger(3, { grid: gridParticle, from: "last" }),
  })

  .add({
    easing: "linear",
    translateX: () => anime.random(-30, 30),
    translateY: () => anime.random(-30, 30),
    duration: 1000,
    borderRadius: 0,
    scale: () => anime.random(0.3, 0.4),
    // delay: anime.stagger(10, { grid: gridParticle, from: "first" }),
  })

  .add({
    easing: "easeOutCubic",
    translateX: () => anime.random(-30, 30),
    translateY: () => anime.random(-150, 150),
    duration: 700,
    scale: () => anime.random(0.3, 0.4),
    // delay: anime.stagger(50, { grid: gridParticle, from: "last" }),
  })

  .add({
    easing: "spring(1, 80, 10, 0)",
    translateX: 0,
    translateY: 0,
    scale: 1,
    borderRadius: 0,
    duration: 700,
    delay: anime.stagger(10, { grid: gridParticle, from: "first" }),
    scale: 1,
  });

const BackgroundAnimation2 = anime
  .timeline({
    direction: "reverse",
    targets: ".particle-visualizer .particle-triangle ",
    easing: "easeInOutSine",
    delay: anime.stagger(150),
    autoplay: false,
  })
  .add({
    targets: ".particle-visualizer .rotate180",
    rotate: {
      value: 180,
      duration: 0,
      easing: "easeInOutSine", //#endregion
    },
    easing: "easeOutExpo",
    duration: 0,
  })
  .add({
    translateX: () => anime.random(-10, 10),
    translateY: () => anime.random(120, 210),
    delay: anime.stagger(8, { from: "last" }),
    borderRadius: 0,
    easing: "easeInOutQuad",
    scale: 0,
    duration: 600,
  });

BackgroundAnimation.play();
