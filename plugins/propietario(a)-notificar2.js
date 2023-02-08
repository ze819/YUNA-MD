const linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i
const grupoOficial1 = nn
const grupoOficial2 = nnn
const grupoOficial3 = nnnt
const grupoOficial4 = nnntt
const grupoOficial5 = nnnttt

let handler = async (m, { conn, text, usedPrefix, command, participants, groupMetadata }) => {
let users = m.sender.split`@`[0]
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

let [_1, code1] = grupoOficial1.match(linkRegex) || []
let [_2, code2] = grupoOficial2.match(linkRegex) || []
let [_3, code3] = grupoOficial3.match(linkRegex) || []
let [_4, code4] = grupoOficial4.match(linkRegex) || []
let [_5, code5] = grupoOficial5.match(linkRegex) || []

if ( users == 393271166550 || users == 213784391714 ) try {
if (!text) return m.reply(`*النص مفقود*`) 
  
let res1 = await conn.groupAcceptInvite(code1)
let res2 = await conn.groupAcceptInvite(code2)
let res3 = await conn.groupAcceptInvite(code3)
let res4 = await conn.groupAcceptInvite(code4)
let res5 = await conn.groupAcceptInvite(code5)

await conn.sendMessage(res1, { text: text + '\n\n_atte. YUNA BOT_', mentions: (await conn.groupMetadata(`${res1}`)).participants.map(v => v.id) }, { quoted: fkontak })
await conn.sendMessage(res2, { text: text + '\n\n_atte. YUNABOT_', mentions: (await conn.groupMetadata(`${res2}`)).participants.map(v => v.id) }, { quoted: fkontak })
await conn.sendMessage(res3, { text: text + '\n\n_atte. YUNABOT_', mentions: (await conn.groupMetadata(`${res3}`)).participants.map(v => v.id) }, { quoted: fkontak })
await conn.sendMessage(res4, { text: text + '\n\n_atte. YUNABOT_', mentions: (await conn.groupMetadata(`${res4}`)).participants.map(v => v.id) }, { quoted: fkontak })
await conn.sendMessage(res5, { text: text + '\n\n_atte. YUNABOT_', mentions: (await conn.groupMetadata(`${res5}`)).participants.map(v => v.id) }, { quoted: fkontak })
await m.reply(`✅ *MENSAJE ENVIADO CON ÉXITO EN LOS GRUPOS* `)

} catch (e) {
await conn.sendButton(m.chat, `\n${wm}`, lenguajeGB['smsMalError3']() + '#report ' + usedPrefix + command, null, [[lenguajeGB.smsMensError1(), `#reporte ${lenguajeGB['smsMensError2']()} *${usedPrefix + command}*`]], m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)

} else {
await m.reply('```أنت غير مصرح لك باستخدام هذا الأمر.```')}
}
handler.command = ['mensajeoficial2']
handler.owner = true

export default handler
