function concatCommasAnd(stringArray){
    var filteredStringArray = [];
    stringArray.forEach(function(stringPart) {
        if (stringPart != ""){
            filteredStringArray.push(stringPart)
        }
    });

    if(filteredStringArray.length == 1){
        return filteredStringArray[0];
    } else if(filteredStringArray.length == 2){
        return filteredStringArray.join(" and ");
    } else if(filteredStringArray.length > 2){
        let lastString = filteredStringArray.pop();
        let firstString = filteredStringArray.join(", ");
        return firstString + ", and " + lastString; 
    } else {
        return ""; 
    }
}
