// Wrap the entire contents inside an IIFE
(function (window) {
  var helloSpeaker = {};
  var speakWord = "Hello";

  helloSpeaker.speak = function(name) {
    var message = speakWord + " " + name;
    // Log to console
    console.log(message);
    // Append to HTML output
    var outputDiv = document.getElementById("output");
    if (outputDiv) {
      var p = document.createElement("p");
      p.textContent = message;
      outputDiv.appendChild(p);
    }
  };

  // Expose helloSpeaker to the global object
  window.helloSpeaker = helloSpeaker;

})(window);
