let handler = async (m, { conn, text, args, participants, usedPrefix, command }) => {	
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let a = []
let b = text.split('|')

if (!b[0]) return conn.reply(m.chat, `${mg} استخدم الأمر على النحو التالي\n*${usedPrefix + command} سبب الاستطلاع|النص1|النص2|النص3....*`, fkontak, m) 
if (!b[1]) return conn.reply(m.chat, `${mg} لإنشاء خيارات في استخدام الاستطلاع *" | "*\n*${usedPrefix + command} Survey Reason|text1|text2|text3....*`, fkontak, m)
if (b[13]) return conn.reply(m.chat, `${fg} الحد الاقصي *12* خيارات!!\n\nاستخدم الأمر على النحو التالي\n*${usedPrefix + command} Survey Reason|text1|text2|text3....*`, fkontak, m)

for (let c = 1; c < b.length; c++) { a.push([b[c]]) }
let texto = `📊 تم إنشاء الاستطلاع بواسطة\n*❤️⇢ ${conn.getName(m.sender)}*\n*${text.split('|')[0]}*`

return conn.sendPoll(m.chat, texto, a, {mentions: m})}
handler.command = ['poll', 'encuesta', 'crearencuesta', 'startpoll', 'encuestas', 'polls'] 
export default handler
