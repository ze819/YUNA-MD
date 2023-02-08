import { areJidsSameUser } from '@adiwajshing/baileys'
let toM = a => '@' + a.split('@')[0]
let handler = async (m, { conn, usedPrefix, command, text, participants, groupMetadata}) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let name = await conn.getName(m.sender)
if(!text) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
    
if (command == 'futurarelacion') {    
let caption = `💗 الزوجين في المستقبل 💗\n${toM(a)} 💞 ${toM(b)}\n\n💌 رساله حب\n*_${await ktnmbk.getRandom()}_*`
await conn.sendButton(m.chat, caption, `*_إذا كنت ترغب في الحصول على شريك ، فاستخدم الأمر ${usedPrefix}زواج  الذي يشير إلى شريكك المستقبلي._*\n\n` + wm, null, [
['🤭 صرح', `amor`],
['🧐 زوجان آخران', `${usedPrefix}futurarelacion`],
['😆 إنه زوجان عشوائيان', `😂`]], m, { mentions: conn.parseMention(caption) })
}}
	
if(isNaN(text)) {
var number = text.split`@`[1]
} else if(!isNaN(text)) {
var number = text
}

if(!text && !m.quoted) return await conn.sendButton(m.chat, `${mg}وضع علامة على رسالة الشخص الذي تريد أن يكون شريكك أو الرد عليها `, wm, null, [
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m)
	
try {
if(text) {
var user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
var user = conn.getName(m.quoted.sender)
} else if(m.mentionedJid) {
var user = number + '@s.whatsapp.net'
}  
} catch (e) {
} finally {
let users = m.isGroup ? participants.find(v => areJidsSameUser(v.jid == user)) : {}
	
if(!users) return await conn.sendButton(m.chat, `${fg}لم يتم العثور على الشخص ، يجب أن يكون في هذه المجموعة  `, wm, null, [
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m)
	
if(user === m.sender) return await conn.sendButton(m.chat, `${fg}\n\nأنت نفسك لا يمكن أن تكون شريكا `, wm, null, [
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m)
	
if(user === conn.user.jid) return await conn.sendButton(m.chat, `${fg}\nمعي لا يمكنك أن تكون زوجين `, wm, null, [
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m)

if (typeof global.db.data.users[user] == "undefined") return await conn.sendButton(m.chat, `${fg}الشخص الذي أضع علامة عليه غير موجود في قاعدة البيانات الخاصة بي `, wm, null, [
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m)
	
let pacar = global.db.data.users[user].pasangan
let spac = global.db.data.users[m.sender].pasangan
let yo = conn.getName(m.sender)
let tu = conn.getName(who)

if(global.db.data.users[m.sender].pasangan != "" && global.db.data.users[global.db.data.users[m.sender].pasangan].pasangan == m.sender && global.db.data.users[m.sender].pasangan != user){
await conn.sendButton(m.chat, `🤬😡 أنت غير مخلص أنت بالفعل على علاقة مع  *${await conn.getName(spac)}*\n\nهل تريد إنهاء العلاقة؟ 🤔\nإذا كان الأمر كذلك، فاكتب *${usedPrefix}خلع*  @منشن  *حتى تتمكن من الزواج من* ${await conn.getName(user)}`, wm, null, [
['❤️ الحفاظ على العلاقة', '.mipareja'],
['💔 الطلاق ', '/terminar']], m, { contextInfo: { mentionedJid: [m.sender, who, user, global.db.data.users[m.sender].pasangan]}})
}else if(global.db.data.users[user].pasangan != ""){
	
if (pacar){
if (m.sender == pacar && global.db.data.users[m.sender].pasangan == user) return conn.reply(m.chat, `انت لديك زوجه بلفعل : ${spac.split('@')[0]}`, m , { contextInfo: { mentionedJid: [spac]}})
conn.reply(m.chat, `لا يمكنك ذلك بسبب *${await conn.getName(user)}* انه ${await conn.getName(pacar)} متزوج \n ابحث عن شخص آخر يريد أن يكون شريكك `, m , { contextInfo: { mentionedJid: [m.sender, global.db.data.users[m.sender].pasangan]}})
}else{
	
global.db.data.users[m.sender].pasangan = user
conn.reply(m.chat, `${await ktnmbk.getRandom()}\n\nلقد دعوت للتو @${user.split('@')[0]}\n\n¡يرجى انتظار الرد! `, m , { contextInfo: { mentionedJid: [user]}})
}	
	
}else if (global.db.data.users[user].pasangan == m.sender){
global.db.data.users[m.sender].pasangan = user
conn.reply(m.chat, `تهانينا ، لقد خرجوا رسميا @${user.split('@')[0]}\n\nأتمنى أن تستمر إلى الأبد وتكون سعيدة دائما 🥳🥳🥳`, m , { contextInfo: { mentionedJid: [user]}})
}else {
	
global.db.data.users[m.sender].pasangan = user
await conn.sendButton(m.chat, `*_${await ktnmbk.getRandom()}_*\n\n*ان السيد ${await conn.getName(m.sender)}.يطلب يد السيدة*  *${await conn.getName(who)}* `, `❤️ *_إذا كنتي تقبلين اكتبي :_*\n*➠ ${usedPrefix}اقبل @${conn.getName(m.sender)}*\n\n💔 *_إذا كنت لا تريد اكتب:_*\n*➠ ${usedPrefix}ارفض @${conn.getName(m.sender)}*\n\n` + wm, null, [
[' ملصق حب💗 ', `Amor`]], m, { contextInfo: { mentionedJid: [ who, m.sender, user ]}})
}}}

handler.command = /^(futurarelacion|pareja|زواج|serpareja|sersupareja|couple|elegirpareja)$/i
handler.group = true

export default handler

let ktnmbk = [
"هناك أوقات لا أحب فيها أن أكون وحدي. لكنني لا أريد أن يرافقني الجميع أيضا ، أنا فقط أحبك.",
"¡لقد أدركت للتو أنك كنت غنيا طوال هذا الوقت! مثل ما كنت أبحث عنه طوال هذا الوقت. هل تريد أن تكون رفيقه دربي",
"أشكر عيني ، لأن هذه العيون قادتني إلى العثور عليك",
"مهلا، ماذا تفعل؟ اخرج من المنزل وانظر إلى القمر الليلة. الضوء جميل وساحر ، لكنه سيكون أكثر جمالا إذا كنت بجانبك. ماذا لو كنا معا?"
]
