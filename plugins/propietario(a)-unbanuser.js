let handler = async (m, { conn, text, command, usedPrefix }) => {
if (!text) throw `${mg} وضع علامة على شخص ما لإلغاء حظره\nمثل\n*${usedPrefix + command} @tag*`
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw `${mg} وضع علامة على شخص ما لإلغاء حظره\nمثل\n*${usedPrefix + command} @tag*`
let users = global.db.data.users
users[who].banned = false
conn.reply(m.chat, `${eg} \nتم إلغاء حظر المستخدم 🤠`, m)
}
handler.help = ['unbanuser']
handler.tags = ['owner']
handler.command = /^unbanuser$/i
handler.group = true
handler.admin = true 
export default handler
