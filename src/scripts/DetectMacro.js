/*
Custom module for Twine 2 using the SugarCube story format.
Given an input like <<detect "see" "Location 1" "Location 2" "Location 3">>,
this module will check each location for the presence of a character or object
from the array returned by getCharacters() or getObjects(), depending on the
sense specified as the first argument.
*/

(function () {
  "use strict";

  // Define the <<detect>> macro
  Macro.add("detect", {
    handler() {
      // Get the sense and the list of locations to check
      const sense = this.args.shift();
      const locations = this.args;

      // Get the array of characters or objects, depending on the sense
      let items;
      if (sense === "see" || sense === "hear") {
        items = getCharacters();
      } else if (sense === "smell") {
        items = getObjects();
      } else {
        return new Wikifier(this.output, `Invalid sense: ${sense}`);
      }

      // Initialize the output string
      let output = "";

      // Check each location for the presence of a character or object
      locations.forEach((location) => {
        // Check if any characters or objects are present at the location
        const itemsAtLocation = items.filter((item) => item.location === location);

        // Add a message to the output string indicating the characters or objects present at the location
        if (itemsAtLocation.length > 0) {
          const itemNames = itemsAtLocation.map((item) => item.getName());
          output += `You ${sense} ${formatList(itemNames)} at ${location}.`;
        }
      });

      // Return the output string
      return new Wikifier(this.output, output);
    },
  });
})();