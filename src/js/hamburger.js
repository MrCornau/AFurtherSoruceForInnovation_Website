let toggle = false;

let hamburgerTop = anime({
  targets: document.getElementById("hamburger-top"),
  //   translateX: 270,
  d: [{ value: "M0 1H20" }, { value: "M16.7393 1.26068L9.99993 8.00001" }],
  easing: "easeOutQuad",
  autoplay: false,
  duration: 200,
});
let hamburgerCenter = anime({
  targets: document.getElementById("hamburger-center"),
  //   translateX: 270,
  d: [{ value: "M0 9H20" }, { value: "M2.92871 0.928955L17.0708 15.0711" }],
  easing: "easeOutQuad",
  autoplay: false,
  duration: 200,
});
let hamburgerBottom = anime({
  targets: document.getElementById("hamburger-bottom"),
  //   translateX: 270,
  d: [{ value: "M0 17H20" }, { value: "M3.0957 14.9045L10.4351 7.56513" }],
  easing: "easeOutQuad",
  autoplay: false,
  duration: 200,
});

document
  .getElementById("nav-toggleHamburger")
  .addEventListener("click", toggleMobilemenue);

function toggleMobilemenue() {
  toggle = !toggle;
  console.log("blaaa");
  hamburgerTop.play();
  hamburgerCenter.play();
  hamburgerBottom.play();
  hamburgerBottom.finished.then(() => {
    hamburgerTop.reverse();
    hamburgerCenter.reverse();
    hamburgerBottom.reverse();
  });

  if (toggle) {
    document.getElementById("nav-mobile-overlay").style.height = "100%";
  } else {
    document.getElementById("nav-mobile-overlay").style.height = "0%";
  }
}
