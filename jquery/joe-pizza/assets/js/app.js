document.addEventListener("DOMContentLoaded", (event) => {
  // h2 holds an HTML Collection
  // it's array like, you can use [] notation and .length
  // but there are no array methods such as forEach
  const h2 = document.getElementsByTagName("h2");

  // use a for loop to add eventlisteners to all the h2
  for (let i = 0; i < h2.length; i++) {
    // The first argument for .addEventListener is a string
    // which is the name of the event. The second argument is
    // a callback function which is called the event handler
    h2[i].addEventListener("click", (event) => {
      console.log("h2 clicked");
    });
  }

  // We can't add an event listener to an HTML collection like below, we'll have to iterate
  // h2.addEventListener()
});
