$(document).ready(function() {

  // Write header and footer
  $(document).find("#navbar").load("navbar.html", function() {
    console.log("Navbar loaded");
  });

  $("#footer").load("footer.html", function() {
    console.log("Footer loaded");
  })

  // Write the teams to the page ---------------------------------------------
  function teamWriter(fileName) {

    $.getJSON(fileName, function(data) {

      var template = $("#all-teams").html();
      var html = Mustache.to_html(template, data);
      $("#teams").html(html);

    });

  }

  teamWriter("JSON/teams.json");

  // Calculate the totals -----------------------------------------------------
  $(document).on("change", "input[type='number']", function() {
    var currentInnovation = parseInt($(this).parents().eq(2).find(".input-innovation").val());
    var currentImpact = parseInt($(this).parents().eq(2).find(".input-impact").val());
    var currentTechnicalMerit = parseInt($(this).parents().eq(2).find(".input-technical-merit").val());
    var currentUsability = parseInt($(this).parents().eq(2).find(".input-usability").val());
    //var currentPresentation = parseInt($(this).parents().eq(2).find(".input-presentation").val());
    // Calculate total
    var currentTotal = ((currentInnovation) + (currentImpact) + (currentTechnicalMerit) + (currentUsability));
    // Set total to integer, non-decimal
    currentTotal = currentTotal.toFixed(0);
    // Write the total to the current field
    $(this).parents().eq(2).find(".total-score").text(currentTotal);
    // Write the total to data-ranking attribute
    console.log(currentTotal);
    $(this).parents().eq(4).attr("data-ranking", currentTotal);

  });



  // Populate the description modals ------------------------------------------
  $(document).on("click", ".category-description", function() {
    var clickedOnDescription = $(this).data("description");

    switch (clickedOnDescription) {
      case "presentation":

        // Open the modal
        //$("#description-modal").modal("show");
        //$("#description-title").text("Presentation");
        //$("#description-text").text("game description");

        "Sunday";
        break;
      case "technical merit":

        // Open the modal
        $("#description-modal").modal("show");
        $("#description-title").text("Guess the language");
        //$("#description-text").text("game description");


        "Monday";
        break;
      case "usability":

        // Open the modal
        $("#description-modal").modal("show");
        $("#description-title").text("Guess the movie");
        //$("#description-text").text("game description");


        "Tuesday";
        break;
      case "impact":

        // Open the modal
        $("#description-modal").modal("show");
        $("#description-title").text("Guess the logo");
        //$("#description-text").text("game description");


        "Wednesday";
        break;
      case "innovation":

        // Open the modal
        $("#description-modal").modal("show");
        $("#description-title").text("Debugging");
        //$("#description-text").text("game description");


        "Thursday";
        break;
    }

  });

  // Instructions section ----------------------------------------------------

  // instructions button
  $("#instructions-button").on("click", function() {
    $("#instructions").stop().slideToggle();
  });

  // $("#instructions-button").hover(function() {
  //   $("#instructions-button-text").stop().fadeToggle();
  // });


  // Sort based on ranking ----------------------------------------------------
  function rankByScore() {

    $("#teams li").sort(sort_ranking).appendTo('#teams');

    function sort_ranking(a, b) {
      return ($(b).data('ranking')) > ($(a).data('ranking')) ? 1 : -1;
    }

  }

  $(document).on("click", "#rank-by-score", rankByScore);

  // Sort based on original order -------------------------------------------
  function sortByOrder() {

    $("#teams li").sort(sort_order).appendTo('#teams');

    function sort_order(a, b) {
      return ($(b).data('order')) < ($(a).data('order')) ? 1 : -1;
    }

  }

  $(document).on("click", "#sort-by-order", sortByOrder);


  // Create an array --------------------------------------------------------
  //   var teamsArray = [];
  //
  //   $.getJSON("JSON/teams.json", function(data) {
  // console.log(data.teams.length);
  //     for (let i = 0; i < data.teams.length; i++) {
  //       teamsArray[i] = [];
  //       for (let j = 0; j < 3; j++) {
  //
  //         teamsArray[i][j] = data.teams[1].number;
  //         teamsArray[i][j] = data.teams[2].name;
  //         teamsArray[i][j] = data.teams[3].project;
  //
  //       }
  //     }
  //
  //     console.log(teamsArray);
  //   });



});
