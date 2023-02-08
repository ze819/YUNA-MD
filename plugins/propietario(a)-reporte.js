let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `${mg}*اكتب التقرير*\n\n*مثال:*\n*${usedPrefix + command} الأمر ${usedPrefix} صور *لا يعمل* `
if (text.length < 8) throw `${fg} ✨ *عليك كتابه التقري لا يقل عن 10 احرف.*`
if (text.length > 50) throw `${fg} 😼 *حد الاقصه 50 جرف*`
let teks = `*╭━━[ تقرير ]━━━⬣*\n*┃*\n*┃* *الاسم*\n┃ ✦ Wa.me/${m.sender.split`@`[0]}\n*┃*\n*┃* *رسالة*\n*┃* ✦ ${text}\n*┃*\n*╰━━━━━━━━━━━━━━━━━━⬣*`
//conn.reply('593968585383@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
//contextInfo: {
//mentionedJid: [m.sender]
//}})
conn.reply(' 393271166550@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
contextInfo: {
mentionedJid: [m.sender]
}})
  m.reply(`╰⊱💚⊱ *نجاح* ⊱💚⊱╮\n\n*تم إرسال التقرير إلى مالكي. سيكون لديك إجابة قريبا. إذا كان خاطئا ، تجاهل التقرير.*`)

}

handler.help = ['reporte', 'request'].map(v => v + ' <teks>')
handler.tags = ['info']
handler.exp = 25 
handler.command = /^(report|request|reporte|بلاغ|bugs|bug|report-owner|reportes|reportar)$/i 
export default handler
