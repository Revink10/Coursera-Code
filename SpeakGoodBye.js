
(function (window) {
	var byeSpeaker={};
	byespeaker.speak="speak";
	var speak = "goodbye"
	byespeaker.speakgoodbye= function () {
		console.log(speak + byespeaker.speakgoodbye);
	}

		window.byespeaker = byespeaker;

	});(window)

var speakWord = "Good Bye";

function speak(name) {
  console.log(speakWord + " Good Bye " + name);
}

(function (window) {
	var speak = {} ;
	speak.name = "John";
	var hellospeaker = function (){
		console.log (hellospeaker.speak);
	}

	window.speak = speak;
});(window);

(function (window) {
	var byespeaker={};
	byespeaker.speak="speak";
	var speak = "Good Bye"
	byespeaker.speak= function () {
		console.log(speak + byespeaker.speak);
	}

		window.byespeaker = byespeaker;

	});(window)