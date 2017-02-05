// This is where you will actually run the socket beacon


// socket service
// import * as landing from './services/landing';


// import hooks from 'feathers-hooks';
// import feathers from 'feathers/client';
// import socketio from 'feathers-socketio/client';
// import io from 'socket.io-client';

// if(!global._babelPolyfill) { require('babel-polyfill'); }
import 'socket.io-client';
import feathers from 'feathers/client';

const socket = io('http://localhost/');
const app = feathers()
  .configure(feathers.socketio(socket));

const messages = app.service('messages');

messages.on('created', message => console.log('Created a message', message));

// Use the messages service from the server
messages.create({
  text: 'Message from client'
});