let handler = async (m, { conn, usedPrefix, text, command }) => {
let hash = text
if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString('hex')
if (!hash) throw `*[❗] يمكنك فقط تعيين نص أو أمر إلى STICKER و IMAGBE ، للحصول على الرمز المعين ، استخدم الأمر  ${usedPrefix}listcmd*`
let sticker = global.db.data.sticker
if (sticker[hash] && sticker[hash].locked) throw '*[❗] يمكن للمالك فقط إجراء هذا التعديل*'
delete sticker[hash]
m.reply(`*[ ✔ ]  تمت إزالة النص / الأمر المخصص للملصق والصورة من قاعدة البيانات بنجاح*`)}
handler.command = ['delcmd']
handler.rowner = true
export default handler
