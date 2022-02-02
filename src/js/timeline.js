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

let togglePrint = document.getElementById("togglePrint");

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

var lastScrollTop = window.pageYOffset;

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
  if (st > lastScrollTop) {
    // downscroll code
    addsticky(false);
  } else {
    // upscroll code
    addsticky(true);
  }
  lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
};

// Get the header
var header = document.getElementById("timeline-nav-cotainer");
// Get the offset position of the navbar
let mobilenav = document.getElementById("nav-mobile");
let nav = document.getElementById("nav-desktop");

var sticky = header.offsetTop;
let offsetHeight = mobilenav.offsetHeight + nav.offsetHeight;
let timelineheight = header.offsetHeight;

let recalcSticky = function () {
  header = document.getElementById("timeline-nav-cotainer");
  // Get the offset position of the navbar
  sticky = header.offsetTop;
  offsetHeight = mobilenav.offsetHeight + nav.offsetHeight;
  timelineheight = header.offsetHeight;
};

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position

function addsticky(upscroll) {
  if (window.pageYOffset + offsetHeight / 2 > sticky) {
    header.classList.add("sticky");
    if (upscroll) {
      header.style.cssText += `top : ${offsetHeight}px`;
      mobilenav.style.cssText += `top : 0px`;
      nav.style.cssText += `top : 0px`;
    } else {
      header.style.cssText += `top : 0px`;
      mobilenav.style.cssText += `top : -${timelineheight}px`;
      nav.style.cssText += `top : -${timelineheight / 2}px`;
    }
  } else {
    header.classList.remove("sticky");
    header.style.cssText += `top : 0px`;
    mobilenav.style.cssText += `top : 0px`;
    nav.style.cssText += `top : 0px`;
  }
}

function switchWorksheets(flip) {
  //   for (let i = 1; i < 10; i++) {
  //     document.getElementById(
  //       `worksheet${i}`
  //     ).src = `src/assets/Worksheets/${Variant}_Variant_0${i}.jpg`;
  //     document.getElementById(`worksheet${i}`).classList.remove("rotation");
  //     document.getElementById(`worksheet${i}`).classList.add("rotation");
  //   }
  if (flip) {
    document.querySelectorAll(".flip-card-inner").forEach((item) => {
      item.classList.add("flip");
    });
  } else {
    document.querySelectorAll(".flip-card-inner").forEach((item) => {
      item.classList.remove("flip");
    });
  }
}

function removeRotation() {
  for (let i = 1; i < 10; i++) {
    document.getElementById(`worksheet${i}`).classList.remove("rotation");
  }
}

window.onresize = recalcSticky;

let toggleBool = false;

togglePrint.addEventListener("click", function () {
  //   removeRotation();
  if (!toggleBool) {
    togglePrint.classList.add("toggled");
    toggleBool = true;
    switchWorksheets(true);
  } else {
    togglePrint.classList.remove("toggled");
    toggleBool = false;
    switchWorksheets(false);
  }
});

// src="src/assets/Worksheets/Digital_Variant_01.jpg"
// src="src/assets/Worksheets/Digital_Variant_02.jpg"
// src="src/assets/Worksheets/Digital_Variant_03.jpg"
// src="src/assets/Worksheets/Digital_Variant_04.jpg"
// src="src/assets/Worksheets/Digital_Variant_05.jpg"><
// src="src/assets/Worksheets/Digital_Variant_06.jpg"
// src="src/assets/Worksheets/Digital_Variant_07.jpg"
// src="src/assets/Worksheets/Digital_Variant_08.jpg"
// src="src/assets/Worksheets/Digital_Variant_09.jpg"
