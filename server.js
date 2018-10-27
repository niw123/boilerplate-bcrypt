'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const bcrypt      = require('bcrypt')
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const app         = express();

fccTesting(app); //For FCC testing purposes

const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';


//START_ASYNC -do not remove notes, place code between correct pair of notes.
bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
  if (err) {
    console.log(`Error computing the hash: ${err}`)
  }
  bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
    if (err) {
      console.log(`Error comparing the hash: ${err}`)
    }
    console.log(res);
  })
})


//END_ASYNC

//START_SYNC
const hash = bcrypt.hashSync(myPlaintextPassword, saltRounds)
const res = bcrypt.compareSync(myPlaintextPassword, hash)
console.log(res)



//END_SYNC


app.listen(process.env.PORT || 3000, () => {});
