import fs from 'fs'

let timeout = 60000
let poin = 500

let handler = async (m, { conn, usedPrefix }) => {
    conn.tekateki = conn.tekateki ? conn.tekateki : {}
    let id = m.chat
    if (id in conn.tekateki) {
        conn.reply(m.chat, 'لا تزال هناك ألغاز لم تتم الإجابة عليها في هذه الدردشة ', conn.tekateki[id][0])
        throw false
    }
    let tekateki = JSON.parse(fs.readFileSync(`./src/game/anime.json`))
    let json = tekateki[Math.floor(Math.random() * tekateki.length)]
    let _clue = json.جواب
    let clue = _clue.replace(/[A-Za-z]/g, '_')
    let caption = `
ⷮ *${json.سوال}*

*• الوقت:* ${(timeout / 1000).toFixed(2)} ثانيه
*• بونو:* +${poin} Exp
`.trim()
    conn.tekateki[id] = [
       await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(async () => {
            if (conn.tekateki[id]) await conn.reply(m.chat, `انتهى الوقت !\n*جواب:* ${json.جواب}`, conn.tekateki[id][0])
            delete conn.tekateki[id]
        }, timeout)
    ]
    // Send the picture
    await conn.sendFile(m.chat, json.صورة)
}

handler.help = ['acertijo']
handler.tags = ['game']
handler.command = /^(acertijo|مانجا|pregunta|مسابقة|tekateki)$/i

export default handler



/*

import fs from 'fs';

const timeout = 60000;
const points = 500;

const handler = async (message, { conn, usedPrefix }) => {
  conn.tekateki = conn.tekateki || {};
  const chatId = message.chat;
  
  if (chatId in conn.tekateki) {
    conn.reply(chatId, "There is already an unsolved puzzle in this chat", conn.tekateki[chatId][0]);
    throw false;
  }
  
  const tekateki = JSON.parse(fs.readFileSync(`./src/game/anime.json`));
  const puzzle = tekateki[Math.floor(Math.random() * tekateki.length)];
  const answer = puzzle.جواب;
  const maskedAnswer = answer.replace(/[A-Za-z]/g, "_");
  const caption = `
ⷮ *${puzzle.سوال}*

*• Time:* ${(timeout / 1000).toFixed(2)} seconds
*• Points:* +${points} Exp
`.trim();
  
  conn.tekateki[chatId] = [
    await conn.reply(chatId, caption, message),
    puzzle,
    points,
    setTimeout(async () => {
      if (conn.tekateki[chatId]) {
        await conn.reply(chatId, `Time's up!\n*Answer:* ${answer}`, conn.tekateki[chatId][0]);
      }
      delete conn.tekateki[chatId];
    }, timeout)
  ];
  
  // Send the picture
  await conn.sendFile(chatId, puzzle.صورة);
};

handler.help = ["acertijo"];
handler.tags = ["game"];
handler.command = /^(acertijo|مانجا|pregunta|مسابقة|tekateki)$/i;

export default handler;
*/

