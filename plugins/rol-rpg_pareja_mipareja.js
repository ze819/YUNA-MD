let handler = async (m, { conn, usedPrefix }) => { // @${global.db.data.users[m.sender].pasangan.split('@')[0]}
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let usuario = conn.getName(who)
let persona = global.db.data.users[m.sender].pasangan

if (global.db.data.users[m.sender].pasangan == "") return await conn.sendButton(m.chat, `*${usuario}* ليس لديك شريك\n`, `*_إذا كنت تريد أن يكون لديك شريك استخدم الأمر  ${usedPrefix}pareja الإشارة إلى شخص ما._*\n\n` + wm, null, [
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m)
  
if (global.db.data.users[global.db.data.users[m.sender].pasangan].pasangan == m.sender) return await conn.sendButton(m.chat, `*${usuario}* 💗 أنت على علاقة مع  :  *${await conn.getName(persona)}* 💖`, wm, null, [
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m, {contextInfo: { mentionedJid: [ m.sender, who ] }})

conn.sendButton(m.chat, `🤨 تقريبا *${await conn.getName(persona)}* لم يقبل أو يرفض اقتراحك  في زواج `, `*_بالنظر إلى الوضع ، سيتم إلغاء هذا الطلب_*\n\n` + wm, null, [
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m, {contextInfo: { mentionedJid: [ persona, m.sender ] }})
global.db.data.users[m.sender].pasangan = ""
}
handler.command = /^(sinceridad|mipareja|زوجتي|minovio|minovia|mylove)$/i
handler.group = true
export default handler
