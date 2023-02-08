let handler = async (m, { conn, args }) => {
  let usuario = global.db.data.users[m.sender].premiumTime
  let user = Object.entries(global.db.data.users).filter(user => user[1].premiumTime).map(([key, value]) => {
    return { ...value, jid: key }
  })
  let name = '🎟️ بريميوم'
  //let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
  let premTime = global.db.data.users[m.sender].premiumTime
  let prem = global.db.data.users[m.sender].premium
  let waktu = clockString(`${premTime - new Date() * 1} `)
  let sortedP = user.map(toNumber('premiumTime')).sort(sort('premiumTime'))
  let len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 10)) : Math.min(10, sortedP.length)
  await conn.sendButton(m.chat, `${htki} *🎟️ بريميوم 🎟️* ${htka}
  
*╭ ༻✦༺ معلومات بريميومة ༻✦༺*
*┃✢ مستخدم*\n*┃✢* ${conn.getName(m.sender)}
${prem ? `${clockString (usuario - new Date() * 1)}` : '┃✢ *وقت بريميوم*\n┃🚫 انتهت مهله '}
*╰•·–––––––––––––––·•*

╭•·–––––––––––––––·•
🌟 المستخدمون البريميومون
╰•·–––––––––––––––·•${sortedP.slice(0, len).map(({ jid, name, premiumTime, prem, registered }, i) => `\n\n╭–✦ ${registered ? name : conn.getName(jid)}\n┃• wa.me/${jid.split`@`[0]}\n${premiumTime > 0 ? `${clockString (premiumTime - new Date() * 1)}` : '┃🚫 انتهت مهله'}`).join`\n╰–––––––––––·•`}
╰–––––––––––·•`.trim(), `🎟️ بريميوم ⇢ ${prem ? '✅' : '❌'}\n${wm}`, null, [[`${prem ? '✦ استمتع بريميوم ✦': '✦ شراء بريميوم باس  ✦'}`, `${prem ? '.allmenu': '.pase premium'}`]]) //${premiumTime > 0 ?
setTimeout(() => {
    if (global.db.data.chats[m.chat].deletemedia) conn.deleteMessage(m.chat, key)
  }, global.db.data.chats[m.chat].deletemediaTime)
}
handler.help = ['premlist [angka]']
handler.tags = ['info']
handler.command = /^(listprem|premlist|listavip|viplista)$/i
//handler.command = /^(vip|prem|premium|lista|list)vip|prem|premium|lista|list$/i

export default handler

function clockString(ms) {
  let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
  let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return ['┃ ', ye, ' *🗓️  سنوات*\n', '┃ ', mo, ' *⛅ شهر*\n', '┃ ', d, ' *☀️ ايام*\n', '┃ ', h, ' *⏰  ساعات*\n', '┃ ', m, ' *🕐 دقيق*\n', '┃ ', s, ' *⏱️ الثواني*'].map(v => v.toString().padStart(2, 0)).join('')
}

function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
  else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
  if (property) return (a, i, b) => {
    return { ...b[i], [property]: a[property] === undefined ? _default : a[property] }
  }
  else return a => a === undefined ? _default : a
}
