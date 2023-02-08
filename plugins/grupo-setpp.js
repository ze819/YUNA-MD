let handler = async (m, { conn, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''
if (/image/.test(mime)) {
let img = await q.download()
if (!img) throw '*⚠️️ الرد على صورة.*'
await conn.updateProfilePicture(m.chat, img).then(_ => m.reply('⚘ *_تم تحديث الصورة بنجاح._*'))
} else throw '*⚠️️ الرد على صورة.*'}
handler.command = /^setpp(group|grup|gc)|اعداد_صورة?$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler
