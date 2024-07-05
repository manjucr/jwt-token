// run `node index.js` in the terminal

var jwt = require('jsonwebtoken');

// const userId = 'a15a9dc2-319a-4b29-afb8-80b00491a3d0';
const secret = 'preprod-yaraconnect-in-otp';
const algorithm = 'HS256';
// const expiresIn = '240d';

const token = jwt.sign(
  {
    recipient: '+911100000011',
    body: 'Your verification code is: 12345',
    sender: '+911100000011',
  },
  secret,
  { expiresIn: '1m', algorithm }
);

console.log('Token', token);
