(function (window) {

  var helloSpeaker = {};

  helloSpeaker.speak = function (name) {
    return "Hello " + name;
  };

  window.helloSpeaker = helloSpeaker;

})(window);
