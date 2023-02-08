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
//user.registered = false

let pp = gataVidMenu.getRandom()
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let fsizedoc = '1'.repeat(10)
let adReply = { fileLength: fsizedoc, seconds: fsizedoc, contextInfo: { forwardingScore: fsizedoc, externalAdReply: { showAdAttribution: true, title: wm, body: '👋 ' + username, mediaUrl: ig, description: 'Hola', previewType: 'PHOTO', thumbnail: await(await fetch(gataMenu.getRandom())).buffer(), sourceUrl: redesMenu.getRandom() }}}

let menuA = `🔰 ${lenguajeGB['smsConfi2']()} *${username}*`.trim()
let menuB = ` تزكر قبل كل أمر يجب أن تستخدم ${usedPrefix} 

*┇⊛* ${lenguajeGB['smsTex11']()} 🌐
*┇⊛هذا الأمر يضيف شخص عبر رقم @+00 000 000 00*
*┇اكتب : اضافه او add*
*┇⊰ا᯽ا⊱┈──╌❊╌──┈⊰ا᯽ا⊱*
*┇⊛هذا الأمر يقوم بطرد شخص من قروب*
*┇اكتب : طرد او kick*
*┇⊰ا᯽ا⊱┈──╌❊╌──┈⊰ا᯽ا⊱*
*┇⊛هذا الأمر يمنشن ادمنيه  قروب*
*┇اكتب : ادمن او dmins*
*┇⊰ا᯽ا⊱┈──╌❊╌──┈⊰ا᯽ا⊱*
*┇⊛هذا الأمر يمنشن جميع الأعضاء*
*┇اكتب : منشن او tagall*
*┇⊰ا᯽ا⊱┈──╌❊╌──┈⊰ا᯽ا⊱*
*┇⊛هذا الأمر يصنع منشن مخفي*
*┇اكتب : hidetag او مخفي*
*┇⊰ا᯽ا⊱┈──╌❊╌──┈⊰ا᯽ا⊱*
*┇⊛هذا الأمر يقوم بعرض الأعضاء الذين لديهم 0 رسائل*
*┇اكتب : fantasmas (سيتم جميع الأعضاء)*
*┇اكتب : kickfantasmas (سيتم طرد جميع الأشباح)*
*┇⊰ا᯽ا⊱┈──╌❊╌──┈⊰ا᯽ا⊱*
*┇⊛هذا الأمر يعطي انذار*
*┇اكتب : انذار (@منشن و سبب)*
*┇⊰ا᯽ا⊱┈──╌❊╌──┈⊰ا᯽ا⊱*
*┇⊛هذا الأمر يحذف الانذار*
*┇اكتب : حذف (@منشن)*
*┇⊰ا᯽ا⊱┈──╌❊╌──┈⊰ا᯽ا⊱*
*┇⊛هذا الأمر يقوم بإغلاق او فتح قروب*
*┇اكتب : قروب فتح*
*┇اكتب :قروب اغلاق*
*┇⊰ا᯽ا⊱┈──╌❊╌──┈⊰ا᯽ا⊱*
*┇⊛هذا الأمر يقوم بفتح او إغلاق قروب في ساعه محدده*
*┇اكتب : grouptimeاو gctime*
*┇⊰ا᯽ا⊱┈──╌❊╌──┈⊰ا᯽ا⊱*
*┇⊛هذا الأمر يقوم بترقية العضو إلى رتبت مشرف*
*┇اكتب : رفع او demote (@منشن)*
*┇⊰ا᯽ا⊱┈──╌❊╌──┈⊰ا᯽ا⊱*
*┇⊛هذا الأمر يقوم بنزع رتبه مشرف*
*┇اكتب : تنزيل او promote (@منشن)*
*┇⊰ا᯽ا⊱┈──╌❊╌──┈⊰ا᯽ا⊱*
*┇⊛هذا الأمر يعطيك معلومات قروب*
*┇اكتب : grin او infogrupo*
*┇⊰ا᯽ا⊱┈──╌❊╌──┈⊰ا᯽ا⊱*
*┇⊛هذا الأمر يقوم بتفعيل او تعطيل أوامر اضافيه في قروب*
*┇اكتب : on*
*┇اكتب : off*
*┇⊰ا᯽ا⊱┈──╌❊╌──┈⊰ا᯽ا⊱*
*┇⊛هذا الأمر يقوم بإضافة (ترحيب، وداع، وصف، صوره قروب خاص ل قروب*
*┇اكتب : setwelcome او اعداد_ترحيب (يتم ارسال عندما يدخل عضو جديد)*
*┇اكتب : setbye او اعداد_وداع (يتم ارسال عندما خروج احد اعضاء)*
*┇اكتب : setdesc او اعداد_وصف ( يعيد تعين وصف)*
*┇اكتب : setname او اعداد_اسم (يعيد تعين اسم قروب)*
*┇اكتب : setpp او اعداد_صورة (يعيد تعين صورة قروب)*
*┇⊰ا᯽ا⊱┈──╌❊╌──┈⊰ا᯽ا⊱*
*┇⊛هذا الأمر يقوم بإعادة تعين رابط قروب*
*┇اكتب : رابط_جديد*
*┇⊰ا᯽ا⊱┈──╌❊╌──┈⊰ا᯽ا⊱*
*┇⊛هذا الأمر يعرض لك قائمة البلاد الموجوده في قروب او يطردها*
*┇اكتب : قائمة_الارقام*
*┇اكتب : طرد_الارقام*
*┇⊰ا᯽ا⊱┈──╌❊╌──┈⊰ا᯽ا⊱*
*┇⊛هذا الأمر يقوم بإنشاء تصويت*
*┇اكتب : انشاء_تصويت (سبب الانشاء)*
*┇اكتب : مسح_تصويت*
*┇⊰ا᯽ا⊱┈──╌❊╌──┈⊰ا᯽ا⊱*
`.trim()
await conn.sendButtonVid(m.chat, pp, menuA, menuB, lenguajeGB.smsBotonM1(), '.menu', lenguajeGB.smsBotonM2(), '/allmenu', lenguajeGB.smsBotonM3(), '#inventario', fkontak, adReply)

} catch (e) {
await conn.sendButton(m.chat, `\n${wm}`, lenguajeGB['smsMalError3']() + '#report ' + usedPrefix + command, null, [[lenguajeGB.smsMensError1(), `#reporte ${lenguajeGB['smsMensError2']()} *${usedPrefix + command}*`]], m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)	
}}

handler.help = ['infomenu'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(grupomenu)$/i
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
