(function (window) { 
var johngreeter={};
johngreeter.Name="john";
var greeting="Hello";
johngreeter.sayhello=function(){
	console.log (greeting + johngreeter.Name);
}
    window.johngreeter = johngreeter;
 })(window);

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

var name= "Yaakov";
function hellospeaker () {
	console.log ("speak" + name)
}

var speakWord = "Hello";

(function (window) {
	var speak = {} ;
	speak.name = "Yaakov";
	var hellospeaker = function (){
		console.log (hellospeaker.speak);
	}
	
		window.speak = speak;
}); (window);

(function (window) {
	var helloSpeaker={};
	hellospeaker.speak="speak";
	var speak = "hello"
	hellospeaker.speakhello= function () {
		console.log(speak + hellospeaker.speak);
	}

	window.hellospeaker = hellospeaker;
});(window)
