import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'
import MessageType from '@adiwajshing/baileys'
const effects = ['greyscale', 'invert', 'brightness', 'threshold', 'sepia', 'red', 'green', 'blue', 'blurple', 'pixelate', 'blur']

let handler = async (m, { conn, usedPrefix, command, text }) => {
let effect = text.trim().toLowerCase()
if (!effects.includes(effect)) throw `
${mg}
يجب عليك استخدام الأمر على النحو التالي
*${usedPrefix + command} efecto*
الرد على صورة
مثل
*${usedPrefix + command} blue*
التأثيرات المتاحة
${effects.map(effect => `_» ${effect}_`).join('\n')}
`.trim()
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw `${fg} لم يتم العثور على صورة ، تذكر الرد على صورة`
if (!/image\/(jpe?g|png)/.test(mime)) throw `${ag} يجب أن يكون التنسيق *jpg or jpeg*`
let img = await q.download()
let url = await uploadImage(img)
let apiUrl = global.API('https://some-random-api.ml/canvas/', encodeURIComponent(effect), {
avatar: url
})
try {
let stiker = await sticker(null, apiUrl, global.packname, global.author)
conn.sendFile(m.chat, stiker, null, { asSticker: true })
} catch (e) {
m.reply(`${fg} تعذر إجراء التحويل ، أرسل صورة بدلا من ذلك `)
await conn.sendFile(m.chat, apiUrl, 'image.png', null, m)
}}
handler.help = ['stickfilter (caption|reply media)']
handler.tags = ['General']
handler.command = /^(stickerfilter|stikerfilter|cs2|stickerefecto|efectosticker|فلتر|stickerfiltro)$/i
export default handler
