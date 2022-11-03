try {
    macros['ticktime'] = {
        handler: function(place, macroName, params, parser) {
            State.variables.time += 1;
            State.variables.timer.ticktime();
            var moveFunction = this.movePerson;
            var characters = [setup.characters.guard];
            characters.forEach(function callback(person){
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
            let visiblePeople = [];
            let visibleStrings = [];
            let finalString = "";
            var characters = [setup.characters.guard];
            characters.forEach(function callback2(person) {
                if (location == person.location){
                    visiblePeople.push(person);
                }
            });
            visiblePeople.forEach(function callback3(visiblePerson){
                visibleStrings.push(visiblePerson.getSeenActionDescription());
            });
            finalString = concatCommasAnd(visibleStrings);
            if(finalString == ""){
                return;
            }
            new Wikifier(place, "You see " + finalString + " in " + location + ".<br>");
            // visiblePeople.forEach(function callback3(visiblePerson){
            //     let firstSeenText = visiblePerson.firstSeen();
            //     if(firstSeenText != ""){
            //         new Wikifier(place, firstSeenText + "<br>");
            //     }
            // });
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
            let audiblePeople = [];
            let audibleStrings = [];
            let finalString = "";
            var characters = [setup.characters.guard];
            characters.forEach(function callback2(person) {
                if (location == person.location){
                    audiblePeople.push(person);
                }
            });
            audiblePeople.forEach(function callback3(audiblePerson){
                audibleStrings.push(audiblePerson.getHeardActionDescription());
            });
            finalString = concatCommasAnd(audibleStrings);
            if(finalString == ""){
               return;
            }
            new Wikifier(place, "You hear " + finalString + " in " + location + ".<br>");
        });
        }
    };
} catch(e) {
    throwError(place,"hear setup error: "+e.message); 
};
    
try {
    macros['opponentchecks'] = {
        handler: function(place, macroName, params, parser) {
        }
    };
} catch(e) {
    throwError(place,"opponentchecks setup error: "+e.message); 
};