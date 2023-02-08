import fetch from 'node-fetch'
let handler = async (m, {conn, command, usedPrefix, text }) => { 
if (!text) throw `${lenguajeGB['smsAvisoMG']()} اكتب سؤالك ليتم الرد عليه \مثال\n*${usedPrefix + command} يونا تحبيني?*`   
let res = await fetch(`https://api.simsimi.net/v2/?text=${text}&lc=ar`)
let json = await res.json()
if (json.success)
  
m.reply(`╭━〔 سؤال 〕━⬣  
⁉️ سؤال : 
⚠️ ${text}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ جواب
❤️ : ${json.success.replace('simsimi', 'simsimi').replace('Simsimi', 'Simsimi').replace('sim simi', 'sim simi')}`) 

//conn.sendHydrated(m.chat, pre, wm, null, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
//['𝙊𝙩𝙧𝙖 𝙫𝙚𝙯 | 𝘼𝙜𝙖𝙞𝙣 🔮', `${usedPrefix + command} ${text}`],
//['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
//], m, null, m.mentionedJid ? {
//mentions: m.mentionedJid } : {}) 
}
  
handler.help = ['pregunta <texto>?']
handler.tags = ['kerang']
handler.command = /^pregunta|preguntas|يونا|سوال$/i  
export default handler