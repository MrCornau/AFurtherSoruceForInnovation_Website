// const os = new OnScreen();
// let onscreen = false;

// let canvas = document.getElementById("particle-div");
// os.on("enter", "canvas", (canvas) => {
//   setTimeout(() => {
//     onscreen = true;
//     console.log("onScreen!");
//   }, 1000);
// });

// os.on("leave", "canvas", (canvas) => {
//   onscreen = false;
//   console.log("ofScreen!");
// });

// let isshown = document.getElementById("Part-haystack").style.display;
// console.log("visibility", isshown);

// window.addEventListener("DOMContentLoaded", startAnimation, false);

// function startAnimation() {
//   if (isshown != "none") {
//     console.log("visible");
//     particles();
//   }
// }

// function getCoords(elem) {
//   // crossbrowser version
//   var box = elem.getBoundingClientRect();

//   var body = document.body;
//   var docEl = document.documentElement;

//   var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
//   var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

//   var clientTop = docEl.clientTop || body.clientTop || 0;
//   var clientLeft = docEl.clientLeft || body.clientLeft || 0;

//   var top = box.top + scrollTop - clientTop;
//   var left = box.left + scrollLeft - clientLeft;

//   return { top: Math.round(top), left: Math.round(left) };
// }

// function particles() {
//   let dpr = window.devicePixelRatio || 1;
//   // Get the size of the canvas in CSS pixels.
//   let rect = canvas.getBoundingClientRect();
//   console.log(rect.top);
//   // Give the canvas pixel dimensions of their CSS
//   // size * the device pixel ratio.
//   canvas.width = rect.width * dpr;
//   canvas.height = rect.height * dpr;
//   let ctx = canvas.getContext("2d");
//   // Scale all drawing operations by the dpr, so you
//   // don't have to worry about the difference.
//   let top = getCoords(canvas).top;
//   ctx.scale(dpr, dpr);

//   let mobile = window.matchMedia("(max-width: 700px)");
//   console.log(mobile);
//   function reportWindowSize() {
//     mobile = window.matchMedia("(max-width: 700px)");
//     console.log("resize");
//     canvas = document.getElementById("particle-div");
//     top = getCoords(canvas).top;

//     // Get the device pixel ratio, falling back to 1.
//     dpr = window.devicePixelRatio || 1;
//     // Get the size of the canvas in CSS pixels.
//     rect = canvas.getBoundingClientRect();
//     // Give the canvas pixel dimensions of their CSS
//     // size * the device pixel ratio.
//     canvas.width = rect.width * dpr;
//     canvas.height = rect.height * dpr;
//     ctx = canvas.getContext("2d");
//     // Scale all drawing operations by the dpr, so you
//     // don't have to worry about the difference.
//     ctx.scale(dpr, dpr);
//     init();
//     animate();
//   }

//   window.onresize = reportWindowSize;

//   // const test = document.getElementById("testdiv");

//   // var positionInfo = canvas.getBoundingClientRect();
//   // var height = positionInfo.height;
//   // var width = positionInfo.width;

//   let particlesArray;
//   let number = 10;
//   if (mobile.matches) {
//     number = 10;
//   } else {
//     number = 10;
//   }

//   let speed = 0.5;

//   let mouse = {
//     x: null,
//     y: null,
//     radius: 10,
//   };

//   const d1 = document.getElementById("particlePost1");
//   const d2 = document.getElementById("particlePost2");
//   const d3 = document.getElementById("particlePost3");
//   const d4 = document.getElementById("particlePost4");
//   const d5 = document.getElementById("particlePost5");

//   let Comments = [0, d1, d2, d3, d4, d5];
//   let DisplayedComment = 0;

//   const Intervall = setInterval(function () {
//     DisplayedComment = random([1, 2, 3, 4, 5]);
//     showComment(DisplayedComment);
//   }, random([6800, 9900]));

//   function hideComment(comment) {
//     // speed = 2;
//     DisplayedComment = 0;
//     Comments[comment].style.opacity = 0;
//     Comments[comment].style.visibility = "hidden";

//     setTimeout(() => {
//       speed = 0.5;
//     }, 2000);
//   }

//   function showComment(comment) {
//     Comments[comment].style.visibility = "visible";
//     Comments[comment].style.opacity = 1;
//     setTimeout(() => {
//       hideComment(comment);
//     }, 5000);
//   }

//   const myTimeout = setTimeout(() => {
//     DisplayedComment = 1;
//     showComment(1);
//   }, 500);

//   function myStopFunction() {
//     clearInterval(Intervall);
//   }

//   canvas.addEventListener("mousemove", function (event) {
//     mouse.x = event.x - rect.left;

//     mouse.y = event.y - rect.top;
//     // console.log(mouse.y);
//   });

//   class Particle {
//     constructor(
//       originx,
//       originy,
//       x,
//       y,
//       directionX,
//       directionY,
//       size,
//       color,
//       commentanchor
//     ) {
//       this.x = x;
//       this.y = y;
//       this.originx = originx;
//       this.originy = originy;
//       this.directionX = directionX;
//       this.directionY = directionY;
//       this.size = size;
//       this.color = color;
//       this.originalcolor = color;
//       this.angle = random([50, 10]);
//       this.count = 0;
//       this.oldDirectionX = 0;
//       this.oldDirectionY = 0;
//       this.hover = false;
//       this.direction = random([5.1, 0.5]);
//       this.sizecount = 0;
//       this.commentanchor = commentanchor;
//       this.selected = false;
//     }

//     draw() {
//       ctx.scale(1, 1);
//       ctx.beginPath();
//       ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
//       ctx.strokeStyle = this.color;
//       ctx.stroke();
//       ctx.fillStyle = "#232425";
//       ctx.fill();
//       if (this.commentanchor) {
//         ctx.fillStyle = this.color;
//         ctx.fill();
//       }
//     }

//     speedX(newspeed) {
//       for (let i = 0; i < 20; i++) {
//         this.directionX = this.directionX / i;
//         // console.log(this.directionX, "stop");
//       }
//       for (let i = 0; i < 20; i++) {
//         this.directionX = newspeed / 1 / i;
//         // console.log(newspeed / 1 / i);
//         // console.log(this.directionX, "acceleration");
//       }
//     }

//     speedY(newspeed) {
//       for (let i = 0; i < 10; i++) {
//         this.directionY = this.directionY / i;
//         // console.log(this.directionX, "stop");
//       }
//       for (let i = 0; i < 10; i++) {
//         this.directionY = (i / 10) * newspeed;
//         // console.log(newspeed / 1 / i);
//         // console.log(this.directionX, "acceleration");
//       }
//     }
//     update() {
//       if (this.commentanchor != false && mobile.matches != true) {
//         // console.log("test_mobile_failed", mobile);
//         Comments[this.commentanchor].style.left =
//           this.x + rect.left + 20 + "px";
//         // console.log(this.y + "lala" + top + "px");
//         Comments[this.commentanchor].style.top = this.y + top - 190 + "px";
//         // console.log(this.y, "___", top);
//       }
//       if (this.commentanchor != false && mobile.matches == true) {
//         Comments[this.commentanchor].style.left = rect.left + "px";
//         Comments[this.commentanchor].style.top = top + rect.height / 2 + "px";
//       }

//       if (this.count == 30) {
//         this.angle += 1;
//         this.count = 0;
//       }
//       this.count += 1;

//       let x = Math.cos(this.angle) * 80 + this.originx;
//       let y = Math.sin(this.angle) * 80 + this.originy;

//       // let x = this.originx;
//       // let y = this.originy;

//       // console.log(x, y);
//       let dxorigin = x - this.x;
//       let dyorigin = y - this.y;

//       // ctx.beginPath();
//       // ctx.arc(x, y, 90, 0, Math.PI * 2, false);
//       // ctx.strokeStyle = "grey";
//       // ctx.stroke();

//       let distanceOrigin = Math.sqrt(dxorigin * dxorigin + dyorigin * dyorigin);

//       if (distanceOrigin > 100 + this.size && this.selected != true) {
//         if (this.x < x) {
//           this.speedX(getRandomArbitrary(speed / 10, speed));
//           this.directionX = getRandomArbitrary(speed / 10, speed);
//           this.x += speed / 2;
//         } else {
//           // console.log("directionX_back");
//           // this.speedX(-getRandomArbitrary(speed / 10, speed));
//           this.directionX = -getRandomArbitrary(speed / 10, speed);
//           this.x -= speed / 2;
//         }
//         if (this.y < y) {
//           // this.speedY(getRandomArbitrary(speed / 10, speed));
//           this.directionY = getRandomArbitrary(speed / 10, speed);
//           this.y += speed / 2;
//         } else {
//           // this.speedY(-getRandomArbitrary(speed / 10, speed));
//           this.directionY = -getRandomArbitrary(speed / 10, speed);
//           this.y -= speed / 2;
//         }
//         this.count += 1;
//       }

//       if (
//         this.commentanchor == DisplayedComment &&
//         this.commentanchor != false
//       ) {
//         // console.log(this.commentanchor, "gooo");
//         this.directionX = 0;
//         this.directionY = 0;
//         this.selected = true;
//       }
//       if (this.commentanchor != DisplayedComment && this.selected == true) {
//         this.directionX = Math.random() * speed - speed / 2;
//         this.directionY = Math.random() * speed - speed / 2;
//         this.selected = false;
//       }

//       let dx = mouse.x - this.x;
//       let dy = mouse.y - this.y;
//       let distance = Math.sqrt(dx * dx + dy * dy);
//       if (distance < mouse.radius + this.size) {
//         // console.log("test");
//         this.color = "#FFFFFF";

//         // ctx.beginPath();
//         // ctx.arc(this.x, this.y, 20, 0, Math.PI * 2, false);
//         // ctx.strokeStyle = "blue";
//         // ctx.stroke();
//         if (this.commentanchor != false) {
//           // console.log(this.commentanchor);
//           this.directionX = 0;
//           this.directionY = 0;
//           // myStopFunction();
//           showComment(this.commentanchor);
//         } else {
//           if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
//             this.x += speed * 4;
//           }
//           if (mouse.x > this.x > this.size * 10) {
//             this.x -= speed * 4;
//           }
//           if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
//             this.y += speed * 4;
//           }
//           if (mouse.y > this.y && this.y > this.size * 10) {
//             this.y -= speed * 4;
//           }
//         }

//         this.hover = true;
//       }
//       if (this.hover && distance > mouse.radius + this.size) {
//         this.color = this.originalcolor;
//         if (this.commentanchor != false) {
//           setTimeout(() => {
//             hideComment(this.commentanchor);
//           }, 40);
//         }
//       }
//       this.x += this.directionX;
//       this.y += this.directionY;
//       this.draw();
//     }
//   }

//   function easeLinear(t, b, c, d) {
//     return (c * t) / d + b;
//   }

//   function getRandomArbitrary(min, max) {
//     return Math.random() * (max - min) + min;
//   }

//   function init() {
//     console.log("hello_init");
//     // ctx.clearRect(0, 0, canvas.width, canvas.height);
//     particlesArray = [];
//     let numberOfParticles = number;
//     for (let i = 0; i < numberOfParticles; i++) {
//       let size = (Math.random() * 7 + 0.5) * 2;

//       let WindwoCenterX = canvas.width / (2 * dpr);
//       let WindwoCenterY = canvas.height / (2 * dpr);
//       // console.log(WindwoCenterX);
//       let centerX = random([
//         WindwoCenterX - 200,
//         WindwoCenterX - 50,
//         WindwoCenterX + 50,
//         // WindwoCenterX + 60,
//         WindwoCenterX + 200,
//       ]);
//       let centerY = random([
//         WindwoCenterY - 50,
//         WindwoCenterY,
//         WindwoCenterY,
//         WindwoCenterY + 50,
//       ]);

//       let r = 80 * Math.sqrt(Math.random());
//       let theta = Math.random() * 2 * Math.PI;
//       let x = centerX + r * Math.cos(theta);
//       let y = centerY + r * Math.sin(theta);
//       let commentanchor = false;
//       let color = "#B0CDCF";
//       if (number >= i && number - 6 < i) {
//         commentanchor = number - i;
//         console.log("numbers", commentanchor);
//         color = "#EDF67D";

//         size = 10;
//       }
//       // console.log(x, y);
//       // let x = Math.random() * (innerWidth - size * 2 - size * 2) + size;
//       // let y = Math.random() * (innerHeight * 2 - size * 2) + size;
//       let directionX = Math.random() * speed - speed / 2;
//       let directionY = Math.random() * speed - speed / 2;

//       particlesArray.push(
//         new Particle(
//           centerX,
//           centerY,
//           x,
//           y,
//           directionX,
//           directionY,
//           size,
//           color,
//           commentanchor
//         )
//       );
//     }
//   }

//   function random(numbers) {
//     return numbers[Math.floor(Math.random() * numbers.length)];
//   }

//   function animate() {
//     // console.log(mouse.x);
//     requestAnimationFrame(animate);
//     if (onscreen) {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       // console.log(particlesArray.lenght);
//       for (let i = 0; i < number; i++) {
//         // console.log("joooo");

//         particlesArray[i].update();
//       }
//     }
//   }

//   init();
//   animate();
// }
