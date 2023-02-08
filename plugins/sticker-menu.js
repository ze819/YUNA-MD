import { xpRange } from '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, args, usedPrefix: _p, __dirname, isOwner, text, isAdmin, isROwner }) => {
try{  
const { levelling } = '../lib/levelling.js'
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)

let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let { money } = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),

exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,

level, limit, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
 
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let user = global.db.data.users[m.sender]

let pp = gataVidMenu.getRandom()
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let fsizedoc = '1'.repeat(10)
let adReply = { fileLength: fsizedoc, seconds: fsizedoc, contextInfo: { forwardingScore: fsizedoc, externalAdReply: { showAdAttribution: true, title: wm, body: '👋 ' + username, mediaUrl: ig, description: 'Hola', previewType: 'PHOTO', thumbnail: await(await fetch(gataMenu.getRandom())).buffer(), sourceUrl: redesMenu.getRandom() }}}

let menuA = `🧸 ${lenguajeGB['smsConfi2']()} *${username}*`.trim()
let menuB = ` *تزكر قبل كل أمر يجب أن تستخدم ${usedPrefix}*

*┇* ${lenguajeGB['smsTex22']()} 🧸
*┇⊛ هذا الأمر يصنع لك ملصقات*
*┇اكتب : s او ملصق*
*┇⊰ا᯽ا⊱┈──╌❊╌──┈⊰ا᯽ا⊱*
*┇⊛هذا الأمر يدمج لك الايموجي (الرموز التعبيرية)*
*┇اكتب : ايموجي او emojimix*
*┇⊰ا᯽ا⊱┈──╌❊╌──┈⊰ا᯽ا⊱*
*┇⊛هذا الأمر بقوم بتحويل الكلام إلى ملصق (يعمل فقط على الغه الاجنبيه)*
*┇اكتب : attp - attp2 - attp3 - attp4 - attp5 - attp6 مع جمله*
*┇⊰ا᯽ا⊱┈──╌❊╌──┈⊰ا᯽ا⊱*
*┇⊛هذا الأمر برسل ملصق عشوائي للانمي يقوم بفرك رأس*
*┇اكتب : pat او patt سيتم الإرسال تلقائي*
*┇⊛هذا الأمر يرسل ملصق عشوائي للانمي يقوم بلاكل*
*┇اكتب : food او طعام*
*┇⊰ا᯽ا⊱┈──╌❊╌──┈⊰ا᯽ا⊱*
*┇⊛هذا الأمر يقوم بتغير حقوق الملصق*
*┇اكتب wm او سرقه*  (${usedPrefix}سرقه النص1|النص2) 
*┇⊰ا᯽ا⊱┈──╌❊╌──┈⊰ا᯽ا⊱*
*┇⊛هاذا الأمر يقوم بإضافة تاثيرات على صور*
*┇اكتب : cs او تاثيرات*
*┇⊰ا᯽ا⊱┈──╌❊╌──┈⊰ا᯽ا⊱*
*┇⊛هذا الأمر يقوم بإضافة فلتر على الصور*
*┇اكتب : cs2 او فلتر* 
`.trim()
await conn.sendButtonVid(m.chat, pp, menuA, menuB, lenguajeGB.smsBotonM1(), '.menu', lenguajeGB.smsBotonM2(), '/allmenu', lenguajeGB.smsBotonM3(), '#inventario', fkontak, adReply)

} catch (e) {
await conn.sendButton(m.chat, `\n${wm}`, lenguajeGB['smsMalError3']() + '#report ' + usedPrefix + command, null, [[lenguajeGB.smsMensError1(), `#reporte ${lenguajeGB['smsMensError2']()} *${usedPrefix + command}*`]], m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)	
}}

handler.help = ['infomenu'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(stickermenu)$/i
//handler.register = true
handler.exp = 50
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
