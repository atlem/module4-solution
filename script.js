(function () {
  // List of names to greet
  var names = [
    "Yaakov", "John", "Jen", "Jason", 
    "Paul", "Frank", "Larry", "Paula", 
    "Laura", "Jim"
  ];

  // Loop over each name and determine the greeting
  for (var i = 0; i < names.length; i++) {
    // Retrieve the first letter and convert to lowercase
    var firstLetter = names[i].charAt(0).toLowerCase();

    // If the name starts with 'j', say "Good Bye", otherwise "Hello"
    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }
})();
