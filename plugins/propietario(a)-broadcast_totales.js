import fs from 'fs'
let handler = async (m, { conn, text } ) => {
let chatsall = Object.entries(conn.chats).filter(([_, chat]) => chat.isChats).map(v => v[0])
for (let id of chatsall) { 
await delay(5 * 5000)
conn.sendButton(id, `*╭━━[ اعلان ]━━━⬣*\n*┃*\n*┃💌* ${text}\n*┃*\n*╰━━━━━━━━━━━━━━━━━━⬣*`, '✅ *الإعلان الرسمي ل يونا*\n' + wm, fs.readFileSync('./src/avatar_contact.png'), [['اك', '.a'],['❤️', '.❤️']], false, {
contextInfo: { externalAdReply: {
title: 'YUNA BOT |393271166550 ',
body: 'سوبر بوت واتساب', 
sourceUrl: `https://www.instagram.com/a_e_b_2003`, 
thumbnail: fs.readFileSync('./media/menus/Menu3.jpg') }}})}
m.reply(`${iig} ✅ *تم إرسال الرسالة إلى ${chatsall.length} مجموع القطط*\n*ربما لم يتم إرسالها إلى جميع الدردشات الإجمالية. معذرة.*`)
}
handler.help = ['broadcast', 'bc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(comunicar|comunicado|broadcastall|bc)$/i
handler.rowner = true
handler.exp = 500
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))