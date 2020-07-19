
$(() => {
  $(".devour-button").on("click", function () {
    const id = $(this).data("id");

    $.ajax(`/api/burger/${id}/devour`, {
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
});
