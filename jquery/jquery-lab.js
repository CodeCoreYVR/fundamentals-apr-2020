// jQuery Lab: http://bit.ly/jquery-lab

$("*"); // Selects all elements
$("ul a"); // descendant selector
$("h1, h2"); // slect all <h1> and <h2> tags
$(".shape"); // select all elements that has a class shape
$(".shape.black"); // selects all elements that has a class shape and black
$("h1"); // selects all <h1> tags
$(".small.circle"); // select all elements that has class small and circle
$("li > a").eq(3); // get the 4th element of the jQuery collection that we got from li > a

// Select all shapes
$(".shape");
// Select all black shapes
$(".shape.black");
// count the number of shapes
$(".shape").length;
// count the number of black shapes
$(".shape.black").length;
// count the number of black shapes AND blue shapes
$(".shape.black, .shape.blue").length;
// select all h1 tags
$("h1");
// select all small circles
$(".small.circle");

$(".small.circle")[0]; // give us the node
$(".small.circle").eq(0); // wraps the node in a set that has access to jQuery methods

// When getting an attribute, only the first element's attribute is returned
$("a").attr("href");

// To set an attribute
$("a").eq(0).attr("href", "http://nyan.cat"); // we are saying get all anchor tags and
// select the first and set its 'href' attribute to 'http://nyan.cat'

// Get the 'href' attribute of the first link on the page
$("a").eq(0).attr("href");

// set the 'href' attribute of all links on the page to
// 'http://www.codecore.ca'. Try clicking one
$("a").attr("href", "http://www.codecore.ca");

// Set the 'class' attribute of all links to 'highlight'
$("a").attr("class", "highlight");

// Set the 'class' attribute of all shapes to 'highlight'
// what happened?
$(".shape").attr("class", "highlight");

// Add or remove a class
$(".shape").addClass("highlight");
$(".shape").removeClass("highlight");
$(".shape").toggleClass("highlight");

// Remove all blue shapes
$(".blue.shape").remove(); // remove from the DOM
$(".blue.shape").hide(); // change display property to none

// Remove all shapes in the orange container
$("#orange-container .shape").remove();

// Remove all small red circles
$(".small.circle.red").remove();

// Get the contents of the reset button
$("#reset").html();

// Try to get the HTML content of all the links
// Only the first content is returned
$("a").html();

// One way to get the links
const links = $("a");
const arr = [];
for (let i = 0; i < links.length; i++) {
  arr.push(links.eq(i).html());
}

// Change the content of the reset button to "Launch Missiles"
$("#reset").html("Launch Missiles");

// Change all h1 tags to "[Your name] is cool!"
$("h1").html(`${prompt("What is your name?")} is cool!`);

// Select all shapes in the purple conatiner using .chilren()
$("#purple-container").children();

// Get the green container using .parent()
$(".grey.large.diamond").eq(1).parent();
$(".medium.red.diamond").parent();

// Select all <li> that contain a link
// .parent() gets all parents wrapped in a set
$("li > a").parent();

// Hide the purple container
$("#purple-container").hide();
// Show the purple container
$("#purple-container").show();

// Events

// Log "shape clicked" when a shape is clicked
$(".shape").on("click", function (e) {
  console.log("shape clicked");
});

document.querySelectorAll(".shape").forEach((node) => {
  node.addEventListener("click", function (e) {
    console.log("shape clicked");
  });
});

// Log 'blue circle go away' when a mouse enters a blue circle
$(".shape.blue").on("mouseenter", function (e) {
  console.log("blue circle go away!");
});

document.querySelectorAll(".shape.blue").forEach(function (node) {
  node.addEventListener("mouseenter", function (e) {
    console.log("blue circle go away!");
  });
});
// Log 'blue circle goodbye!' when a mouse enters a blue circle
$(".shape.blue").on("mouseleave", function (e) {
  console.log("blue circle goodbye!");
});

document.querySelectorAll(".shape.blue").forEach(function (node) {
  node.addEventListener("mouseleave", function (e) {
    console.log("blue circle goodbye!");
  });
});

// When mouseenters any <tr>, set the class to 'highlight'
$("tr").on("mouseenter", function (e) {
  $(this).attr("class", "highlight");
  // $(e.currentTarget).attr('class', 'highlight')
});

const tr = document.getElementsByTagName("tr");
for (let i = 0; i < tr.length; i++) {
  tr[i].addEventListener("mouseenter", function (e) {
    tr[i].classList.add("highlight");
  });
}

// When mouseleaves any <tr>, remove the class of 'highlight'
$("tr").on("mouseleave", function (e) {
  $(this).attr("class", "");
  // $(e.currentTarget).attr('class', 'highlight')
});

const tr = document.getElementsByTagName("tr");
for (let i = 0; i < tr.length; i++) {
  tr[i].addEventListener("mouseleave", function (e) {
    tr[i].classList.remove("highlight");
  });
}

// When any shape is clicked, log the value of its class
$(".shape").on("click", function (e) {
  console.log($(this).attr("class"));
});

// Hide the shape when it's clicked
$(".shape").on("click", function (e) {
  $(this).hide();
});

// Hide the container of the shape that was clicked
$(".shape").on("click", function (e) {
  $(this).parent().hide();
});

// When a container is clicked, remove all shapes inside of it
$(".container").on("click", function (e) {
  $(this).children().remove();
});

// Event Bubbling
// event.currentTarget or 'this' refers to the element that the event was attached to
// event.target is the original element that fired the event

$(".container").on("click", function (e) {
  console.log("currentTarget:", e.currentTarget);
  console.log("target:", e.target);
});

$(".large.blue.square").on("click", function (e) {
  console.log("currentTarget:", e.currentTarget);
  console.log("target:", e.target);
});

// Enable event capturing:
document.querySelectorAll(".container").forEach((node) => {
  node.addEventListener(
    "click",
    function (e) {
      console.log("currentTarget:", e.currentTarget);
      console.log("target:", e.target);
    },
    true
  );
});

document.querySelectorAll(".square.blue.large").forEach((node) => {
  node.addEventListener(
    "click",
    function (e) {
      console.log("currentTarget:", e.currentTarget);
      console.log("target:", e.target);
    },
    true
  );
});
