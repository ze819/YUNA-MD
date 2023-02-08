let handler = async (m, { conn, text, usedPrefix, command }) => {

let [nomor, pesan, jumlah] = text.split('|')
if (!nomor) throw `${mg} أدخل الرقم المراد إرساله إلى البريد العشوائي\n*❊ ${usedPrefix + command} رقم|نص|مبلغ*\nمثل\n*❊ ${usedPrefix + command} 393271166550|Hi!!|35*`
if (!pesan) throw `${mg} أدخل الرقم المراد إرساله إلى البريد العشوائي\n*❊ ${usedPrefix + command} رقم|نص|مبلغ*\nمثل\n*❊ ${usedPrefix + command} 393271166550|Hi!!|35*`
if (jumlah && isNaN(jumlah)) throw ` أدخل الرقم المراد إرساله إلى البريد العشوائي\n*❊ ${usedPrefix + command} رقم|نص|مبلغ*\nمثل\n*❊ ${usedPrefix + command} 393271166550|Hi!!|35*`
let fixedNumber = nomor.replace(/[-+<>@]/g, '').replace(/ +/g, '').replace(/^[0]/g, '62') + '@s.whatsapp.net'
let fixedJumlah = jumlah ? jumlah * 1 : 10
if (fixedJumlah > 50) throw `${fg} الحد الادني *50* الرسائل إلى الرسائل غير المرغوب فيها `
await m.reply(`${eg} *${fixedJumlah}*_ تم إرسال البريد العشوائي _ *${fixedJumlah}* مرات ل *${nomor}*`)
for (let i = fixedJumlah; i > 1; i--) {
if (i !== 0) conn.reply(fixedNumber, pesan.trim(), m)
}}
handler.help = ['spamwa <number>|<mesage>|<no of messages>']
handler.tags = ['General']
handler.command = /^سبام|spam(wa)?$/i
handler.group = false
handler.premium = false
handler.private = true
handler.level = 3
handler.limit = 3
export default handler 
