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

let stepsquare1 = document.getElementById("timeline-square1");
let stepsquare2 = document.getElementById("timeline-square2");
let stepsquare3 = document.getElementById("timeline-square3");
let stepsquare4 = document.getElementById("timeline-square5");
let stepsquare5 = document.getElementById("timeline-square6");

let togglePrint = document.getElementById("togglePrint");

let Steps = [step1, step2, step3, step4, step5];
let Squares = [stepsquare1, stepsquare2, stepsquare3, stepsquare4, stepsquare5];

let comments = [];

let SelectedPath = arrow1;
let timeoutscroll = false;

let selectStep = (t) => {
  console.log("test", t);
  for (let i = 0; i < Steps.length; i++) {
    if (i == t) {
      if (Steps[i].classList.contains("timeline-nav-notselected")) {
        Steps[i].classList.remove("timeline-nav-notselected");
        Steps[i].classList.add("timeline-nav-selected");
        let scrollposition =
          Squares[i].getBoundingClientRect().top + window.pageYOffset - 300;

        window.scrollTo({
          top: scrollposition,
          behavior: "smooth",
        });

        timeoutscroll = true;
        setTimeout(() => {
          timeoutscroll = false;
        }, 800);
      }
    } else {
      if (Steps[i].classList.contains("timeline-nav-selected")) {
        Steps[i].classList.remove("timeline-nav-selected");
        Steps[i].classList.add("timeline-nav-notselected");
      }
    }
  }
};

let selectStep2 = (t) => {
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

let SelectScrolled = () => {
  let y = window.scrollY;
  console.log(y);
  if (!timeoutscroll) {
    for (let i = 0; i < Squares.length - 1; i++) {
      if (
        Squares[i].getBoundingClientRect().top + window.pageYOffset - 300 < y &&
        y <
          Squares[i + 1].getBoundingClientRect().top + window.pageYOffset - 300
      ) {
        selectStep2(i);
      } else if (
        Squares[0].getBoundingClientRect().top - 300 + window.pageYOffset >
        y
      ) {
        selectStep2(0);
      } else if (
        Squares[4].getBoundingClientRect().top + window.pageYOffset - 300 <
        y
      ) {
        selectStep2(4);
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
  SelectScrolled();
};

// Get the header
var header = document.getElementById("timeline-nav-cotainer");
// Get the offset position of the navbar
let mobilenav = document.getElementById("nav-mobile");
let nav = document.getElementById("nav-desktop");

var sticky = header.offsetTop;
let offsetHeight = mobilenav.offsetHeight + nav.offsetHeight;
let timelineheight = header.offsetHeight;

let mobile = window.matchMedia("(max-width: 700px)").matches;

let recalcSticky = function () {
  header = document.getElementById("timeline-nav-cotainer");
  // Get the offset position of the navbar
  sticky = header.offsetTop;
  offsetHeight = mobilenav.offsetHeight + nav.offsetHeight;
  timelineheight = header.offsetHeight;
  mobile = window.matchMedia("(max-width: 700px)").matches;
  changeDAGraph();
};

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position

function addsticky(upscroll) {
  if (window.pageYOffset + offsetHeight / 2 > sticky) {
    header.classList.add("sticky");
    document.getElementById(
      "placeholder"
    ).style.cssText += `height:${timelineheight}px`;
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
    document.getElementById("placeholder").style.cssText += `height: 0px`;
  }
}

function switchWorksheets(flip) {
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

window.onresize = recalcSticky;

let toggleBool = false;

togglePrint.addEventListener("click", function () {
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

let changeDAGraph = () => {
  if (mobile) {
    document
      .getElementById("Data-Anaytic-Graphic")
      .setAttribute("data", "src/assets/Icons/DataAnalysis_Mobile.svg");
    document
      .getElementById("Stagegate")
      .setAttribute("data", "src/assets/Stagegate-Mobile.svg");
  } else {
    document
      .getElementById("Data-Anaytic-Graphic")

      .setAttribute("data", "src/assets/Icons/DataAnalysis_Desktop.svg");
    document
      .getElementById("Stagegate")
      .setAttribute("data", "src/assets/StageGate.svg");
  }
};
changeDAGraph();

let buttonDown = document.getElementById("Webapp-button-down");
let buttonUp = document.getElementById("Webapp-button-up");

let commentsection = document.getElementById("webapp-comment");

let commentnumber = 1;

let checkcomment = (number) => {
  commentsection.setAttribute("data", `src/assets/Webapp/Post0${number}.svg`);
};

checkcomment(commentnumber);

buttonDown.addEventListener("click", function () {
  console.log("Down");
  commentsection.classList.add("webapp-comment-change-down");
  setTimeout(() => {
    countComment(-1);
    commentsection.classList.remove("webapp-comment-change-down");
  }, 300);
});

buttonUp.addEventListener("click", function () {
  console.log("Up");
  commentsection.classList.add("webapp-comment-change-up");
  setTimeout(() => {
    countComment(1);
    commentsection.classList.remove("webapp-comment-change-up");
  }, 300);
});

let countComment = (count) => {
  commentnumber += count;
  if (commentnumber < 1) {
    commentnumber = 5;
  }
  if (commentnumber > 5) {
    commentnumber = 1;
  }
  checkcomment(commentnumber);
};
