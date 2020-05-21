// This with arrow functions
$(() => {
  $(".container").on("click", (e) => {
    console.log(this); // window
  });
  console.log(this); // window
  console.log(document);
});

// This with regular functions
$(function () {
  $(".container").on("click", function (e) {
    console.log(this); // div.container element
  });
  console.log(this); // document
  console.log(document);
});
