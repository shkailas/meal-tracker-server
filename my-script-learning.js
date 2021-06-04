// old style of importing code
// const greet = require('./greet-learning').greet;

//with babel we can use the following
import { greet } from './greet-learning';

greet();

// to run this code, we CAN'T USE node abc.js
// we must use npx babel-node abc.js

//NOTE: package.json was updated so that "npm run start" will run the correct above command