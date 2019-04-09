const moment = require('../lib/index.js');

console.log(moment.getTime('xxxx-xx-xx xx:xx:xx'));

console.log(moment.formatTime({
    date: new Date('2018-02-03 10:05:05'),
    format: 'xxxx年xx月xx日 xx:xx:xx'
}));