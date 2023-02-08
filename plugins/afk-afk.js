let handler = async (m, { text }) => {
let user = global.db.data.users[m.sender]
user.afk = + new Date
user.afkReason = text
m.reply(`${lenguajeGB['smsAfkM1A']()} *${conn.getName(m.sender)}* ${lenguajeGB['smsAfkM1B']()}${text ? ': ' + text : ''}
`)}
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^افك|أفك|afk$/i
export default handler
