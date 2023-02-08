import fetch from 'node-fetch'
let handler = async(m, { conn, text, command, usedPrefix }) => {
if (!text) return conn.reply(m.chat, `${lenguajeGB['smsAvisoMG']()} اكتب اسم مستخدم TIKTOK الخاص بك دون استخدام  "@"\nمثل\n*${usedPrefix + command} universo_editx*`, m)
try {
let res = await fetch(`https://api.lolhuman.xyz/api/stalktiktok/${text}?apikey=9b817532fadff8fc7cb86862`)
let res2 = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=9b817532fadff8fc7cb86862`
let json = await res.json()
if (res.status !== 200) throw await res.text()
if (!json.status) throw json
let thumb = await (await fetch(json.result.user_picture)).buffer()
let gata = `
👤  مستخدم
${json.result.username}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✨  | اسم
${json.result.nickname}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅  | المتابعين
${json.result.followers}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
❇️  | يتابع
${json.result.followings}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
❤️  | اعجابات
${json.result.likes}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🎁  | بوست
${json.result.video}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
👀  | وصف
${json.result.bio}
`.trim()
await conn.sendFile(m.chat, res2, 'error.jpg', gata, m, false)
} catch (e) {
throw `${lenguajeGB['smsAvisoFG']()} لم يتم العثور على اسم مستخدم. `
}
let info = `💖 *تعرف على الجديد وتذكر أن يكون لديك أحدث إصدار.*
  `.trim()
  
await conn.sendHydrated(m.chat, info, wm, null, ig, 'انستغرام', null, null, [
['جمي الاوامر✨', '.allmenu'],
['الأوامر☘️', '/menu']
], m,)  

}
handler.help = ['tiktokstalk'].map(v => v + ' <username>')
handler.tags = ['stalk']
handler.command = /^(tiku|ttstalk)$/i
handler.exp = 48
export default handler
