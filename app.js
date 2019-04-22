
$(document).ready(function () {

    $("button").on("click", function () {
        var animal = $(this).attr("data-animal");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            animal + "&api_key=jp7wkybn5JPyxWjc1bG6M8x2YFrpKhBV&limit=10";


        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {




        });
    });
});