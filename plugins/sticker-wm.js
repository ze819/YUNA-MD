import { addExif } from '../lib/sticker.js'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!m.quoted) throw `${mg} الرد على الملصق بالوصف والاسم\nمثل\n*${usedPrefix + command} النص1|النص2*`
let stiker = false 
try {
let [packname, ...author] = text.split('|')
author = (author || []).join('|')
let mime = m.quoted.mimetype || ''
if (!/webp/.test(mime)) throw `${mg} الرد على الملصق بالوصف والاسم\nمثل\n*${usedPrefix + command} النص1|النص2*`
let img = await m.quoted.download()
if (!img) throw `${mg} الرد على الملصق بالوصف والاسم\nمثل\n*${usedPrefix + command} النص1|النص2*`
stiker = await addExif(img, packname || '', author || '')
} catch (e) {
console.error(e)
if (Buffer.isBuffer(e)) stiker = e
} finally {
if (stiker) conn.sendFile(m.chat, stiker, 'wm.webp', '', m, false, { asSticker: true })
else throw `${fg} الرد على الملصق بالوصف والاسم\nمثل\n*${usedPrefix + command} النص1|النص2*`
}}
handler.help = ['wm <packname>|<author>']
handler.tags = ['sticker']
handler.command = /^wm|سرقه|crearwm$/i
handler.level = 4
export default handler
