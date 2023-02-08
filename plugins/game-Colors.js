/*let handler = async (m, { conn, text, command, usedPrefix, args }) => {
    let pp = 'https://telegra.ph/file/493633ec10b5ecc3150fe.jpg'

    let colors = ['بني', 'احمر', 'اصفر', 'اخضر', 'اسود', 'برتقالي', 'ازرق', 'ابيض']
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    let result = randomColor == 'بني', 'احمر', 'اصفر', 'اخضر', 'اسود', 'برتقالي', 'ازرق', 'ابيض'
    let message = '';
    if (!args[0]) {
        message = `*El resultado es: ${result}*\n\nPuedes elegir la opción con los botones o usa los comandos`
        let buttons = colors.map((color) => {
            return [color, `${usedPrefix + command} ${color}`]
        })
        conn.sendHydrated(m.chat, message,wm, pp, null, null, null, null, buttons, m)
    } else {
        if (colors.includes(text)) {
            if (text == randomColor) {
                global.db.data.users[m.sender].exp += 1000
                message = `ganaste \n\nelegiste: ${text}\nresultado: ${result}\nganaste +1000 XP`
            } else {
                global.db.data.users[m.sender].exp -= 300
                message = `perdiste\n\nelegiste: ${text}\nresultado: ${result}\nperdiste -300 XP`
            }
        } else {
            message = `El color seleccionado no es válido. Por favor, selecciona uno de los siguientes: ${colors.join(', ')}`
        }
        m.reply(message)
    }
}
handler.help = ['suerte']
handler.tags = ['games']
handler.command = /^(suerte)$/i
export default handler
*/


/*

import fs from 'fs';

let timeout = 60000;
let poin = 500;

let handler = async (m, { conn }) => {
conn.yunatap = conn.yunatap ? conn.yunatap : {};
let id = m.chat;
if (id in conn.yunatap) {
conn.reply(m.chat, 'There is still a riddle that has not been answered in this chat', conn.yunatap[id][0]);
throw false;
}
let yunatap = JSON.parse(fs.readFileSync('./src/game/colors.json'));
let randomColor = yunatap[Math.floor(Math.random() * yunatap.length)];
let caption = `
Choose a color and type it in the chat

• Time: ${(timeout / 1000).toFixed(2)} seconds
• Points: +${poin}
`.trim();

conn.yunatap[id] = [
    await conn.reply(m.chat, caption),
    randomColor, poin,
    setTimeout(async () => {
        if (conn.yunatap[id]) {
            await conn.reply(m.chat, `Time's up!\nThe correct color was ${randomColor}`);
        }
        delete conn.yunatap[id];
    }, timeout)
];

conn.on('text', async (m) => {
    if (m.chat in conn.yunatap) {
        let color = m.text.trim().toLowerCase();
        if (color == randomColor) {
            await conn.reply(m.chat, `You guessed it! The color was ${randomColor}\n+${poin} points!`);
        } else {
            await conn.reply(m.chat, `Sorry, the correct color was ${randomColor}\nNo points for you.`);
        }
        delete conn.yunatap[m.chat];
    }
});
}

handler.help = ['color'];
handler.tags = ['game'];
handler.command = /^(color|colour)$/i;

export default handler
*/