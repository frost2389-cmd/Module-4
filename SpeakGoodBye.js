(function (window) {

  var byeSpeaker = {};

  byeSpeaker.speak = function (name) {
    return "Good Bye " + name;
  };

  window.byeSpeaker = byeSpeaker;

})(window);
