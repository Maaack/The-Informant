function formatList(items) {
    // Filter out empty strings
    items = items.filter((item) => item.trim() !== "");
  
    // Concatenate the strings with "and" or commas depending on the length
    if (items.length === 0) {
      return "";
    } else if (items.length === 1) {
      return items[0];
    } else if (items.length === 2) {
      return `${items[0]} and ${items[1]}`;
    } else {
      const lastItem = items.pop();
      return `${items.join(", ")}, and ${lastItem}`;
    }
  }


function getCharacters(){
    return [
        State.variables.governor,
        State.variables.guard,
    ]
}

function getObjects(){
    return []
}