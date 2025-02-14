// Wrap the entire contents inside an IIFE
(function (window) {
  var byeSpeaker = {};
  var speakWord = "Good Bye";

  byeSpeaker.speak = function(name) {
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

  // Expose byeSpeaker to the global object
  window.byeSpeaker = byeSpeaker;

})(window);
