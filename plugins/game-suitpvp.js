let timeout = 60000
let poin = 500
let poin_lose = -100
let poin_bot = 200
let handler = async (m, { conn, usedPrefix, text }) => {
conn.suit = conn.suit ? conn.suit : {}
if (Object.values(conn.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.sender))) throw '*[❗]  قم بإنهاء لعبتك قبل بدء لعبة أخرى *'
let textquien = `*من تريد تحديه؟\n الإشارة إلى شخص*\n\n*—◉ مثال:*\n *${usedPrefix}pvp @منشن شخص* `
if (!m.mentionedJid[0]) return m.reply(textquien, m.chat, { mentions: conn.parseMention(textquien)})
if (Object.values(conn.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.mentionedJid[0]))) throw `*[❗] الشخص الذي تريد تحديه لا يزال يلعب لعبة أخرى ، انتظر حتى ينتهي اللعب `
let id = 'suit_' + new Date() * 1
let caption = `🎮 لاعب ضد لاعب 🎮\n\n—◉ @${m.sender.split`@`[0]} إنه يتحدى @${m.mentionedJid[0].split`@`[0]} في لعبه حجر ورق مقص `.trim()
let footer = `◉ كتب  "اقبل" للبد\n◉ اكتب "رفض" للرفض `
let imgplaygame = `https://www.merca2.es/wp-content/uploads/2020/05/Piedra-papel-o-tijera-0003318_1584-825x259.jpeg`
conn.suit[id] = {
chat: await conn.sendButton(m.chat, caption, footer, imgplaygame, [[`اقبل`], [`رفض`]], null, {mentions: conn.parseMention(caption)}),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (conn.suit[id]) conn.reply(m.chat, `[ ⏳ ] انتهت المهلة، تم إلغاؤها بسبب عدم الاستجابة `, m)
delete conn.suit[id]
}, timeout), poin, poin_lose, poin_bot, timeout
}}
handler.help = ['ppt']
handler.tags = ['games']
handler.command = /^(ppt|pvp)$/i
handler.group = true
handler.game = true
export default handler