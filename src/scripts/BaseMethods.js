function concatCommasAnd(stringArray){
    if(stringArray.length == 1){
        return stringArray[0];
    } else if(stringArray.length == 2){
        return stringArray.join(" and ");
    } else if(stringArray.length > 2){
        let lastString = stringArray.pop();
        let firstString = stringArray.join(", ");
        return firstString + ", and " + lastString; 
    } else {
        return ""; 
    }
}
