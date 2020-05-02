(function (window) {
  var yaakovgreeter={};
  yaakovgreeter.Name="Yaakov, Paul, Frank, Larry, Paula, Laura";
  var greeting="Hello";
  yaakovgreeter.sayHello=function(){
    console.log (greeting + yaakovgreeter.Name);
  }
  window.yaakovgreeter = yaakovgreeter;
})(window);

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i = 0; i < names.length; i++) {

  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    byespeaker = function (){ 
    byespeaker.speak(names[i]);
  } 
}
    else 
    {
            var hellospeaker = function (){
        hellospeaker.speak(names[i]);
  }
}
}
