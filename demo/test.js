// test.js

// subscription test
var Event = require('./subscription');

Event.listen('qq', function(name) {
    console.log('upup') + name;
});


Event.trigger('qq', '666');