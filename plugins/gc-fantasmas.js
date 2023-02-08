import { areJidsSameUser } from '@adiwajshing/baileys'
let handler = async (m, { conn, text, participants, args, command }) => {
let member = participants.map(u => u.id)
if(!text) {
var sum = member.length
} else {
var sum = text} 
var total = 0
var sider = []
for(let i = 0; i < sum; i++) {
let users = m.isGroup ? participants.find(u => u.id == member[i]) : {}
if((typeof global.db.data.users[member[i]] == 'undefined' || global.db.data.users[member[i]].chat == 0) && !users.isAdmin && !users.isSuperAdmin) { 
if (typeof global.db.data.users[member[i]] !== 'undefined'){
if(global.db.data.users[member[i]].whitelist == false){
total++
sider.push(member[i])}
}else {
total++
sider.push(member[i])}}}
const delay = time => new Promise(res=>setTimeout(res,time));
switch (command) {
case "fantasmas": 
if(total == 0) return conn.reply(m.chat, `*[❗] هذه المجموعة نشطة ليس لديها
أشباح: D`, m) 
m.reply(`*[ ⚠ مراجعة غير نشطة ⚠ ]*\n\n*قروب:* ${await conn.getName(m.chat)}\n *أعضاء المجموعة :* ${sum}\n\n*[ 👻 قائمة الأشباح 👻 ]*\n${sider.map(v => '  👉🏻 @' + v.replace(/@.+/, '')).join('\n')}\n\n*ملاحظة: قد لا يكون هذا  ناجحا 100% ، يبدأ الروبوت في عدد الرسائل عند تنشيطه على هذا الرقم*`, null, { mentions: sider }) 
  break   
case "kickfantasmas":  
        if(total == 0) return conn.reply(m.chat, `*هذه المجموعة ليس لديها أشباح :D.*`, m) 
       await m.reply(`*[طرد الأشباح😀]*\n\n*قروب: ${await conn.getName(m.chat)}*\n*اعضاء: ${sum}*\n\n*[ 👻 طرد الأشباح 👻 ]*\n${sider.map(v => '@' + v.replace(/@.+/, '')).join('\n')}\n\n*سيقوم البوت بحذف القائمة المذكورة بدءا من 20 ثانية وكل 10 ثواني سيحذف رقم*, `, null, { mentions: sider }) 
       await delay(1 * 10000)
       let chat = global.db.data.chats[m.chat]
       chat.welcome = false
       try{
       
         let users = m.mentionedJid.filter(u => !areJidsSameUser(u, conn.user.id))
       let kickedGhost = sider.map(v => v.id).filter(v => v !== conn.user.jid)
       for (let user of users)
           if (user.endsWith('@s.whatsapp.net') && !(participants.find(v => areJidsSameUser(v.id, user)) || { admin: true }).admin)
        {
        let res = await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
        kickedGhost.concat(res)
       await delay(1 * 10000)
       }} finally{
        chat.welcome = true
       }
break            
}}
handler.command = /^(fantasmas|kickfantasmas)$/i
handler.group = handler.botAdmin = handler.admin = true
handler.fail = null
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))


    //desarrollado por https://github.com/ReyEndymion
    //participa en desactivacion de despedida https://github.com/BrunoSobrino/

