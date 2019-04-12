// ToDo List //

$(document).ready(function() {
	$('button').click(function() {
		$('#todo').append(
			'<ul>' + $('input[name=task]').val() + " <a href='#' class='close' aria-hidden='true'>&times;</a></ul>"
		);
	});
	$('body').on('click', '#todo a', function() {
		$(this).closest('ul').remove();
	});
});

// Geolocation //

var map, infoWindow;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
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
				infoWindow.setContent('Location found.');
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
			? 'Error: The Geolocation service failed.'
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
	document.calc.result.value = '';
}

// Calculates input values
function calculate() {
	try {
		var input = eval(document.calc.result.value);
		document.calc.result.value = input;
	} catch (err) {
		document.calc.result.value = 'Error';
	}
}

// tic tac //
$(document).ready(function() {
	let player1 = 'X';
	let player2 = 'O';

	let currentTurn = 1;
	let movesMade = 0;

	let sqr = $('.square');

	sqr.on('click', function(c) {
		movesMade++;

		if (currentTurn === 1) {
			event.target.innerHTML = player1;
			event.target.style.color = 'red';
			currentTurn++;
		} else {
			event.target.innerHTML = player2;
			event.target.style.color = 'blue';
			currentTurn--;
		}
	});
});
