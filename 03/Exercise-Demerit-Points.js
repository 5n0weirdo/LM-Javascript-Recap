// Speed limit = 70 
// speed <= 70 - OK
// for every 5kms above 70  - 1 point
// else OK
// more than 12 points - License suspended

function checkSpeed(speed) {
	const speedLimit = 70;
	const kmPerPoint = 5;
	
	if (speed <= speedLimit + kmPerPoint) {
		console.log("OK");
		return;
	}
	const points = Math.floor((speed - speedLimit)/kmPerPoint);
	if(points >= 12 ) 
		console.log("License suspended");
	else
		console.log("Points:", points);
}

checkSpeed(120);

