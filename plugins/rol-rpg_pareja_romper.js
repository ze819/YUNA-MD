let handler = async (m, { conn }) => { 
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let romper = global.db.data.users[m.sender].pasangan
var ayg = global.db.data.users[m.sender]
var beb = global.db.data.users[global.db.data.users[m.sender].pasangan]

if(ayg.pasangan == ""){
return await conn.sendButton(m.chat, `أنت  *${name}* ليس لديك زوج(ة) \n`, wm, null, [
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m)
}
      
if (typeof beb == "undefined"){
await conn.sendButton(m.chat, `*${name}* 💔 انفصلت نهائيا مع  *${await conn.getName(romper)}*\n\nانتهت هذه العلاقة `, `*✩ Wa.me/${global.db.data.users[m.sender].pasangan.split('@')[0]}*\n` + wm, null, [ //`✩ Wa.me/${global.db.data.users[m.sender].pasangan.split('@')[0]}\n\n`
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m, { contextInfo: { mentionedJid: [ m.sender, romper ]
}})                                                 
ayg.pasangan = ""
}

if (m.sender == beb.pasangan){
await conn.sendButton(m.chat, `*${name}* 💔 انفصل نهائيا مع  *${await conn.getName(romper)}*\n\nانتهت هذه العلاقة `, `*✩ Wa.me/${global.db.data.users[m.sender].pasangan.split('@')[0]}*\n` + wm, null, [
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m, { contextInfo: { mentionedJid: [ m.sender, romper ]
}})
ayg.pasangan = ""
beb.pasangan = ""
}else {
await conn.sendButton(m.chat, `أنت  *${name}* لا تملك زوج(ة)\nليس لديك شريك `, wm, null, [
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m)
}}

handler.command = /^(خلع|طلاق|انفصال|أرفض)$/i
handler.group = true

export default handler
