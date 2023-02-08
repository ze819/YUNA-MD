/*              Codigo Creado Por Bruno Sobrino 
      (https://github.com/BrunoSobrino/TheMystic-Bot-MD) 
*/

let handler = async (m, { conn, args, groupMetadata, participants, usedPrefix, command, isBotAdmin, isSuperAdmin }) => {
if (!args[0]) return m.reply(`*[❗] أدخل بادئة بعض البلدان للبحث عن الأرقام في هذه المجموعة من هذا البلد، مثال : ${usedPrefix + command} 52*`) 
if (isNaN(args[0])) return m.reply(`*[❗] أدخل بادئة بعض البلدان للبحث عن الأرقام في هذه المجموعة من هذا البلد، على سبيل المثال: ${usedPrefix + command} 52*`) 
let lol = args[0].replace(/[+]/g, '')
let ps = participants.map(u => u.id).filter(v => v !== conn.user.jid && v.startsWith(lol || lol)) 
let bot = global.db.data.settings[conn.user.jid] || {}
if (ps == '') return m.reply(`*[❗] في هذه المجموعة لا يوجد رقم مع البادئة +${lol}*`)
let numeros = ps.map(v=> '⭔ @' + v.replace(/@.+/, ''))
const delay = time => new Promise(res=>setTimeout(res,time));
switch (command) {
case "قائمة_الارقام": 
conn.reply(m.chat, `*قائمة الأرقام مع البادئة +${lol} من هم في هذه المجموعة:*\n\n` + numeros.join`\n`, m, { mentions: ps })
break   
case "طرد_الارقام":  
if (!bot.restrict) return m.reply(' ❗] لم يتم تمكين القيود على مالك الروبوت (#𝚎𝚗𝚊𝚋𝚕𝚎 𝚛𝚎𝚜𝚝𝚛𝚒𝚌𝚝) اتصل به لتمكينه*') 
if (!isBotAdmin) return m.reply('*[❗معلومات❗] الروبوت ليس مشرفا ، ولا يمكنه إبادة الأشخاص*')          
conn.reply(m.chat, `*[❗] بدء حذف الأرقام مع البادئة +${lol}, كادا 𝟷0 ثواني سيتم حذف المستخدم*`, m)            
let ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net'
let users = participants.map(u => u.id).filter(v => v !== conn.user.jid && v.startsWith(lol || lol))
for (let user of users) {
let error = `@${user.split("@")[0]}  لقد تم ترضه او انه خرج بنفسه °_°*`    
if (user !== ownerGroup + '@s.whatsapp.net' && user !== global.conn.user.jid && user !== global.owner + '@s.whatsapp.net' && user.startsWith(lol || lol) && user !== isSuperAdmin && isBotAdmin && bot.restrict) { 
await delay(2000)    
let responseb = await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
if (responseb[0].status === "404") m.reply(error, m.chat, { mentions: conn.parseMention(error)})  
await delay(10000)
} else return m.reply('*[❗] خطأ*')}
break            
}}
handler.command = /^(قائمة_الارقام|طرد_الارقام)$/i
handler.group = handler.botAdmin = handler.admin = true
handler.fail = null
export default handler