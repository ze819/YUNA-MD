import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
if (!text) throw `${lenguajeGB['smsAvisoMG']()} اكتب نصا للتحدث معي\n\nمثال\n*${usedPrefix + command} مرحبا يونا*`
await conn.sendPresenceUpdate('composing', m.chat)
let res = await fetch (`https://api.simsimi.net/v2/?text=${text}&lc=ar`)    //(`https://simsimi.info/api/?text=${text}&lc=ar`)    
let json = await res.json()
let tes = json.success.replace('simsimi', 'simsimi').replace('Simsimi', 'Simsimi').replace('sim simi', 'sim simi')
//m.reply(`${tes}`) 
conn.sendHydrated(m.chat, `${tes}`, `الذكاء الاصطناعي | ${wm}`, null, null, null, null, null, [
[' الأوامر ☘️', '/menu']
], m)
}
handler.help = ['simsimi']
handler.tags = ['General']
handler.command = ['bot', 'simi', 'simsimi', 'alexa', 'bixby', 'cortana', 'siri', 'okgoogle']
export default handler


