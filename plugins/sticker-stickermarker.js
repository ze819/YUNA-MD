import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'
import MessageType from '@adiwajshing/baileys'
const effects = ['jail', 'gay', 'glass', 'wasted' ,'triggered', 'lolice', 'simpcard', 'horny']

let handler = async (m, { conn, usedPrefix, command, text }) => {
let effect = text.trim().toLowerCase()
if (!effects.includes(effect)) throw `
${mg}
يجب عليك استخدام الأمر على النحو التالي
*${usedPrefix + command} efecto*
الرد على صورة
مثل
*${usedPrefix + command} simpcard*
التأثيرات المتاحة
${effects.map(effect => `_» ${effect}_`).join('\n')}
`.trim()
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw `${fg}_ لم يتم العثور على صورة ، تذكر عليك أن ترد (تمنشن) صوره _`
if (!/image\/(jpe?g|png)/.test(mime)) throw `${ag} يجب أن يكون التنسيق *.jpg او .jpeg* والرد على الصورة`
let img = await q.download()
let url = await uploadImage(img)
let apiUrl = global.API('https://some-random-api.ml/canvas/', encodeURIComponent(effect), {
avatar: url
})
try {
let stiker = await sticker(null, apiUrl, global.packname, global.author)
conn.sendFile(m.chat, stiker, null, { asSticker: true })
} catch (e) {
m.reply(`${fg} تعذر إجراء التحويل إلى ملصق ، أرسل صورة بدلا من ذلك `)
await conn.sendFile(m.chat, apiUrl, 'image.png', null, m)
}}
handler.help = ['stickmaker (caption|reply media)']
handler.tags = ['General']
handler.command = /^(stickmaker|stickermaker|تاثيرات|تأثيرات|cs)$/i
export default handler
