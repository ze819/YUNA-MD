import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper'
import fetch from 'node-fetch'
let handler = async (m, { conn, args, usedPrefix, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if (!args[0]) return conn.reply(m.chat, `${lenguajeGB['smsAvisoMG']()} أدخل رابط اليوتيوب لتنزيل الفيديو\nمثل\n*${usedPrefix + command} https://youtu.be/c5gJRzCi0f0*`, fkontak, m)
await conn.reply(m.chat, `${lenguajeGB['smsAvisoEG']()} يتم تنزيل الفيديو الخاص بك ، انتظر لحظة من فضلك `, fkontak, m)
try {
let qu = args[1] || '360'
let q = qu + 'p'
let v = args[0]
const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v)).catch(async _ => await youtubedlv3(v))
const dl_url = await yt.video[q].download()
const ttl = await yt.title
const size = await yt.video[q].fileSizeH
await await conn.sendMessage(m.chat, { video: { url: dl_url }, fileName: `╭━❰  ${wm}  ❱━⬣
┃ 💜  | عنوان
┃ ${ttl}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 💙  | حجم
┃ ${size}
╰━━━━━❰ *𓃠 ${vs}* ❱━━━━⬣`, thumbnail: await fetch(yt.thumbnail) }, { quoted: m })
} catch {
try {
let lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${lolkeysapi}&url=${args[0]}`)    
let lolh = await lolhuman.json()
let n = lolh.result.title || 'error'
let n2 = lolh.result.link
let n3 = lolh.result.size
let n4 = lolh.result.thumbnail
await conn.sendMessage(m.chat, { video: { url: n2 }, fileName: `╭━❰  ${wm}  ❱━⬣
┃ 🤍  | عنوان
┃ ${n}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 🧡  | حجم
┃ ${n3}
╰━━━━━❰ *𓃠 ${vs}* ❱━━━━⬣`, thumbnail: await fetch(n4) }, { quoted: m })
} catch {
await conn.reply(m.chat, `${lenguajeGB['smsAvisoFG']()}  من الممكن أن يكون الملف ثقيلا جدا. جرب آخر`, m)}
}}
handler.command = /^fgmp4|dlmp4|getvid|yt(v|mp4)?$/i
export default handler