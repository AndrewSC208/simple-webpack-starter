import io from 'socket.io-client';

const socket = io('http://localhost');
let conencted = false; 

// land
	// -> connect 
		// () => checkStamp
			// if stamp, send stamp and any user info that can be gathered

// takeOff
	// -> disconnect () => do something

// connect to the user with a websocket
function land() {
	socket.on('connect', () =>{
		conencted = true;
		console.log('User connected to socket');
	});
}


// discconect user from websocket
function takeOff() {
	sockeet.on('discconnect', () => {
		console.log('User discconnected from the socket')
	})
}

export { land, takeOff }


