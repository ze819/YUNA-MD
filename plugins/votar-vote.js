let handler = async (m, { conn, groupMetadata, usedPrefix, command }) => {
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
return await conn.sendButton(m.chat, `${fg}\nلم يتم إنشاء تصويت في هذه المجموعة`, `\n*إذا كنت تريد إجراء تصويت جديد ، فاستخدم الأمر ${usedPrefix}startvoto*\n${wm}`, null, [
['قائمة ☘️', '/menu']], fkontak, m)}
  
let isVote = conn.vote[id][1].concat(conn.vote[id][2])
const wasVote = isVote.includes(m.sender)

if (wasVote) { 
return await conn.sendButton(m.chat, `${eg}\n🎊 لقد قمت بالتصويت بالفعل!!`, `*\n*لم يتم تغيير تصويتك مرتين*\n\n${wm}`, null, [
['📋 | انظر الأصوات', '/vervotos'],
['🔰  | دعوه الأعضاء', `${usedPrefix}pedirayuda ✴️ @${conn.getName(m.sender)} *يدعوكم للانضمام إلى التصويت !!*\n*استخدم الأمر ${usedPrefix}vervotos للتصويت! !*\n`]
], fkontak, m)}
  
if (/up|si/i.test(command)) {
conn.vote[id][1].push(m.sender)
  
} else if (/de|no/i.test(command)) {
conn.vote[id][2].push(m.sender)}
    
let [reason, upvote, devote] = conn.vote[id]
let caption = `*${htjava} : قائمة التصويت ${htjava}*

${dmenub} *منشأ التصويت*  @${conn.getName(m.sender)}
${dmenub} *سبب أنشأ* ${reason}
${dmenub2} ━━━━━━ • 웃 • ━━━━━━
${dmenub} *${htjava}  مؤيدين ${htjava}*

${dmenut} ${upvote.length}
${upvote.map((v, i) => `${dmenub} ${i + 1}.  @${v.split`@`[0]}`).join('\n')}
${dmenuf}
${dmenub2} ━━━━━━ • 웃 • ━━━━━━
${dmenub} *${htjava}  المعارضين ${htjava}*
${dmenub2} ━━━━━━ • 웃 • ━━━━━━
${dmenut} ${devote.length}
${devote.map((v, i) => `${dmenub} ${i + 1}.  @${v.split`@`[0]}`).join('\n')}
${dmenuf}`.trim()

await conn.sendButton(m.chat, caption, wm, null, [
['✅  | التصويت ', `${usedPrefix}upvote`],
['❌  | اعارض ', `${usedPrefix}devote`]], m, { mentions: conn.parseMention(caption) })}

handler.help = ['upvote', 'devote']
handler.tags = ['vote']
handler.command = /^(up|si|de|no)vote|voto|votar$/i  
handler.group = true
handler.botAdmin = true

export default handler
