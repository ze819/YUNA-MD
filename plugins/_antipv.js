/*export async function before(m, { conn, isAdmin, isBotAdmin, isOwner, isROwner }) {
if (m.isBaileys && m.fromMe) return !0
if (m.isGroup) return !1
if (!m.message) return !0
if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') || m.text.includes('serbot') || m.text.includes('jadibot')) return !0
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[this.user.jid] || {}
if (bot.antipv && !isOwner && !isROwner) {
await m.reply(`*[❗] مرحبا @${m.sender.split`@`[0]}*, هذا ممنوع يتحدث إلى الروبوت الخاص الذي سيتم حظره\nتحدث إلى منشئي إذا كتبت إلى الروبوت عن طريق الخطأ وتريد مني إلغاء قفلك
.\n دعم المستخدم: https://wa.me/+393271166550?text=مرحبا\n\n*انضم إلى المجموعة لاستخدام YunaaBot: https://chat.whatsapp.com/IxeB9yBYrNp85CLmKykmMM*`, false, { mentions: [m.sender] })
user.banned = true
}
if (!chat.banned) return m.reply('*لم يتم نفي هذه الدردشة!!*')
  chat.banned = false
return !1
}}*/  