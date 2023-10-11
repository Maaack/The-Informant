/*
Custom module for Twine 2 using the SugarCube story format.
Given an input like <<detect "see" "Location 1" "Location 2" "Location 3">>,
this module will check each location for the presence of a character from
the array returned by getCharacters().
*/

(function () {
    "use strict";
  
    // Define the <<detect "see">> macro
    Macro.add("see", {
      handler() {
        // Get the list of locations to check
        const locations = this.args;
  
        // Get the array of characters
        const characters = getCharacters();
  
        // Initialize the output string
        let output = "";
  
        // Check each location for the presence of a character
        locations.forEach((location) => {
          // Check if any characters are present at the location
          const charactersAtLocation = characters.filter((char) => char.location === location);
  
          // Add a message to the output string indicating the characters present at the location
          if (charactersAtLocation.length > 0) {
            const characterNames = charactersAtLocation.map((char) => char.getName());
            output += `You see ${formatList(characterNames)} at ${location}.`;
          }
        });
  
        // Return the output string
        return new Wikifier(this.output, output);
      },
    });
})();