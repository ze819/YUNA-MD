
let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = true
m.reply(`${eg} تم حظر هذه الدردشة 👻\nلن أكون متاحا حتى يتم إلغاء حظره `)
}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = /^banchat$/i
handler.botAdmin = true
handler.admin = true 
export default handler
