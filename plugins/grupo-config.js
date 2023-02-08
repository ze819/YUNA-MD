let handler = async (m, { conn, args, usedPrefix, command }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/grupos.jpg'  
let isClose = { // Switch Case Like :v
'open': 'not_announcement',
'close': 'announcement',
'abierto': 'not_announcement',
'cerrado': 'announcement',
'فتح': 'not_announcement',
'اغلاق': 'announcement',
}[(args[0] || '')]
if (isClose === undefined)
throw `
${lenguajeGB['smsAvisoMG']()}*╭━[ ${wm} ]━⬣*
*┃➥ ${usedPrefix + command} فتح*
*┃➥ ${usedPrefix + command} اغلاق*
*╰━━━━━[ 𓃠 ${vs} ]━━━━━⬣*
`.trim()
await conn.groupSettingUpdate(m.chat, isClose)
  
if (isClose === 'not_announcement'){
conn.sendButton(m.chat, `${lenguajeGB['smsAvisoEG']()}يمكنك كتابة كل شيء في هذه المجموعة !!`, `قروب مفتوح \n${wm}`, pp, [[' | حسابات ✅', `.cuentasgb`], [' | قائمة الاوامر☘️', `/menu`]], m)
}
  
if (isClose === 'announcement'){
//m.reply(`${eg}*𝙂𝙍𝙐𝙋𝙊 𝘾𝙀𝙍𝙍𝘼𝘿𝙊*\n𝙎𝙊𝙇𝙊 𝙇𝙊𝙎 𝘼𝘿𝙈𝙄𝙉𝙎 𝙋𝙐𝙀𝘿𝙀𝙉 𝙀𝙎𝘾𝙍𝙄𝘽𝙄𝙍 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊`)
conn.sendButton(m.chat, `${lenguajeGB['smsAvisoEG']()}يمكن للمسؤولين فقط الكتابة في هذه المجموعة!!`, `قروب مسكر\n${wm}`, pp, [['لحظة المشرف 😎', '.s'], [' | قائمة الأوامر☘️', `/menu`]], m)
}  
 }
handler.help = ['group open / close', 'grupo فتح / اغلاق']
handler.tags = ['group']
handler.command = /^(group|قروب)$/i
handler.admin = true
handler.botAdmin = true
handler.exp = 200
export default handler
