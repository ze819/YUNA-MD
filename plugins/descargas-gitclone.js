import fetch from 'node-fetch'
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let handler = async (m, { args, usedPrefix, command }) => {
if (!args[0]) throw `${lenguajeGB['smsAvisoMG']()}\nاكتب رابط gethup \nمثل\n*${usedPrefix + command} https://github.com/ahmed1p7/YUNA-MD*`
if (!regex.test(args[0])) throw `${lenguajeGB['smsAvisoFG']()}\nرابط غير صالح. يجب أن يكون رابط gethup`
let [_, user, repo] = args[0].match(regex) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, { method: 'HEAD' })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
m.reply(`${lenguajeGB['smsAvisoEG']()}\nإرسال الملف ، مجرد لحظة 🚀\nإذا لم يصل الملف ، فذلك لأن المستودع ثقيل .`)
conn.sendFile(m.chat, url, filename, null, m)
let info = `💖 *تعرف على الأخبار وتذكر أن يكون لديك أحدث إصدار.*\n\n💝 *تعرف على الجديد وتذكر أن يكون لديك أحدث إصدار.*
  `.trim()
  
await conn.sendHydrated(m.chat, info, wm, null, ig, 'انستغرام', null, null, [
['قائمة التحميل 🌀', '#descargasmenu'],
[' | جميع الأوامر ✨', '.allmenu'],
[' | قائمة الأوامر ☘️', '/menu']
], m,)  
}
handler.help = ['gitclone <url>']
handler.tags = ['downloader']
handler.command = /gitclone|gp|جيت|repoclonar/i
handler.exp = 59
export default handler
