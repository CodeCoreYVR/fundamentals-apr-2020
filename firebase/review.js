// JavaScript Reviews
// Log out 'Hello' every 1 second and stop after 10 seconds have passed

let count = 1;
const intervalId = setInterval(() => {
  console.log("Hello" + "(" + count + ")");
  if (count++ === 10) {
    clearInterval(intervalId);
  }
}, 1000);

// This will run before setInterval because setInterval is asynchronous
console.log("I am a log that come after interval");

// Change circle colour to value of the input using jQuery
// whenever the form is submitted at: https://s3.amazonaws.com/codecore/jquery-lab/index.html

$("#form-1").on("submit", function (event) {
  $(".circle").css("background-color", $("input[type=text]").val());
});
