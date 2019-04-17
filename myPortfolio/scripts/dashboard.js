// ToDo List //

$(document).ready(function() {
  $("button").click(function() {
    $("#todo").append(
      "<ul>" +
        $("input[name=task]").val() +
        " <a href='#' class='close' aria-hidden='true'>&times;</a></ul>"
    );
  });
  $("body").on("click", "#todo a", function() {
    $(this)
      .closest("ul")
      .remove();
  });
});

// Geolocation //

var map, infoWindow;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 32.776665, lng: -96.796989 },
    zoom: 6
  });
  infoWindow = new google.maps.InfoWindow();

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        infoWindow.setPosition(pos);
        infoWindow.setContent("Location found.");
        infoWindow.open(map);
        map.setCenter(pos);
      },
      function() {
        handleLocationError(true, infoWindow, map.getCenter());
      }
    );
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}

// Calculator //

// Determines button clicked via id
function myFunction(id) {
  document.calc.result.value += id;
}

// Clears calculator input screen
function clearScreen() {
  document.calc.result.value = "";
}

// Calculates input values
function calculate() {
  try {
    var input = eval(document.calc.result.value);
    document.calc.result.value = input;
  } catch (err) {
    document.calc.result.value = "Error";
  }
}

// tic tac //
var players = {
  player1: [],
  player2: []
};
var winners = [
  [".row11", ".row12", ".row13"],
  [".row21", ".row22", ".row23"],
  [".row31", ".row32", ".row33"],
  [".row11", ".row21", ".row31"],
  [".row12", ".row22", ".row32"],
  [".row13", ".row23", ".row33"],
  [".row11", ".row22", ".row33"],
  [".row13", ".row23", ".row31"]
];
var winner = false;

function clicked(whichSquare) {
  if (!winner) {
    if (validatePlay(whichSquare)) {
      if (players.player1.length === players.player2.length) {
        players.player1.push(whichSquare);
        $(whichSquare).text("X");
      } else if (players.player1.length > players.player2.length) {
        players.player2.push(whichSquare);
        $(whichSquare).text("O");
      }

      haveWinner();

      if (players.player1.length === 5 && !winner) {
        alert("Game is a Tie!");
        winner = true;
      }
    }
  }
}

function validatePlay(whichSquare) {
  if (players.player1.indexOf(whichSquare) !== -1) {
    return false;
  }
  if (players.player2.indexOf(whichSquare) !== -1) {
    return false;
  }
  return true;
}

function haveWinner() {
  if (players.player1.length < 3) {
    winner = false;
  }

  winners.forEach(function(item, index, arr) {
    var p1 = _.filter(item, function(val) {
      return players.player1.indexOf(val) !== -1;
    });
    var p2 = _.filter(item, function(val) {
      return players.player2.indexOf(val) !== -1;
    });

    if (_.isEqual(p1, item)) {
      winner = true;
      $("#gameResults").text("Player 1 Wins!");
      $("#gameModal").modal("toggle");
    }

    if (_.isEqual(p2, item)) {
      winner = true;
      $("#gameResults").text("Player 2 Wins!");
      $("#gameModal").modal("toggle");
    }
  });
}

function clearBoard() {
  $("span").text("");
  winner = false;
  players.player1 = [];
  players.player2 = [];
}
