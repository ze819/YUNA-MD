import MessageType from '@adiwajshing/baileys'
let handler = async (m, { conn, usedPrefix, command }) => {
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

let room = Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
if (room == undefined) return conn.sendButton(m.chat, `${lenguajeGB['smsAvisoFG']()} أنت لست في أي لعبة أنا لعبة ثلاثة في الشارب `, wm, null, [['💫  | ابدأ اللعبة', `${usedPrefix}ttt sala nueva`]], fkontak, m)
delete conn.game[room.id]

await conn.sendButton(m.chat, `${lenguajeGB['smsAvisoEG']()} تم المسح `, wm, null, [[' قائمة الأوامر ☘️', '/menu'] ], fkontak, m)}  
handler.command = /^(delttt|deltt|مسح|deltictactoe)$/i
handler.fail = null
export default handler
