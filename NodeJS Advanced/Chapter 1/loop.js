// node my File.js

const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

// New timers, tasks, operations are recorded from myFile running 
myFile.runContents();

function shouldContinue() {
	// Check one: Any pending setTimeout, setIntervalm setImmediate?
	// Check one: Any pending OS tasks? (Like server listening to ports)
	// Check one: Any pending long running operations? (Like fs module)
	return pendingTimers || pendingOSTasks || pendingOperations;
}

// Entire body executes in one 'tick'
while(shouldContinue()) {
	// 1) Node looke at pendingTimers and sees if any funcitons are ready to be called. setTimeout, setInterval

	// 2) Node looks at pendingOSTasks and pendingOperations and calls relevant callbacks

	// 3) Pause execution. Continue when...
	// - a new pendingOSTask is done
	// - a new pendingOperation is done
	// - a timer is about to complete
	
	// 4) Look at pendingTimers. Call any setImmediate

	// 5) Handle any 'close' eventsf
}



// exit back to terminal