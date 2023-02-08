export async function before(m, { conn, isAdmin, isBotAdmin, isOwner, isROwner }) {
//if ( owner[0][0] == 393271166550) {
if (m.isBaileys && m.fromMe) return !0
if (m.isGroup) return !1
if (!m.message) return !0
if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') 
    ||  m.text.includes('bots') || m.text.includes('serbot') || m.text.includes('jadibot') 
    || m.text.includes('creadora') || m.text.includes('ping') || m.text.includes('bottemporal') || m.text.includes('gruposgb') 
    || m.text.includes('instalarbot') || m.text.includes('términos') || m.text.includes('donar')) return !0
let chat = global.db.data.chats[m.chat]
let bot = global.db.data.settings[this.user.jid] || {}
let user = global.db.data.users[m.sender]

if (user.registered === true) return !0 
if (bot.antiPrivate && !isOwner && !isROwner) {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

let text1 = `✅ *أهلًا وسهلًا @${m.sender.split`@`[0]} : الحساب الرسمي ${gt}*

*انضم إلى المجموعة الرسمية واستخدم الأمر #verify للوصول إلى جميع الأوامر بالإضافة إلى القدرة على استخدام الدردشة الخاصة!!!*`
let text2 = `🐈 *تحديث جروبو* 🐈 
*تعرف على آخر الأخبار!!!*
⁘ _${nna}_

💕 *المجموعات المتاحة* 💕
⁘ _${nn}_

⁘ _${nnn}_

⁘ _${nnnt}_

⁘ _${nnntt}_

⁘ _${nnnttt}_


👇 *الأوامر المتاحة* 👇
#creadora #gruposgb #donar #ping #bottemporal #jadibot #bots #instalarbot #términos`

conn.sendButton(m.chat, text1, text2, null, [[lenguajeGB.smsConMenu(), `#menu`]], fkontak, m)
handler.group = true
return !1
}}

/*
export async function before(m, { conn, isAdmin, isBotAdmin, isOwner, isROwner }) {

if (m.isBaileys && m.fromMe) return !0

if (m.isGroup) return !1

if (!m.message) return !0

if (m.text.includes('حجر') || m.text.includes('ورق') || m.text.includes('مقص') || m.text.includes('يونا') || m.text.includes('مالك') || m.text.includes('jadibot')) return !0

let chat = global.db.data.chats[m.chat]

let bot = global.db.data.settings[this.user.jid] || {}

if (bot.antiPrivate && !isOwner && !isROwner) {

await m.reply(`*[❗] مرحبا @${m.sender.split`@`[0]}*, يحظر التحدث إلى الروبوت الخاص \nفقط إذا كان يريد أن يجعلك روبوتا.\nارسل الأمر :  .serbot\nاذا تم حظرك عن طريق الخطء المرجو التكلم مع المالك: https://wa.me/+393271166550?text=مرحبا\n\n*انضم إلى المجموعة لاستخدام يونا بوت ${nn}*`, false, { mentions: [m.sender] })

handler.group = true

return !1

}}*/