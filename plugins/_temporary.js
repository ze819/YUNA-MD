/*const schedule = require('node-schedule');
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001);

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':');
}

function sendMessage() {
    console.log(`${readMore} Current Time: ${clockString(Date.now())}`);
}

const j = schedule.scheduleJob('0 * * * *', sendMessage);
*/