let handler = async (m, { conn, text, usedPrefix, isAdmin, isOwner }) => {
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


if (m.isGroup) {
//if (!text) throw await conn.reply(m.chat, `${mg}𝘿𝙀𝘽𝙀 𝘿𝙀 𝙀𝙎𝘾𝙍𝙄𝘽𝙄𝙍 𝙇𝘼 𝙍𝘼𝙕𝙊𝙉 𝘿𝙀 𝙇𝘼 𝙑𝙊𝙏𝘼𝘾𝙄𝙊𝙉\n\n𝙔𝙊𝙐 𝙈𝙐𝙎𝙏 𝙒𝙍𝙄𝙏𝙀 𝙏𝙃𝙀 𝙍𝙀𝘼𝙎𝙊𝙉 𝙁𝙊𝙍 𝙏𝙃𝙀 𝙑𝙊𝙏𝙀`, fkontak,  m)	
if (!(isAdmin || isOwner)) return dfail('admin', m, conn)}
conn.vote = conn.vote ? conn.vote : {}
let id = m.chat

if (id in conn.vote) { 
return await conn.sendButton(m.chat, `📍 لا يزال هناك تصويت معلق في هذه المجموعة !!`, wm, null, [
['🧾  | إنهاء التصويت', `${usedPrefix}delvoto`]], fkontak, m)}
  
await conn.sendButton(m.chat, ` | تصويت جديد ✴️\n\n*منشئ التصويت* : @${conn.getName(m.sender)}\n*سبب انشاء تصويت:* ${text}`, `
*يمكنك استخدام الأوامر أو الأزرار أدناه للقيام بإجراء بشأن التصويت!!*

${htjava} أثناء التصويت ${htjava}
${dmenub} ان كنت توافق اكتب :
${dmenub}  ${usedPrefix}sivotar
${dmenub2} ━━━ • 웃 • ━━━
${dmenub} و ان كنت تعارض اكتب :
${dmenub} ${usedPrefix}novotar
${dmenub2} ━━━ • 웃 • ━━━
${dmenub} إذا كنت تريد مسح تصويط أكتب :
${dmenub}${usedPrefix}delvoto
${dmenub2} ━━━ • 웃 • ━━━
${dmenub} ذا كنت تريد روايه تصويط اكتب :
${dmenub}${usedPrefix}vervotos
${dmenuf}`, null, [
['✅  | التصويت ', `${usedPrefix}upvote`],
['❌  | اعارض', `${usedPrefix}devote`],
['🔰  | دعوة الاعضاء', `${usedPrefix}pedirayuda ✴️ @${conn.getName(m.sender)} *إنهم يدعونك للتصويت!!*\n*استخدم الأمر* \n${usedPrefix}vervotos \n لروايه التصويتات `]
], fkontak, m) 
conn.vote[id] = [
text,
[],
[]
]
}

handler.help = ['mulaivote [alasan]']
handler.tags = ['vote']
handler.command = /^(start|crear|iniciar|empezar|\+)voto|انشاء_تصويت$/i
handler.group = true
handler.botAdmin = true
handler.admin = true
handler.level = 4
handler.limit = 1

export default handler 
