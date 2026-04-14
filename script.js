(function () {

  var names = [
    "Yaakov", "John", "Jen", "Jason",
    "Paul", "Frank", "Larry", "Paula",
    "Laura", "Jim"
  ];

  var output = document.getElementById("output");

  for (var i = 0; i < names.length; i++) {

    var firstLetter = names[i].charAt(0).toLowerCase();

    var message = "";

    if (firstLetter === 'j') {
      message = byeSpeaker.speak(names[i]);
    } else {
      message = helloSpeaker.speak(names[i]);
    }

    var card = document.createElement("div");
    card.className = "card";
    card.textContent = message;

    output.appendChild(card);
  }

})();
