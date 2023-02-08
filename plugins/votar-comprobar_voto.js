let handler = async (m, { conn, groupMetadata, usedPrefix }) => {
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

let id = m.chat
conn.vote = conn.vote ? conn.vote : {}
        
if (!(id in conn.vote)) {
return await conn.sendButton(m.chat, `${fg} لم يتم إنشاء تصويت في هذه المجموعة`, `*إذا كنت تريد إنشاء تصويت جديد ، فاستخدم الأمر  ${usedPrefix}crearvoto*\n\n*إذا كنت تريد إجراء تصويت جديد ، فاستخدم الأمر ${usedPrefix}startvoto*\n${wm}`, null, [
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']], fkontak, m)}

let [reason, upvote, devote] = conn.vote[id]
let caption = `*${htjava}  قائمة التصويت ${htjava}*

${dmenub} *منشء التصويط* : @${conn.getName(m.sender)}
${dmenub} *سبب ➫*  : \n ${reason}
${dmenub2} ━━━━━━ • 웃 • ━━━━━━
${dmenub} *${htjava}  المؤيديني${htjava}*
${dmenut} ${upvote.length}
${upvote.map((v, i) => `${dmenub} ${i + 1}.  @${v.split`@`[0]}`).join('\n')}
${dmenuf}

${dmenub} *${htjava} المعارضين ${htjava}*
${dmenut} ${devote.length} 
${devote.map((v, i) => `${dmenub} ${i + 1}.  @${v.split`@`[0]}`).join('\n')}
${dmenuf}`.trim()

await conn.sendButton(m.chat, caption, wm, null, [
['✅  | التصويت ', `${usedPrefix}upvote`],
['❌  | معارض', `${usedPrefix}devote`],
['🧾  | إنهاء التصويت', `${usedPrefix}delvoto`]], m, { mentions: conn.parseMention(caption) })}

handler.help = ['cekvote']
handler.tags = ['vote']
handler.command = /^cekvote|vervotos|vervoto|vervotaciones|votaciones|votacion|vervotacion$/i
handler.group = true
handler.botAdmin = true

export default handler
