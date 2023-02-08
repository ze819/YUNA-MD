import fs from 'fs'
import { mediafiredl } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `${lenguajeGB['smsAvisoMG']()}\nأدخل رابط MEDIAFIRE صالحا .`
try {
let res = await mediafiredl(args[0])
let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
let caption = `
${eg}
┃ 𓃠 *${gt} ${vs}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 💫  | اسم
┃ ${filename}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 💪  |  حجم
┃ ${filesizeH}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 🚀  | نوع
┃ ${ext}`.trim()
conn.reply(m.chat, caption, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'YUNA BOT',
body: 'Super Bot WhatsApp',         
previewType: 0, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
sourceUrl: `https://github.com/ahmed1p7`}}})
  
let info = `قد لا يتم إرسال أكبر من 150 ميغابايت.  .`.trim()  
await conn.sendHydrated(m.chat, info, wm, null, ig, 'انستغرام', null, null, [
['قائمة التحميل🌀', '#descargasmenu'],
['| جميع الأوامر ✨', '.allmenu'],
[' | قائمة الأوامر ☘️', '/menu']
], m,)  
  
conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
} catch (e) { 
m.reply(`${lenguajeGB['smsAvisoFG']()}
يرجى المحاولة مرة أخرى. يجب أن يكون رابط MEDIAFIRE صالحا .`)
console.log(e)
}}
handler.help = ['mediafire'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(mediafire|medl|dlmediafire)$/i
handler.limit = 3
handler.exp = 100
export default handler
