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
