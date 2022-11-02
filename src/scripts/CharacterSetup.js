setup.identities = {};
setup.routes = {};
setup.actionOrders = {};
setup.characters = {};

setup.identities.guard = new Identity("the night patrol guard", "an armed guard", "someone");
setup.identities.governor = new Identity("the governor", "a man in fancily ordained business atire", "someone");

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

setup.actions = {
    patrol : new Action("patrolling", "clanging metal and regular, heavy footsteps", "clanging metal"),
    greetingGovernor : new Action("bidding the governor a good evening. The governor doesn't reply", "bidding the governor a good evening. The governor doesn't reply", "says something to the governor."),
};

setup.actionOrders.nightGuardActions = {
    1: setup.actions.patrol,
    7: setup.actions.greetingGovernor
};


setup.characters.guard = new Character(setup.identities.guard, setup.routes.nightGuardPatrol, setup.actionOrders.nightGuardActions);

