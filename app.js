$(document).ready(function() {
  var animals = [
    "cat",
    "dog",
    "eagle",
    "elephant",
    "rabbit",
    "cow",
    "fox",
    "bird"
  ];

  function renderButtons() {
    $("#buttons-view").html(" ");
    for (var i = 0; i < animals.length; i++) {
      var newbutton = $("<button>" + animals[i] + "</button>");
      newbutton.attr("data-animal", animals[i]);
      newbutton.addClass("btn btn-success mx-1 my-1 animal-button");
      $("#buttons-view").append(newbutton);
    }
  }

  $("#add-gif").on("click", function(event) {
    event.preventDefault();
    var userinput = $("#gifinput").val();
    console.log(userinput);
    animals.push(userinput);

    renderButtons();
  });

  renderButtons();

  $(document).on("click", ".animal-button", function() {
    var animal = $(this).attr("data-animal");
    console.log(animal);
    console.log(animals);
    var queryURL =
      "https://api.giphy.com/v1/gifs/search?q=" +
      animal +
      "&api_key=jp7wkybn5JPyxWjc1bG6M8x2YFrpKhBV&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(queryURL);
      console.log(response);
      // storing the data from the AJAX request in the results variable
      var results = response.data;
      // Looping through each result item
      for (var i = 0; i < results.length; i++) {
        var animalDiv = $("<div>");
        animalDiv.addClass("animal-div")
        var p = $("<p>").text("Rating: " + results[i].rating);
        var animalImage = $("<img>");
        animalImage.attr("src", results[i].images.fixed_height.url);
        animalDiv.append(p);
        animalDiv.append(animalImage);
        $("#gifs-appear-here").prepend(animalDiv);
      }
    });
  });
});
