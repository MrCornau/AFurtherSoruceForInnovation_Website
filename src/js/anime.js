// button = document.getElementById("anime-test");
// animetest = document.getElementById("animediv");

// button.addEventListener("click", () => {
//   console.log("button");
//   anime({
//     targets: animetest,
//     translateX: 10,
//     // rotate: "1turn",
//     backgroundColor: "#FFF",
//     duration: 800,
//   });
// });

let davinci = document.getElementById("davinci-animation-container");
os.on("enter", ".davinci-container", (davinci) => {
  davincifont1.play();
  davincifont2.play();
  davincifont3.play();
  davincifont4.play();
  davincifont5.play();
  setTimeout(() => {
    onscreen = true;
    console.log("onScreen!");
  }, 1000);
});

os.on("leave", ".davinci-container", (canvas) => {
  onscreen = false;
  console.log("ofScreen!");
});

let animationease = "easeInOutSine";
let durationtime = 2000;
let loop = false;

let path1 = anime.path("#davinci-path1");
let path2 = anime.path("#davinci-path2");
let path3 = anime.path("#davinci-path3");
let path4 = anime.path("#davinci-path4");
let path5 = anime.path("#davinci-path5");

const davincifont1 = anime({
  targets: "#davinci-font1",
  translateX: path1("x"),
  translateY: path1("y"),
  rotate: [10, -30],
  opacity: [0, 1],
  easing: animationease,
  duration: durationtime,
  loop: loop,
  autoplay: false,
});

const davincifont2 = anime({
  targets: "#davinci-font2",
  translateX: path2("x"),
  translateY: path2("y"),
  rotate: [25, -15],
  opacity: [0, 1],
  easing: animationease,
  duration: durationtime,
  loop: loop,
  delay: 100,
  autoplay: false,
});

const davincifont3 = anime({
  targets: "#davinci-font3",
  translateX: path3("x"),
  translateY: path3("y"),
  rotate: [40, -0],
  opacity: [0, 1],
  easing: animationease,
  duration: durationtime,
  loop: loop,
  delay: 200,
  autoplay: false,
});

const davincifont4 = anime({
  targets: "#davinci-font4",
  translateX: path4("x"),
  translateY: path4("y"),
  rotate: [55, 15],
  opacity: [0, 1],
  easing: animationease,
  duration: durationtime,
  loop: loop,
  delay: 300,
  autoplay: false,
});

const davincifont5 = anime({
  targets: "#davinci-font5",
  translateX: path5("x"),
  translateY: path5("y"),
  rotate: [80, 30],
  opacity: [0, 1],
  easing: animationease,
  duration: durationtime,
  loop: loop,
  delay: 400,
  autoplay: false,
});

const davinciMorph = anime
  .timeline({
    //   direction: "reverse",
    targets: ".davinci-morph",
    easing: "linear",
    autoplay: true,
    delay: anime.stagger(1600),
    loop: true,
  })
  .add(
    {
      targets: ".davinci-morph-first",
      scale: 1.03,
      opacity: 0.3,
      duration: 800,
    },
    "-=600"
  )
  .add({
    targets: ".davinci-morph-first",
    scale: 1.05,
    opacity: 0,
    duration: 1600,
  })
  .add(
    {
      targets: ".davinci-morph-second",
      scale: 1.03,
      opacity: 0.3,
      duration: 800,
    },
    "-=600"
  )
  .add({
    targets: ".davinci-morph-second",
    scale: 1.05,
    opacity: 0,
    duration: 1600,
  });

const davincitwinkle = anime
  .timeline({
    //   direction: "reverse",
    targets: ".davinci-twinkle",
    easing: "linear",
    autoplay: true,
    loop: true,
  })
  .add({
    targets: ".davinci-twinkle",
    ry: 2.7,
    duration: 4000,
  })
  .add({
    targets: ".davinci-twinkle",
    ry: 0.3,
    duration: 200,
  })
  .add({
    targets: ".davinci-twinkle",
    ry: 2.7,
    duration: 200,
  });

// anime({
//   targets: "davinci-twinkle",
//   ry: ["2.7", "1"],
//   easing: "easeInOutQuad",
//   loop: true,
// });
