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
    delay: anime.stagger(10, { grid: gridParticle, from: "first" }),
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
      },
    },
    "-=600"
  )
  .add({
    targets: ".particle-anime-comment ",
    opacity: 1,
    duration: 10,
  })
  .add({
    duration: 10000,
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
    translateX: () => anime.random(-30, 30),
    translateY: () => anime.random(-150, 150),
    duration: 1500,
    borderRadius: 150,
    backgroundColor: "#dbe5e6",
    scale: () => anime.random(0.3, 0.4),
    borderRadius: 150,
    delay: anime.stagger(10, { grid: gridParticle, from: "last" }),
  })
  .add(
    {
      targets: ".particle-triangle ",
      opacity: 0,
      duration: 10,
    },
    "-=800"
  )
  .add({
    easing: "easeInOutQuart",
    translateX: () => anime.random(-30, 30),
    translateY: () => anime.random(-150, 150),
    duration: 1500,
    scale: () => anime.random(0.3, 0.4),
    delay: anime.stagger(50, { grid: gridParticle, from: "first" }),
  })
  .add({
    easing: "easeInOutQuart",
    translateX: () => anime.random(-30, 30),
    translateY: () => anime.random(-150, 150),
    duration: 1500,
    scale: () => anime.random(0.3, 0.4),
    delay: anime.stagger(50, { grid: gridParticle, from: "last" }),
  })
  .add({
    easing: "easeInOutQuart",
    translateX: () => anime.random(-30, 30),
    translateY: () => anime.random(-150, 150),
    duration: 1500,
    scale: () => anime.random(0.3, 0.4),
    delay: anime.stagger(10, { grid: gridParticle, from: "first" }),
  })
  .add({
    easing: "easeInOutQuart",
    translateX: () => anime.random(-30, 30),
    translateY: () => anime.random(-150, 150),
    duration: 1500,
    scale: () => anime.random(0.3, 0.4),
    delay: anime.stagger(60, { grid: gridParticle, from: "last" }),
  })
  .add({
    easing: "spring(1, 80, 10, 0)",
    translateX: 0,
    translateY: 0,
    scale: 1,
    borderRadius: 150,
    duration: 1500,
    delay: anime.stagger(10, { grid: gridParticle, from: "first" }),
    scale: 1,
  });

//   .add({
//     scale: 0.5,
//     backgroundcolParticleor: "#ff08e8",
//     delay: anime.stagger(150, { grid: gridParticle, from: "last" }),
//   })
//   .add({
//     translateX: () => anime.random(-1500, 1500),
//     translateY: () => anime.random(-1500, 1500),
//     scale: 0.25,
//     delay: anime.stagger(150, { grid: gridParticle, from: "last" }),
//   })
//   .add({
//     targets: title,
//     opacity: 1,
//     duration: 10,
//   })
//   .add({
//     translateX: 0,
//     translateY: 0,
//     scale: 1,
//     borderRadius: 0,
//     backgroundcolParticleor: "#fff",
//     duration: 2500,
//     delay: anime.stagger(150, { grid: gridParticle, from: "first" }),
//     endDelay: 1500,
//   });

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
    translateY: () => anime.random(-150, 10),
    delay: anime.stagger(8, { from: "last" }),
    borderRadius: ["0%", "150%"],
    easing: "easeInOutQuad",
    scale: 0,
    duration: 600,
  });

BackgroundAnimation.play();
