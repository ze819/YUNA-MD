import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'

let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner}) => {
try{
let locale = 'es'
let d = new Date(new Date + 3600000)
let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })

let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
wm = global.wm
vs = global.vs
      
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let pareja = global.db.data.users[m.sender].pasangan 
let user = global.db.data.users[m.sender]
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

const sections = [{
title: comienzo + ' ' + lenguajeGB['smsLista1']() + ' ' + fin,
rows: [
{title: lenguajeGB['smsLista2'](), rowId: `${usedPrefix}creadora`},
{title: lenguajeGB['smsLista3'](), rowId: `${usedPrefix}donar`},
{title: lenguajeGB['smsLista4'](), rowId: `${usedPrefix}ping`},
{title: lenguajeGB['smsLista5'](), rowId: `${usedPrefix}infomenu`},
{title: lenguajeGB['smsLista6'](), rowId: `${usedPrefix}allmenu`},
{title: lenguajeGB['smsLista7'](), rowId: `${usedPrefix}instalarbot`},
{title: lenguajeGB['smsLista8'](), rowId: `${usedPrefix}serbot`},
{title: lenguajeGB['smsLista9'](), rowId: `${usedPrefix}términos`, description: '\n'}
]},{
title: comienzo + ' ' + lenguajeGB['smsLista10']() + ' ' + fin,
rows: [
{title: lenguajeGB['smsLista11'](), rowId: `${usedPrefix}top`},
{title: lenguajeGB['smsLista12'](), rowId: `${usedPrefix}listprem`},
{title: lenguajeGB['smsLista13'](), rowId: `${usedPrefix}pase premium`},
{title: lenguajeGB['smsLista14'](), rowId: `${usedPrefix}inventario 3`},
{title: "🌐 بوت يجيب لك مصاري 🌐", rowId: `${usedPrefix}MC-SERVER`},
{title: lenguajeGB['smsLista15'](), rowId: `${usedPrefix}rpgmenu`},
{title: lenguajeGB['smsLista16'](), rowId: `${usedPrefix}buy`},
{title: lenguajeGB['smsLista17'](), rowId: `${usedPrefix}inventory`, description: '\n'}
]},{	
title: comienzo + ' ' + lenguajeGB['smsLista18']() + ' ' + fin,
rows: [
{title: lenguajeGB['smsLista19'](), rowId: `${usedPrefix}descargasmenu`},
{title: lenguajeGB['smsLista20'](), rowId: `${usedPrefix}buscarmenu`},
{title: lenguajeGB['smsLista21'](), rowId: `${usedPrefix}convertidormenu`},
{title: lenguajeGB['smsLista22'](), rowId: `${usedPrefix}audioefectomenu`},
{title: lenguajeGB['smsLista22_1'](), rowId: `${usedPrefix}herramientasmenu`, description: '\n'}
]},{
title: comienzo + ' ' + lenguajeGB['smsLista23']() + ' ' + fin,
rows: [
{title: lenguajeGB['smsLista24'](), rowId: `${usedPrefix}juegosmenu`},
{title: lenguajeGB['smsLista25'](), rowId: `${usedPrefix}audios`},
{title: lenguajeGB['smsLista26'](), rowId: `${usedPrefix}stickermenu`},
{title: lenguajeGB['smsLista27'](), rowId: `${usedPrefix}makermenu`},
{title: lenguajeGB['smsLista28'](), rowId: `${usedPrefix}menulogos2`},
{title: lenguajeGB['smsLista29'](), rowId: `${usedPrefix}randommenu`},
{title: lenguajeGB['smsLista30'](), rowId: `${usedPrefix}hornymenu`, description: '\n'}
]},{	
title: comienzo + ' ' + lenguajeGB['smsLista31']() + ' ' + fin,
rows: [
{title: lenguajeGB['smsLista32'](), rowId: `${usedPrefix}grupomenu`},
{title: lenguajeGB['smsLista33'](), rowId: `${usedPrefix}listas`},
{title: lenguajeGB['smsLista34'](), rowId: `${usedPrefix}on`},
{title: lenguajeGB['smsLista35'](), rowId: `${usedPrefix}ownermenu`}
]}]

const listMessage = {
text: `*╔═══❖•ೋ° °ೋ•❖═══╗*\n*╠დ* *${ucapan()}*\n*╠დ* 🌐 *${name}* ${user.registered === true ? '*' + 'ͧͧͧͦꙶͣͤ✓ᚲʏʙ' + '*' : ''} 🌐\n*╚═══❖•ೋ° °ೋ•❖═══╝*
╔═════๑۩${wm}۩๑═════●
╠დ➺ *${lenguajeGB['smsTime']()}*	    
╠დ➺ ${time}   
║დ   ======== • ✠ • ========
╠დ➺ *${lenguajeGB['smsUptime']()}* 
╠დ➺ ${uptime}
║დ   ======== • ✠ • ========
╠დ➺ *${lenguajeGB['smsVersion']()}*
╠დ➺ ${vs} 
║დ  ======== • ✠ • ========
╠დ➺ *${lenguajeGB['smsTotalUsers']()}*
╠დ➺ ${Object.keys(global.db.data.users).length} 
║დ   ======== • ✠ • ========
╠დ➺ *${lenguajeGB['smsMode']()}*
╠დ➺ ${global.opts['self'] ? `*${lenguajeGB['smsModePrivate']()}*` : `*${lenguajeGB['smsModePublic']()}*`}
║დ   ======== • ✠ • ========
╠დ➺ *${lenguajeGB['smsBanChats']()}*
╠დ➺ ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length} 
║დ   ======== • ✠ • ======== 
╠დ➺ *${lenguajeGB['smsBanUsers']()}*
╠დ➺ ${Object.entries(global.db.data.users).filter(user => user[1].banned).length}
╚დ════════۩${vs} ۩════════დ
*» بريميوم ➺ ${user.premiumTime > 0 ? '✅' : '❌'}* ${(conn.user.jid == global.conn.user.jid ? '' : `\n» أنا روبوت فرعي ل: wa.me/${global.conn.user.jid.split`@`[0]}`) || ''}
*» ${lenguajeGB['smsPareja']()} ➺ ${pareja ? `${name} 💕 ${conn.getName(pareja)}` : `👑	${lenguajeGB['smsResultPareja']()}`}*`,
footer: `*↓ رابط موثوق* ✅
${readMore}${redesMenu.getRandom()}`, //${name} ${ucapan()} //lenguajeGB['smsMenu']()
title: null,
buttonText: `${lenguajeGB['smsListaMenu']()}`, 
sections }
await conn.sendMessage(m.chat, listMessage, {quoted: fkontak})
    
} catch (e) {
await conn.sendButton(m.chat, `\n${wm}`, lenguajeGB['smsMalError3']() + '#report ' + usedPrefix + command, null, [[lenguajeGB.smsMensError1(), `#reporte ${lenguajeGB['smsMensError2']()} *${usedPrefix + command}*`]], m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)	
}}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(menu|menú|memu|memú|help|info|الاوامر|2help|menu1.2|ayuda|commands|commandos|m|\?)$/i
//handler.register = true
handler.exp = 50
export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function ucapan() {
  const time = moment.tz('America/Los_Angeles').format('HH')  //America/Los_Angeles  Asia/Jakarta   America/Toronto
  let res = `${lenguajeGB['smsSaludo']()}`
  if (time >= 4) {
    res = `${lenguajeGB['smsDia']()}`
  }
  if (time >= 11) {
    res = `${lenguajeGB['smsTarde']()}`
  }
  if (time >= 15) {
    res = `${lenguajeGB['smsTarde2']()}`
  }
  if (time >= 17) {
    res = `${lenguajeGB['smsNoche']()}`
  }
  return res
} 