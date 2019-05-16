$(document).on("click", ".eat-btn", function() {
    let id = $(this).attr("id");
    let send = {
        devoured: true,
    }
    console.log("eat");

    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: send,
    }).then(function(res) {
        location.reload();
    });
});

$(document).on("click", ".delete-btn", function() {
    let id = $(this).attr("id");

    $.ajax("/api/burgers/" + id, {
        type: "DELETE",
    }).then(function(res) {
        location.reload();
    });
});

$(document).on("click", "#add-btn", function(e) {
    e.preventDefault();

    let newBurger = {
        name: $("#burger").val().trim(),
    }

    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger,
    }).then(function(res) {
        location.reload();
    })
})