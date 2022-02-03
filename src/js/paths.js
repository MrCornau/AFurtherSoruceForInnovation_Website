$(document).ready(function () {
  draw();
});

let draw = () => {
  console.log("resize!");
  let timelineSquare1 = $("#timeline-square1");
  let timelineSquare2 = $("#timeline-square2");
  let timelineSquare3 = $("#timeline-square3");

  let XtimelineSquare1 = timelineSquare1.offset().left + 14.142;
  let YtimelineSquare1 = timelineSquare1.offset().top + 32;

  let XtimelineSquare2 = timelineSquare2.offset().left + 14.142;
  let YtimelineSquare2 = timelineSquare2.offset().top - 7;

  let XtimelineSquare2_1 = timelineSquare2.offset().left + 14.142;
  let YtimelineSquare2_1 = timelineSquare2.offset().top + 32;

  let XtimelineSquare3 = timelineSquare3.offset().left + 14.142;
  let YtimelineSquare3 = timelineSquare3.offset().top - 7;

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
};

let redraw = () => {
  let timelineSquare1 = $("#timeline-square1");
  let timelineSquare2 = $("#timeline-square2");
  let timelineSquare3 = $("#timeline-square3");

  let XtimelineSquare1 = timelineSquare1.offset().left + 14.142;
  let YtimelineSquare1 = timelineSquare1.offset().top + 32;

  let XtimelineSquare2 = timelineSquare2.offset().left + 14.142;
  let YtimelineSquare2 = timelineSquare2.offset().top - 7;

  let XtimelineSquare2_1 = timelineSquare2.offset().left + 14.142;
  let YtimelineSquare2_1 = timelineSquare2.offset().top + 32;

  let XtimelineSquare3 = timelineSquare3.offset().left + 14.142;
  let YtimelineSquare3 = timelineSquare3.offset().top - 7;

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
};

const resizeObserver = new ResizeObserver((entries) => {
  console.log("Body height changed:", entries[0].target.clientHeight);
  redraw();
});

// start observing a DOM node
resizeObserver.observe(document.body);
