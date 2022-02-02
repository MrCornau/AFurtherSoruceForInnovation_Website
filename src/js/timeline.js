let step1 = document.getElementById("timeline-nav-item_1");
let step2 = document.getElementById("timeline-nav-item_2");
let step3 = document.getElementById("timeline-nav-item_3");
let step4 = document.getElementById("timeline-nav-item_4");
let step5 = document.getElementById("timeline-nav-item_5");

let arrow1 = document.getElementById("timeline-nav-arrow-1");
let arrow2 = document.getElementById("timeline-nav-arrow-2");
let arrow3 = document.getElementById("timeline-nav-arrow-3");
let arrow4 = document.getElementById("timeline-nav-arrow-4");
let arrow5 = document.getElementById("timeline-nav-arrow-5");

let Steps = [step1, step2, step3, step4, step5];

let SelectedPath = arrow1;

let selectStep = (t) => {
  console.log("test", t);
  for (let i = 0; i < Steps.length; i++) {
    if (i == t) {
      if (Steps[i].classList.contains("timeline-nav-notselected")) {
        Steps[i].classList.remove("timeline-nav-notselected");
        Steps[i].classList.add("timeline-nav-selected");
      }
    } else {
      if (Steps[i].classList.contains("timeline-nav-selected")) {
        Steps[i].classList.remove("timeline-nav-selected");
        Steps[i].classList.add("timeline-nav-notselected");
      }
    }
  }
};

Steps.forEach(function (elem, i) {
  elem.addEventListener("click", function () {
    selectStep(i);
  });
});

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  addsticky();
};

// Get the header
var header = document.getElementById("timeline-nav-cotainer");
// Get the offset position of the navbar
var sticky = header.offsetTop;
let offsetHeight = document.getElementById("nav-desktop").offsetHeight;
let recalcSticky = function () {
  header = document.getElementById("timeline-nav-cotainer");
  // Get the offset position of the navbar
  sticky = header.offsetTop;
  offsetHeight = document.getElementById("nav-desktop").offsetHeight;
};

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position

function addsticky() {
  if (window.pageYOffset + offsetHeight / 2 > sticky) {
    header.classList.add("sticky");
    header.style.cssText += `top : ${offsetHeight}px`;
  } else {
    header.classList.remove("sticky");
  }
}

window.onresize = recalcSticky;
