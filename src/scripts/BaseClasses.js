const Familiarity = {
  Unknown: 'Unknown',
  Indefinite: 'Indefinite',
  Definite: 'Definite'
}

class Identity {
  constructor(definite, indefinite = "someone", unknown = "someone") {
    this.definite = definite;
    this.indefinite = indefinite;
    this.unknown = unknown;
    this.state = Familiarity.Unknown;
    this.raiseToIndefinite = "";
    this.raiseToDefinite = "";
  }

  getName(){
    switch(this.state){
      case Familiarity.Unknown:
        return this.unknown;
        break;
      case Familiarity.Indefinite:
        return this.indefinite;
        break;
      case Familiarity.Definite:
        return this.definite;
        break;
    }
  }

  getFamiliarityOrder(state){
    switch(state){
      case Familiarity.Unknown:
        return 0;
        break;
      case Familiarity.Indefinite:
        return 1;
        break;
      case Familiarity.Definite:
        return 2;
        break;
    }
  }

  isHigherFamiliarity(state){
    var currentOrder = this.getFamiliarityOrder(this.state)
    return currentOrder < this.getFamiliarityOrder(state)
  }

  printFamiliarityChange(newState){
    switch(newState){
      case Familiarity.Definite:
        return this.raiseToDefinite;
        break;
      case Familiarity.Indefinite:
        return this.raiseToIndefinite;
        break;
    }
    return "";
  }

  raiseFamiliarity(newState){
    if (newState in Familiarity && this.isHigherFamiliarity(newState)){
      this.state = newState;
      return this.printFamiliarityChange(newState)
    }
    return "";
  }
}

class Action {
  constructor(visibleText, audibleText = "", audibleFarText = "") {
    this.visibleText = visibleText;
    this.audibleText = audibleText;
    this.audibleFarText = audibleFarText;
    this.wasSeen = false;
    this.wasHeard = false;
  }
  getVisibleText(){
    this.wasSeen = true;
    return this.visibleText;
  }
  getAudibleText(){
    if (this.wasSeen){
      return "";
    }
    this.wasHeard = true;
    return this.audibleText;
  }
  getAudibleFarText(){
    if (this.wasSeen || this.wasHeard){
      return "";
    }
    this.wasHeard = true;
    return this.audibleFarText;
  }
}
  
class Character {
  constructor(identity, route, actions) {
    this.identity = identity;
    this.route = route;
    this.actions = actions;
    this.location = "";
    this.action = null;
    this.seen = false;
    this.heard = false;
  }
  isLocated(...args){
    return args.includes(this.location);
  }
  updateLocation(time){
    if(typeof this.route[time] !== 'undefined'){
        this.location = this.route[time];
    }
  }
  updateAction(time){
    if(typeof this.actions[time] !== 'undefined'){
        this.action = this.actions[time];
    }
  }
  getName(){
    return this.identity.getName();
  }
  describeAction(text){
    if (text == ""){
      return "";
    }
    return this.getName() + " is " + text;    
  }
  seenString(){
    if (this.action === null){
      return "";
    }
    this.identity.raiseFamiliarity(Familiarity.Indefinite);
    return this.describeAction(this.action.getVisibleText());
  }
  seenIdentity(){
    return this.identity.raiseFamiliarity(Familiarity.Definite);
  }
  heardString(){
    if (this.action === null){
      return "";
    }
    return this.describeAction(this.action.getAudibleText());
  }
  heardIdentity(){
    return this.identity.raiseFamiliarity(Familiarity.Indefinite);
  }
};

class PathData {
  constructor(destination = "", description = "") {
    this.destination = destination;
    this.description = description;
  }
}

class LocationData {
  constructor(name = "", visible = [], audible = [], audibleFar = []) {
    this.name = name;
    this.visible = visible;
    this.audible = audible;
    this.audibleFar = audibleFar;
  }
}