
State.variables.time = 0;
State.variables.timer = {
    isSet : false,
    resetTo : 60,
    countdownTime : 60,
    ticktime : function(){
        if(this.isSet){
        this.countdownTime -= 1;
        }
    },
    reset : function(){
        this.countdownTime = this.resetTo;
    }
};