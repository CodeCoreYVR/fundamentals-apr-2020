$(function () {
  $("#task-form").on("submit", function (event) {
    // This will stop the default
    // behaviour/action of the form when submitted
    event.preventDefault();

    const task = $("input[type=text]").val();
    // below we are saying if there is a task
    // so, if the task is '', it is falsy
    if (task) {
      $("ul.list-group").append(
        `
            <li class="list-group-item d-flex justify-content-between">
                <span>${task}</span>
                <small>
                    <a href="#" class="complete">Mark Complete </a>
                    |
                    <a href="#" class="delete">Delete</a>
                </small>
            </li>
            `
      );
    }
    // Reset the form after adding to the list with either way:
    this.reset();
    // $('input[type=text]').val('')
  });

  // The following will only add event listeners to elements
  // that are already exist in the DOM
  $(".delete").on("click", function (event) {
    $(this).closest("li.list-group-item").remove();
  });

  // The second optional param in .on() is a selector string
  // to filter the descendants of the selected elements that trigger the event
  $(document).on("click", ".delete", function (event) {
    // .closest() will traverse up in the DOM and give us the
    // first ancestor that matches the selector that was passed
    $(this).closest("li.list-group-item").remove();
    // $(this).parent().parent().remove();
  });

  $(document).on("click", ".complete", function (event) {
    const isComplete = $(this).text() === "Mark Incomplete";
    if (isComplete) {
      $(this).parent().siblings().css("text-decoration", "none");
      $(this).text("Mark Complete");
    } else {
      $(this).parent().siblings().css("text-decoration", "line-through");
      $(this).text("Mark Incomplete");
    }
  });
});
