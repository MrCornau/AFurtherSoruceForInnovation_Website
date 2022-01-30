// const Lines = () => {};

// // calling a function from other.js
// // remember to import it into index.html and in the correct order of what is initiated
// exampleJavaScriptFn();

// // now we call the function defined above
// // it will select the HTML element with id='subtext'
// // then it will color its background blue
// Lines();

// $(document).ready(function () {
//   //your code here

//   // particle.console.log("test");
//   var line = document.getElementById("line");
//   var bezier = document.getElementById("bezier");
//   var bezier2 = document.getElementById("bezier2");
//   var div1 = $("#box1");
//   var div2 = $("#box2");
//   var div0 = $("#box0");
//   var div3 = $("#box3");

//   var x1 = div1.offset().left + div1.width() / 2;
//   var y1 = div1.offset().top + div1.height() / 2;

//   var x2 = div2.offset().left + div2.width() / 2;
//   var y2 = div2.offset().top - div2.height() / 2;

//   var x0 = div0.offset().left + div0.width() / 2;
//   var y0 = div0.offset().top + div0.height() * 2;

//   var x3 = div3.offset().left + div3.width() / 2;
//   var y3 = div3.offset().top - div3.height() / 2;

//   var difference = 80;
//   var curve = 100;

//   // var d2 = `M390,40 C390,180 390,120 390,260 S 140,260 140,455`;

//   var d = `${"M" + x1 + "," + y1} ${"C" + x1 + "," + (y1 + curve)} ${
//     x2 + "," + (y2 - difference - curve)
//   } ${x2 + "," + (y2 - difference)} ${"S" + x2 + "," + (y2 - difference)} ${
//     x2 + "," + y2
//   }`;
//   bezier.setAttribute("d", d);

//   var difference2 = 120;
//   var curve2 = 100;

//   var d2 = `${"M" + x2 + "," + (y2 + div2.height() * 2)} ${
//     "C" + x2 + "," + (y2 + curve2)
//   } ${x2 + "," + (y3 - difference2 - curve2)} ${
//     x2 + "," + (y3 - difference2)
//   } ${"S" + x3 + "," + (y3 - difference2)} ${x3 + "," + y3}`;
//   bezier2.setAttribute("d", d2);

//   var points = line.getAttribute("points");
//   points = `${x0 + "," + y0}  ${x3 + "," + y3}`;
//   line.setAttribute("points", points);

//   // particle();
// });
