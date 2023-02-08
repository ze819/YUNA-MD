import TicTacToe from '../lib/tictactoe.js' 
let handler = async (m, { conn, usedPrefix, command, text }) => {
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}

conn.game = conn.game ? conn.game : {}
if (Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw `${lenguajeGB['smsAvisoAG']()} \nشخص ما لا يزال يلعب في الغرفة\إذا كنت تريد المغادرة ، فاكتب  *out*\nيمكنك أيضا حذف الغرفة باستخدام الأمر *${usedPrefix}delttt*`
if (!text) throw `${lenguajeGB['smsAvisoFG']()} يجب عليك إضافة اسم إلى الغرفة\nمثل\n*${usedPrefix + command} yuna*`
let room = Object.values(conn.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true)) 
if (room) {
await conn.sendButton(m.chat, `${lenguajeGB['smsAvisoEG']()} انضم شخص ما إلى الغرفة *${text}*\nيمكنك اللعب الآن!! 👀`, wm, null, [['بتوفيق 🤝', '👻'] ], fkontak, m)

await conn.sendButton(m.chat, `${lenguajeGB['smsAvisoRG']()}⭕️ *لعبة كلاسيكية من يونا* ❌\n\n*كيف ألعب*\n_أجب عليك اللعبة برقم ، يجب أن تحتوي الرسالة على الموضع الذي تريد أن تكون فيه (1,2,3,4,5,6,7,8,9)_`, wm, null, [['شكرا', 'ok'] ], fkontak, m)

room.o = m.chat
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '❎',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]})
let str = `💖 بتوفيق في العب |
 *:* اللاعبون
*┈┈┈┈┈┈┈┈┈*
❎ = @${room.game.playerX.split('@')[0]}
⭕ = @${room.game.playerO.split('@')[0]}
*┈┈┈┈┈┈┈┈┈*
     ${arr.slice(0, 3).join('')}
     ${arr.slice(3, 6).join('')}
     ${arr.slice(6).join('')}
*┈┈┈┈┈┈┈┈┈*
 *:* انه دور
@${room.game.currentTurn.split('@')[0]}
`.trim()

if (room.x !== room.o) await conn.sendMessage(room.x, { text: str, mentions: this.parseMention(str)}, { quoted: fkontak, m })
await conn.sendMessage(room.o, { text: str, mentions: conn.parseMention(str)}, { quoted: fkontak, m })
        
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: m.chat,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING' }
        
if (text) room.name = text     
let imgplay = `https://img.freepik.com/vector-premium/juego-tres-raya-icono-contorno-lineal-neon_7280-2422.jpg`
conn.sendButton(m.chat, `
إذا كنت تريد مغادرة الغرفة ، فاستخدم الأمر\n *${usedPrefix}delttt*

في انتظار اللاعب الثاني يمكنك الدخول بالزر أدناه أو باستخدام الأمر
*${usedPrefix + command} ${text}*

إذا كنت تريد مغادرة الغرفة ، فاستخدم الأمر *${usedPrefix}delttt*`, wm, imgplay, [['😎 الإنضمام ', `${usedPrefix + command} ${text}`]], fkontak, m, { mentions: conn.parseMention(text) })
conn.game[room.id] = room
}}
handler.command = /^(tictactoe|ttc|ttt|xo)$/i
export default handler
