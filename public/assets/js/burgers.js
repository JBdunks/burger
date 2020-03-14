$(function() {
  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    var newDevoured = $(this).data("newDevoured");

    var newDevouredState = {
      devoured: 1
    };

    $.ajax("/api/hamburgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(function() {
      console.log("changed devoured to", newDevoured);

      location.reload();
    });
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burger")
        .val()
        .trim(),
      devoured: 0
    };

    $.ajax("/api/hamburgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
      console.log("cooked new burger");

      location.reload();
    });
  });
});
