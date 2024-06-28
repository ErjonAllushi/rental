$(document).ready(function () {
  $("#d3").click(function () {
    $("#c3").slideToggle("slow");
  });
  $("#d2").click(function () {
    $("#c2").slideToggle("slow");
  });
  $("#d1").click(function () {
    $("#c1").slideToggle("slow");
  });
});

let imazhet = [
  "6.jpeg.jpeg",
  "7.jpeg.jpeg",
  "8.jpeg.jpeg",
  "1.jpeg.jpeg",
  "2.jpeg.jpeg",
  "3.jpeg.jpeg",
  "4.jpeg.jpeg",
  "5.jpeg.jpeg",
];
let num = 0;
function prev() {
  let demo = document.getElementById("demo");
  num++;
  if (num >= imazhet.length) {
    num = 0;
  }
  demo.src = imazhet[num];
}
function next() {
  let demo = document.getElementById("demo");
  num--;
  if (num < 0) {
    num = imazhet.length - 1;
  }
  demo.src = imazhet[num];
}
