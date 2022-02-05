$(document).ready(function () {
  draw();
});

let draw = () => {
  console.log("resize!");
  let timelineSquare1 = $("#timeline-square1");
  let timelineSquare2 = $("#timeline-square2");
  let timelineSquare3 = $("#timeline-square3");

  let timelineSquare4 = $("#timeline-square4");

  let timelineSquare5 = $("#timeline-square5");
  let timelineSquare6 = $("#timeline-square6");
  let timelineSquare6 = $("#Stagegate");

  let XtimelineSquare1 = timelineSquare1.offset().left + 14.142;
  let YtimelineSquare1 = timelineSquare1.offset().top + 32;

  let XtimelineSquare2 = timelineSquare2.offset().left + 14.142;
  let YtimelineSquare2 = timelineSquare2.offset().top - 7;

  let XtimelineSquare2_1 = timelineSquare2.offset().left + 14.142;
  let YtimelineSquare2_1 = timelineSquare2.offset().top + 32;

  let XtimelineSquare3 = timelineSquare3.offset().left + 14.142;
  let YtimelineSquare3 = timelineSquare3.offset().top - 7;

  let YtimelineSquare3_1 = timelineSquare3.offset().top + 32;

  let XtimelineSquare4 = timelineSquare4.offset().left + 14.142;
  let YtimelineSquare4 = timelineSquare4.offset().top + -7;
  let YtimelineSquare4_1 = timelineSquare4.offset().top + 32;

  let XtimelineSquare5 = timelineSquare5.offset().left + 14.142;
  let YtimelineSquare5 = timelineSquare5.offset().top + -7;
  let YtimelineSquare5_1 = timelineSquare5.offset().top + 32;

  let YtimelineSquare6 = timelineSquare6.offset().top;

  var d = `${"M" + XtimelineSquare3 + "," + YtimelineSquare3_1} 
  ${"L" + XtimelineSquare3 + "," + (YtimelineSquare4 - 100)} 
  ${
    "C" +
    XtimelineSquare3 +
    "," +
    (YtimelineSquare4 - 80) +
    "," +
    XtimelineSquare3 +
    "," +
    (YtimelineSquare4 - 80) +
    "," +
    (XtimelineSquare3 + 20) +
    "," +
    (YtimelineSquare4 - 80)
  } 
  ${"L" + (XtimelineSquare4 - 20) + "," + (YtimelineSquare4 - 80)} 
  `;

  var d2 = `${"M" + XtimelineSquare4 + "," + YtimelineSquare4_1} 
  ${"L" + XtimelineSquare4 + "," + (YtimelineSquare4_1 + 300)} 
  ${
    "C" +
    XtimelineSquare4 +
    "," +
    (YtimelineSquare4_1 + 320) +
    "," +
    XtimelineSquare4 +
    "," +
    (YtimelineSquare4_1 + 320) +
    "," +
    (XtimelineSquare4 - 20) +
    "," +
    (YtimelineSquare4_1 + 320)
  } 
  ${"L" + (XtimelineSquare5 - 20) + "," + (YtimelineSquare4_1 + 320)} 
  ${
    "C" +
    XtimelineSquare5 +
    "," +
    (YtimelineSquare4_1 + 320) +
    "," +
    XtimelineSquare5 +
    "," +
    (YtimelineSquare4_1 + 320) +
    "," +
    XtimelineSquare5 +
    "," +
    (YtimelineSquare4_1 + 340)
  }
  ${"L" + XtimelineSquare5 + "," + YtimelineSquare5} 
  `;

  document.getElementById("svg").setAttribute("height", $(document).height());
  $(document.createElementNS("http://www.w3.org/2000/svg", "line"))
    .attr({
      id: "line2",
      x1: XtimelineSquare1,
      y1: YtimelineSquare1,
      x2: XtimelineSquare2,
      y2: YtimelineSquare2,
    })
    .appendTo("#svg");
  $(document.createElementNS("http://www.w3.org/2000/svg", "line"))
    .attr({
      id: "line3",
      x1: XtimelineSquare2_1,
      y1: YtimelineSquare2_1,
      x2: XtimelineSquare3,
      y2: YtimelineSquare3,
    })
    .appendTo("#svg");
  $(document.createElementNS("http://www.w3.org/2000/svg", "path"))
    .attr({
      id: "line4",

      d: d,
      stroke: "#404E51",
    })
    .appendTo("#svg");

  $(document.createElementNS("http://www.w3.org/2000/svg", "path"))
    .attr({
      id: "line5",

      d: d2,
      stroke: "#404E51",
    })
    .appendTo("#svg");

  $(document.createElementNS("http://www.w3.org/2000/svg", "line"))
    .attr({
      id: "line6",
      stroke: "#404E51",
      x1: XtimelineSquare3,
      y1: YtimelineSquare3_1,
      x2: XtimelineSquare5,
      y2: YtimelineSquare5,
    })
    .appendTo("#svg");
};

let redraw = () => {
  let timelineSquare1 = $("#timeline-square1");
  let timelineSquare2 = $("#timeline-square2");
  let timelineSquare3 = $("#timeline-square3");

  let timelineSquare4 = $("#timeline-square4");

  let timelineSquare5 = $("#timeline-square5");

  let XtimelineSquare1 = timelineSquare1.offset().left + 14.142;
  let YtimelineSquare1 = timelineSquare1.offset().top + 32;

  let XtimelineSquare2 = timelineSquare2.offset().left + 14.142;
  let YtimelineSquare2 = timelineSquare2.offset().top - 7;

  let XtimelineSquare2_1 = timelineSquare2.offset().left + 14.142;
  let YtimelineSquare2_1 = timelineSquare2.offset().top + 32;

  let XtimelineSquare3 = timelineSquare3.offset().left + 14.142;
  let YtimelineSquare3 = timelineSquare3.offset().top - 7;

  let YtimelineSquare3_1 = timelineSquare3.offset().top + 32;

  let XtimelineSquare4 = timelineSquare4.offset().left + 14.142;
  let YtimelineSquare4 = timelineSquare4.offset().top + -7;
  let YtimelineSquare4_1 = timelineSquare4.offset().top + 32;

  let XtimelineSquare5 = timelineSquare5.offset().left + 14.142;
  let YtimelineSquare5 = timelineSquare5.offset().top + -7;
  let YtimelineSquare5_1 = timelineSquare5.offset().top + 32;

  var d = `${"M" + XtimelineSquare3 + "," + YtimelineSquare3_1} 
  ${"L" + XtimelineSquare3 + "," + (YtimelineSquare4 - 100)} 
  ${
    "C" +
    XtimelineSquare3 +
    "," +
    (YtimelineSquare4 - 80) +
    "," +
    XtimelineSquare3 +
    "," +
    (YtimelineSquare4 - 80) +
    "," +
    (XtimelineSquare3 + 20) +
    "," +
    (YtimelineSquare4 - 80)
  } 
  ${"L" + (XtimelineSquare4 - 20) + "," + (YtimelineSquare4 - 80)} 
  ${
    "C" +
    XtimelineSquare4 +
    "," +
    (YtimelineSquare4 - 80) +
    "," +
    XtimelineSquare4 +
    "," +
    (YtimelineSquare4 - 80) +
    "," +
    XtimelineSquare4 +
    "," +
    (YtimelineSquare4 - 60)
  }
  ${"L" + XtimelineSquare4 + "," + YtimelineSquare4} `;

  var d2 = `${"M" + XtimelineSquare4 + "," + YtimelineSquare4_1} 
  ${"L" + XtimelineSquare4 + "," + (YtimelineSquare4_1 + 300)} 
  ${
    "C" +
    XtimelineSquare4 +
    "," +
    (YtimelineSquare4_1 + 320) +
    "," +
    XtimelineSquare4 +
    "," +
    (YtimelineSquare4_1 + 320) +
    "," +
    (XtimelineSquare4 - 20) +
    "," +
    (YtimelineSquare4_1 + 320)
  } 
  ${"L" + (XtimelineSquare5 + 20) + "," + (YtimelineSquare4_1 + 320)} 
  ${
    "C" +
    XtimelineSquare5 +
    "," +
    (YtimelineSquare4_1 + 320) +
    "," +
    XtimelineSquare5 +
    "," +
    (YtimelineSquare4_1 + 320) +
    "," +
    XtimelineSquare5 +
    "," +
    (YtimelineSquare4_1 + 340)
  }
  ${"L" + XtimelineSquare5 + "," + YtimelineSquare5} 
  `;

  document.getElementById("svg").setAttribute("height", $(document).height());
  document.getElementById("svg").setAttribute("height", $(document).height());
  $("#line2").attr({
    x1: XtimelineSquare1,
    y1: YtimelineSquare1,
    x2: XtimelineSquare2,
    y2: YtimelineSquare2,
  });
  document.getElementById("svg").setAttribute("height", $(document).height());
  $("#line3").attr({
    x1: XtimelineSquare2_1,
    y1: YtimelineSquare2_1,
    x2: XtimelineSquare3,
    y2: YtimelineSquare3,
  });
  $("#line4").attr({
    d: d,
  });
  $("#line5").attr({
    d: d2,
  });
  $("#line6").attr({
    x1: XtimelineSquare3,
    y1: YtimelineSquare3_1,
    x2: XtimelineSquare5,
    y2: YtimelineSquare5,
  });
};

const resizeObserver = new ResizeObserver((entries) => {
  console.log("Body height changed:", entries[0].target.clientHeight);
  redraw();
});

// start observing a DOM node
resizeObserver.observe(document.body);
