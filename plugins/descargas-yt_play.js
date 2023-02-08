/*import fetch from 'node-fetch'
import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let grupos = [nna, nn, nnn, nnnt, nnntt, nnnttt]
let gata = [img5, img6, img7, img8, img9]
let enlace = { contextInfo: { externalAdReply: {title: wm + ' 🐈', body: 'support group' , sourceUrl: grupos.getRandom(), thumbnail: await(await fetch(gata.getRandom())).buffer() }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: 'YUNA-MD', thumbnailUrl: await(await fetch(img)).buffer(), sourceUrl: yt }}}
let dos = [enlace, enlace2]

if (!text) throw `${lenguajeGB['smsAvisoMG']()} أدخل الاسم أو العنوان \nمثال\n*${usedPrefix + command} ما تيسر من سورة التغابن*   `
let vid = (await youtubeSearch(text)).video[0]
if (!vid) throw `${lenguajeGB['smsAvisoFG']()}تعذر العثور على الصوت/الفيديو. جرب اسما أو عنوانا آخر`
try {
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
const url = 'https://www.youtube.com/watch?v=' + videoId
 
await conn.sendButton(m.chat, wm, `*𓆩 𓃠 𓆪 ✧═══ ${vs} ═══✧ 𓆩 𓃠 𓆪*

ও عنوات:
» ${title}
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ও الوصف:
» ${description}
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ও تاريخ النشر:
» ${publishedTime}
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ও المودة:
» ${durationH}
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ও المشاهدات:
» ${viewH}
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ও الرابط:
» ${url}

*𓆩 𓃠 𓆪 ✧═══ ${vs} ═══✧ 𓆩 𓃠 𓆪*`, thumbnail, [['قـائمـة☘️', '/menu']], m, dos.getRandom())
  
const sections = [{
title: comienzo + ' 📡 اختر طريقة التحميل' + fin,
rows: [
{title: "صوت (النوع 1)", rowId: `${usedPrefix}yta ${url}`, description: `${title}\n`},
{title: "صوت (النوع 2)", rowId: `${usedPrefix}play.1 ${url}`, description: `${title}\n`},
{title: "صوت النوع ملف) ", rowId: `${usedPrefix}pdocaudio ${url}`, description: `${title}\n`},
{title: "فيديو (النوع 1)", rowId: `${usedPrefix}ytv ${url}`, description: `${title}\n`},
{title: "فيديو (النوع 2)", rowId: `${usedPrefix}play.2 ${url}`, description: `${title}\n`},
{title: "فيديو (النوع ملف) ", rowId: `${usedPrefix}pdocvieo ${url}`, description: `${title}\n`}
]},{
title: comienzo + ' 🔎عرض نتائج البحث ' + fin,
rows: [
{title: "جميع نتائج البحث", rowId: `${usedPrefix}ytsearch ${text}`}
]}]

const listMessage = {
  text: `  *نتائج البحث عن:*\n*${text}*`,
  footer: global.wm,
  title: `${htki} *♻️ نتائج* ${htka}`,
  buttonText: `🍄 اختيار طريقة التحميل 🍁`,
  sections
}

await conn.sendMessage(m.chat, listMessage, {quoted: fkontak})
}catch(e){
m.reply(`${lenguajeGB['smsAvisoFG']()} حاول مره ثانيه `)
console.log(e)
}}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play2?$/i
handler.exp = 20
handler.money = 200
export default handler
*/


import fetch from 'node-fetch'
import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
try {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let grupos = [nn, nnn, nnnt]
let gata = [img5, img6, img7, img8, img9]
let enlace = { contextInfo: { externalAdReply: {title: wm + ' 🐈', body: 'support group' , sourceUrl: grupos.getRandom(), thumbnail: await(await fetch(gata.getRandom())).buffer() }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: '😻 𝗦𝘂𝗽𝗲𝗿 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', thumbnailUrl: await(await fetch(img)).buffer(), sourceUrl: yt }}}
let dos = [enlace, enlace2]

if (!text) throw `${lenguajeGB['smsAvisoMG']()} اكتب الاسم أو العنوان\nمثل\n*${usedPrefix + command} ما تيسر من سورة التغابن*`
let vid = (await youtubeSearch(text)).video[0]
if (!vid) throw `${lenguajeGB['smsAvisoFG']()} تعذر العثور على الصوت/الفيديو. جرب اسما أو لقبا آخر `
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
const url = 'https://www.youtube.com/watch?v=' + videoId
 
await conn.sendButton(m.chat, wm, `*𓆩༺════ •⊰${vs}⊱• ════༻𓆪*

ও العنوان 
» ${title}
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ও الوصف
» ${description}
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ও تاريخ النشر
» ${publishedTime}
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ও المدة
» ${durationH}
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ও المشاهدات 
» ${viewH}
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ও الرابط
» ${url}

*༺════ •⊰❤️⊱• ════༻*`, thumbnail, [['قائمة الأوامر☘️', '/menu']], m, dos.getRandom())
  
const sections = [{
title: comienzo + ' 📡 اختر نوع تحميل' + fin,
rows: [
{title: "صوت (1)", rowId: `${usedPrefix}py ${url}`, description: `${title}\n`},
{title: "صوت (2)", rowId: `${usedPrefix}play.1 ${url}`, description: `${title}\n`},
{title: "صوت (ملف) ", rowId: `${usedPrefix}pdocaudio ${url}`, description: `${title}\n`},
{title: "فيديو ( 1)", rowId: `${usedPrefix}ytv ${url}`, description: `${title}\n`},
{title: "فيديو ( 2)", rowId: `${usedPrefix}play.2 ${url}`, description: `${title}\n`},
{title: "فيديو (ملف) ", rowId: `${usedPrefix}pdocvieo ${url}`, description: `${title}\n`}
]},{
title: comienzo + ' 🔎 جميع نتائج البحث' + fin,
rows: [
{title: "عرض نتائج البحث ", rowId: `${usedPrefix}ytsearch ${text}`}
]}]

const listMessage = {
  text: `*اختر ما تريد القيام به مع  ${text}*`,
  footer: global.wm,
  title: `${htki} *♻️ نتائج* ${htka}`,
  buttonText: `🍄  اختيار طريقة التحميل 🍁`,
  sections
}

await conn.sendMessage(m.chat, listMessage, {quoted: fkontak})
} catch {
try {
let vid2 = await (await fetch(`https://api.lolhuman.xyz/api/ytsearch?apikey=${lolkeysapi}&query=${text}`)).json()
let { videoId, title, views, published, thumbnail } = await vid2.result[0]
const url = 'https://www.youtube.com/watch?v=' + videoId
let ytLink = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`)
let jsonn = await ytLink.json()
let aud = await jsonn.result.audio
let capt = `ও  عنوان: ${title}\nও نشر: ${published}\nও طرق عرض: ${views}`
const buttons = [{buttonId: `#playlist ${title}`, buttonText: {displayText: '𓃠 نتائج البحث'}, type: 1}]
const buttonMessage = { image: {url: thumbnail}, caption: capt, footer: '*جاري إرسال الصوت انتظر لحظة... *', buttons: buttons, headerType: 4 }
let msg = await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
conn.sendMessage(m.chat, { audio: { url: aud }, mimetype: 'audio/mp4', fileName: `${title}.mp3`}, {quoted: msg})
} catch (e) {
throw ('╰⊱❌⊱ *خطأ* ⊱❌⊱╮\n\n حاول من جديد حدث خطاء في الخادم*')
}}} 
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play2?$/i
export default handler