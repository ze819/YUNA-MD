import { toAudio } from '../lib/converter.js' 
let handler = async (m, { conn, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
if (!/video|audio/.test(mime)) throw `${lenguajeGB['smsAvisoMG']()}\nالرد على مذكرة فيديو أو مذكرة صوتية لتحويلها إلى صوت |.MP3`
let media = await q.download?.()
if (!media && !/video/.test(mime)) throw `${lenguajeGB['smsAvisoFG']()}\nغير قادر على تنزيل الفيديو ، حاول مرة أخرى من فضلك `
if (!media && !/audio/.test(mime)) throw `${lenguajeGB['smsAvisoFG']()}\nغير قادر على تنزيل الملاحظة الصوتية ، حاول مرة أخرى من فضلك `
let audio = await toAudio(media, 'mp4')
if (!audio.data && !/audio/.test(mime)) throw `${lenguajeGB['smsAvisoFG']()}\nغير قادر على تحويل ملاحظتك من صوت إلى صوت |.MP3 حاول مرة أخرى من فضلك`
if (!audio.data && !/video/.test(mime)) throw `${lenguajeGB['smsAvisoFG']()}\nغير قادر على تحويل الفيديو الخاص بك إلى صوت |.MP3 حاول مرة أخرى من فضلك`
conn.sendFile(m.chat, audio.data, 'error.mp3', '', m, null, { mimetype: 'audio/mp4' })
}
handler.help = ['tomp3 (reply)']
handler.tags = ['audio']
handler.command = ['tomp3', 'toaudio', 'mp3']
export default handler
