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
