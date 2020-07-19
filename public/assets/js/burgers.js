// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(() => {
  $(".devour-button").on("click", function () {
    const id = $(this).data("id");

    $.ajax(`/api/burgers/${id}/devour`, {
      type: "PUT",
      contentType: "application/json; charset=UTF-8",
    }).then(() => {
    
      location.reload();
    });
  });

  $(".create-form").on("submit", (event) => {
    event.preventDefault();

    const newBurger = {
      name: $("#burger_name").val().trim(),
    };

    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger,
    }).then(() => {
      location.reload();
    });
  });

  $(".delete-cat").on("click", function () {
    const id = $(this).data("id");

    // Send the DELETE request.
    $.ajax(`/api/cats/${id}`, {
      type: "DELETE",
    }).then(() => {
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
