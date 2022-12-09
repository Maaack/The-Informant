try {
    macros['ticktime'] = {
        handler: function(place, macroName, params, parser) {
            State.variables.time += 1;
            State.variables.timer.ticktime();
            var moveFunction = this.movePerson;
            getCharacters().forEach(function callback(person){
                moveFunction(place, person);
            });
        },
        movePerson : function(place, person){
            person.updateLocation(State.variables.time);
            person.updateAction(State.variables.time);
            //new Wikifier(place, person.name + " is " + person.action + " in " + person.location + "<br>");
        }
    };
} catch(e) {
    throwError(place,"ticktime Setup Error: "+e.message); 
};
    
try {
    macros['see'] = {
        handler: function(place, macroName, params, parser) {
            if(params.length == 0) {
                return;
            }
            params.forEach(function callback1(location) {
                let visibleCharacters = [];
                let visibleStrings = [];
                let finalString = "";
                getCharacters().forEach(function callback2(person) {
                    if (person.isLocated(location)){
                        visibleStrings.push(person.seenString());
                        visibleCharacters.push(person.seenIdentity());
                    }
                });
                finalString = concatCommasAnd(visibleStrings);
                if(finalString == ""){
                    return;
                }
                new Wikifier(place, "You see " + finalString + " in " + location + ".<br>");
                visibleCharacters.forEach(function callback3(visibleCharacter) {
                    if (visibleCharacter != ""){
                        new Wikifier(place, visibleCharacter + "<br>");
                    }
                });
            });
        }
    };
} catch(e) {
    throwError(place,"see setup error: "+e.message); 
};
    
try {
    macros['hear'] = {
        handler: function(place, macroName, params, parser) {
            if(params.length == 0) {
                return;
            }
            params.forEach(function callback1(location) {
                let audibleCharacters = [];
                let audibleStrings = [];
                let finalString = "";
                getCharacters().forEach(function callback2(person) {
                    if (person.isLocated(location)){
                        audibleStrings.push(person.heardString());
                        audibleCharacters.push(person.heardIdentity());
                    }
                });
                finalString = concatCommasAnd(audibleStrings);
                if(finalString == ""){
                return;
                }
                new Wikifier(place, "You hear " + finalString + " in " + location + ".<br>");
                audibleCharacters.forEach(function callback3(audibleCharacter) {
                    if (audibleCharacter != ""){
                        new Wikifier(place, audibleCharacter + "<br>");
                    }
                });
            });
        }
    };
} catch(e) {
    throwError(place,"hear setup error: "+e.message); 
};
    
try {
    macros['detected'] = {
        handler: function(place, macroName, params, parser) {
            if(params.length == 0) {
                return;
            }
            params.forEach(function callback1(location) {
                getCharacters().forEach(function callback2(person) {
                    if (person.isLocated(location)){
                        new Wikifier(place, person.getName().toUpperFirst() + " detects you from " + location + ".<br>");
                    }
                });
            });
        }
    };
} catch(e) {
    throwError(place,"detected setup error: "+e.message); 
};

function getCharacters(){
    return [
        State.variables.governor,
        State.variables.guard,
    ]
}