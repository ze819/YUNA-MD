//este antiprivado  todavía está el desarrollo.

export async function before(m, { conn, isAdmin, isBotAdmin, isOwner, isROwner }) {
if (m.isBaileys && m.fromMe) return !0
if (m.isGroup) return !1
if (!m.message) return !0 
if (m.text.includes('يونا') || m.text.includes('PAPEL') || m.text.includes('play') || m.text.includes('bots') || m.text.includes('creadora') || m.text.includes('ig') || m.text.includes('bottemporal') || m.text.includes('تيك') 
    || m.text.includes('مقص') || m.text.includes('حجر') || m.text.includes('deletebot') || m.text.includes('ورق') || m.text.includes('s')) return !0
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[this.user.jid] || {}
if (bot.antipv && !isOwner && !isROwner) {
await m.reply(`مرحبًا @${m.sender.split`@`[0]} لا يمكنك استخدام هذا الروبوت في الدردشة الخاصة ، سيتم حظرك\nمجموعة لاستخدام الروبوت ${nn}`, false, { mentions: [m.sender] })
user.banned = true
return !1
}}