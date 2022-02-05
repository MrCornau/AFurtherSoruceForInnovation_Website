const navDesktop = document.getElementById("nav-desktop");
const navMobile = document.getElementById("nav-mobile");

let mobilemenue = false;

let ismobile = window.matchMedia("(max-width: 700px)").matches;

let shapes = [
  {
    d: "M0.919922 1.81628L10.9199 2.66597L20.9199 1.81628M16.8105 12.1703H5.45478M0.919922 21.8163L10.9199 21.4894L20.9199 21.8163",
  },
  {
    d: "M0.919922 0.9823L10.9199 7.26302L20.9199 0.9823M16.8105 11.3363H5.45478M0.919922 20.9823L10.9199 14.4838L20.9199 20.9823",
  },
];

function reportWindowSize() {
  ismobile = window.matchMedia("(max-width: 700px)").matches;
  if (ismobile) {
    navDesktop.style.display = "none";
    navMobile.style.display = "flex";
  } else {
    navMobile.style.display = "none";
    navDesktop.style.display = "flex";
  }
}

reportWindowSize();

window.addEventListener("resize", () => {
  reportWindowSize();
});

// document.getElementsByTagName("video")[0].msHorizontalMirror = true;

// document.getElementsByTagName("video")[0].onended = function () {
//   this.load();
//   this.play();
// };
