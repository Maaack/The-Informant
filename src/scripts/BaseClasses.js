const Familiarity = {
    Unknown: 'Unknown',
    Indefinite: 'Indefinite',
    Definite: 'Definite'
}
  
class Identity {
    constructor(definite, indefinite, unknown) {
      this.definite = definite;
      this.indefinite = indefinite;
      this.unknown = unknown;
      this.state = Familiarity.Unknown;
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
}

class Action {
    constructor(visibleText, audibleText, audibleFarText) {
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
      this.location = ""
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
      };
    }
    updateAction(time){
      if(typeof this.actions[time] !== 'undefined'){
          this.action = this.actions[time];
      };
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
    seen(){
      if (typeof this.action === null){
        return "";
      }
      return describeAction(this.action.getVisibleText());
    }
    heard(){
      if (typeof this.action === null){
        return "";
      }
      return describeAction(this.action.getAudibleText());
    }  
};
