import fetch from 'node-fetch'
let handler = async (m, { conn, args, text, command, usedPrefix }) => {
if (!text) throw `${lenguajeGB['smsAvisoMG']()} اكتب اسم مستخدم TIKTOK الخاص بك دون استخدام  "@"\nمثل\n*${usedPrefix + command} universo_editx*`
let res = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=9b817532fadff8fc7cb86862`
await conn.sendFile(m.chat, res, 'error.jpg', `✅  | صورة الملف الشخصي\n💟 *${text}*`, m, false)
  
  let info = `*تعرف على الجديد وتذكر أن يكون لديك أحدث إصدار.*
  `.trim()
  
conn.sendHydrated(m.chat, info, wm, null, md, 'YUNA-MD', null, null, [
['قائمة التحميل🌀', '#descargasmenu'],
[' | جميع الأوامر✨', '.allmenu'],
[' | قائمة الأوامر ☘️', '/menu']
], m,) 

}
handler.help = ['tiktokfoto'].map(v => v + ' <username>')
handler.tags = ['downloader']
handler.command = /^(tikfo|تيكو|tiktokphoto)$/i
handler.limit = 1
handler.exp = 68
export default handler
