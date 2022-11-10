setup.identities = {};
setup.routes = {};
setup.actionOrders = {};
setup.characters = {};

setup.identities.guard = new Identity("the night patrol guard", "an armed guard", "someone");
setup.identities.governor = new Identity("the governor", "a man in fancily ordained business atire", "someone");

setup.identities.guard.raiseToDefinite = "You recognize this as the nightly patrol guard. He patrols this route every 10 minutes. Like you - he's very punctual.";
setup.identities.guard.raiseToIndefinite = "You think this is likely a patrolling guard.";
setup.routes.nightGuardPatrol = {    
    2: "Far Market Street",
    4: "Market Street",
    5: "Main St and Market St",
    9: "Main Street",
    11: "Mayors Office Exterior Front",
    12: "Mayors Office Exterior Courtyard",
    13: "Mayors Office Exterior Back",
    14: "Mayors Office Exterior Courtyard",
    15: "Main Street",
    17: "Main St and First",
    20: "First Steet",
    22: "Gone"
};

setup.routes.governorRoute = {    
    1: "Mayors Office Interior Entryway",
    4: "Mayors Office Exterior Front",
    6: "Main Street",
    8: "Main St and Market St",
    22: "Gone"
};

setup.actions = {
    patrol : new Action("patrolling", "making regular metal clanging sounds", "clanging metal"),
    greetingGovernor : new Action("bidding the governor a good evening. The governor doesn't reply", "bidding the governor a good evening. The governor doesn't reply", "says something to the governor."),
};

setup.actionOrders.nightGuardActions = {
    1: setup.actions.patrol,
    8: setup.actions.greetingGovernor,
    9: setup.actions.patrol,
};


setup.characters.guard = new Character(setup.identities.guard, setup.routes.nightGuardPatrol, setup.actionOrders.nightGuardActions);
setup.characters.governor = new Character(setup.identities.governor, setup.routes.governorRoute, {});

State.variables.guard = setup.characters.guard
State.variables.mayor = setup.characters.governor