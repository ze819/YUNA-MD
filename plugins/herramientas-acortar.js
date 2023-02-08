
import fetch from 'node-fetch'
let handler = async(m, { conn, args, text }) => {
if (!text) throw `{mg}  أدخل رابطا لتقصير*`
let shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text()  
if (!shortUrl1) throw `*[❗] خطأ، تحقق من أن النص الذي تم إدخاله هو نص وحاول مرة أخرى*`
let done = `*✅كان ناجحا!*\n\n*قبل الرابط:*\n${text}\n*اربط الآن:*\n${shortUrl1}`.trim()   
m.reply(done)}
handler.help = ['tinyurl','acortar'].map(v => v + ' <link>')
handler.tags = ['tools']
handler.command = /^(tinyurl|short|تقصير|corto)$/i
handler.limit = 1
handler.register = true
handler.fail = null
export default handler