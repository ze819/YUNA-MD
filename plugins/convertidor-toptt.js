import { toPTT } from '../lib/converter.js'
let handler = async (m, { conn, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
if (!/video|audio/.test(mime)) throw `${lenguajeGB['smsAvisoMG']()}\nالرد على فيديو أو صوت لتحويله إلى ملاحظة صوتية `
let media = await q.download?.()
if (!media && !/video/.test(mime)) throw `${lenguajeGB['smsAvisoFG']()}\nغير قادر على تنزيل الفيديو ، حاول مرة أخرى من فضلك `
if (!media && !/audio/.test(mime)) throw `${lenguajeGB['smsAvisoFG']()}\nغير قادر على تنزيل الصوت ، حاول مرة أخرى من فضلك`
let audio = await toPTT(media, 'mp4')
if (!audio.data && !/audio/.test(mime)) throw `${lenguajeGB['smsAvisoFG']()}\nتعذر التحويل من الصوت إلى المذكرة الصوتية ، يرجى المحاولة مرة أخرى`
if (!audio.data && !/video/.test(mime)) throw `${lenguajeGB['smsAvisoFG']()}\nتعذر التحويل من الفيديو إلى مذكرة صوتية ، يرجى المحاولة مرة أخرى`
conn.sendFile(m.chat, audio.data, 'error.mp3', '', m, true, { mimetype: 'audio/mp4' })
}
handler.help = ['tovn (رد)']
handler.tags = ['audio']
handler.command = /^tovn|vn|ptt$/i
export default handler
