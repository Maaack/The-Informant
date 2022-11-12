setup.identities = {};
setup.routes = {};
setup.actionOrders = {};
setup.characters = {};

setup.identities.guard = new Identity("the night patrol guard", "an armed guard", "someone");
setup.identities.governor = new Identity("the governor", "a man in fancily ordained business atire", "someone");

setup.identities.guard.raiseToDefinite = "You recognize this as the nightly patrol guard. He patrols this route every 10 minutes. Like you - he's very punctual.";
setup.identities.guard.raiseToIndefinite = "You think this is likely a patrolling guard.";
setup.identities.governor.raiseToDefinite = "To some, he's the pride of the people. To you, the governor is a run-of-the-mill charismatic fascist.";
setup.routes.nightGuardPatrol = {    
    2: "Far Market Street",
    4: "Market Street",
    5: "Main St and Market St",
    9: "Main Street",
    11: "Governors Office Exterior Front",
    12: "Governors Office Exterior Courtyard",
    13: "Governors Office Exterior Back",
    14: "Governors Office Exterior Courtyard",
    15: "Main Street",
    17: "Main St and First",
    20: "First Steet",
    22: "Gone"
};

setup.routes.governorRoute = {    
    1: "Governors Office Interior Entryway",
    4: "Governors Office Exterior Front",
    6: "Main Street",
    8: "Main St and Market St",
    10: "Gone"
};

setup.actions = {
    leavingFrontDoor : new Action("leaving through the front door", "opening a door"),
    lockingFrontDoor : new Action("locking the front door behind him", "handling keys and door lock"),
    walkingTowardMarket : new Action("walking toward Market St."),
    leavingTheArea : new Action("leaving the area for the night"),
    patrol : new Action("patrolling", "making regular metal clanging sounds", "clanging metal"),
    greetingGovernor : new Action("bidding the governor a good evening. The governor doesn't reply", "bidding the governor a good evening. The governor doesn't reply", "says something to the governor."),
    leavingOnPatrol : new Action("leaving the area. He should be back in 10 minutes. I should set my timer"),
    checkingTheDoor : new Action("checking the door to see if it's locked")
};

setup.actionOrders.nightGuardActions = {
    1: setup.actions.patrol,
    8: setup.actions.greetingGovernor,
    9: setup.actions.patrol,
    11: setup.actions.checkingTheDoor,
    12: setup.actions.patrol,
    13: setup.actions.checkingTheDoor,
    14: setup.actions.patrol,
    18: setup.actions.leavingOnPatrol,
};

setup.actionOrders.governorActions = {
    4: setup.actions.leavingFrontDoor,
    5: setup.actions.lockingFrontDoor,
    6: setup.actions.walkingTowardMarket,
    8: setup.actions.leavingTheArea,
};

setup.characters.guard = new Character(setup.identities.guard, setup.routes.nightGuardPatrol, setup.actionOrders.nightGuardActions);
setup.characters.governor = new Character(setup.identities.governor, setup.routes.governorRoute, setup.actionOrders.governorActions);
setup.characterArray = [setup.characters.governor, setup.characters.guard]

State.variables.guard = setup.characters.guard
State.variables.governor = setup.characters.governor