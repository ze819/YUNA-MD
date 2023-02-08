import { instagramStalk } from '@bochilteam/scraper'

let handler= async (m, { args, usedPrefix, command }) => {
if (!args[0]) throw `${lenguajeGB['smsAvisoMG']()}
\nأدخل اسم مستخدم انستغرام\nمثال\n*${usedPrefix + command} a_e_b_2003*`
const {
username,
name,
description,
followersH,
followingH,
postsH,
} = await instagramStalk(args[0])
m.reply(`
┃ 𓃠 *${gt} ${vs}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ الاسم : *${name}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃  مستخدم : *${username}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ رابط : *https://instagram.com/${username.replace(/^@/, '')}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ المتابعين : *${followersH}* 
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ يتابع *${followingH}* 
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ الوظائف : *${postsH}* 
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ وصف : *${description}*
`.trim()) 
  
  let info = `💝 *تعرف على الجديد وتذكر أن يكون لديك أحدث إصدار.*
  `.trim()
  
await conn.sendHydrated(m.chat, info, wm, null, ig, 'انستغرام', null, null, [
['قائمه التحميل🌀', '#descargasmenu'],
['جميع الأوامر ✨', '.allmenu'],
['قائمة الأوام☘️', '/menu']
], m,)  
  
}
handler.help = ['igstalk'].map(v => v + ' <اسم المستخدم>')
handler.tags = ['downloader']
handler.command = /^(igstalk|verig|igver)$/i
handler.exp = 80
export default handler

