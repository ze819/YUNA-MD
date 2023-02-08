let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
import fetch from 'node-fetch';

let handler = async (m, { conn, args, usedPrefix, command, isPrems, isOwner, isROwner}) => {
try {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let grupos = [nna, nn, nnn, nnnt, nnntt, nnnttt]
let gata = [img5, img6, img7, img8, img9]
let enlace = { contextInfo: { externalAdReply: {title: wm + ' 🧸', body: 'support group' , sourceUrl: grupos.getRandom(), thumbnail: await(await fetch(gata.getRandom())).buffer() }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: '𝗦𝘂𝗽𝗲𝗿 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', thumbnailUrl: await(await fetch(img)).buffer(), sourceUrl: yt }}}
let dos = [enlace, enlace2]  

let texto0 = `${ag} \nقام منشئ المحتوى الخاص بي بتقييد وظيفة إدخال الروبوت مؤقتا إلى المجموعات التي تعود لاحقا أو تستخدم الوظيفة *${usedPrefix}jadibot*`
let texto1 = `${mg} استخدم الأمر مثل هذا المثال\n*${usedPrefix + command} ${grupos.getRandom()} 3*\n\n*3* توكين 🪙 = *30* دقيق `
let texto2 = `${ag} لم يعد لديك توكين! 🪙\n\nشراء الرموز لتتمكن من دعوة YUNA BOT إلى مجموعتك باستخدام الأمر *${usedPrefix}buy joincount 3*`
let texto3 = `${fg} رابط غير صالح. يجب أن يكون رابط مجموعة واتساب\n*${usedPrefix + command} ${grupos.getRandom()} 3*`
let texto4 = `${mg} أدخل عدد الرموز المميزة\n*3* الرموز 🪙 = *30* دقيق `
let texto5 = `${fg}  الحد الادني *3* الرموز لتكون قادرة على إضافة يونا `
let texto6 = `${fg} الحد الاقصي *3* الرموز لتكون قادرة على إضافة يونا `
let texto7 = `${eg} 👑 انضم يونا  إلى المجموعة!!! `

let img1 = 'https://img.freepik.com/vector-premium/animacion-monedas-pixeles-imagenes-animacion-moneda-oro-ilustracion-vectorial_350225-3.jpg?w=2000'
let img2 ='https://img.freepik.com/premium-vector/set-8bit-pixel-graphics-icons-game-art-coins-gold-animation_534389-12.jpg?w=2000'

if (!global.db.data.settings[conn.user.jid].temporal) return conn.sendButton( m.chat, wm, texto0, null, [[`🙌 أمر الطلب `, `.reporte *أريد توحيد يونا في مجموعتي. الرجاء تمكين الوظيفة #botemporal*`], [`🍀 الأوامر `, `.menu`]], fkontak, m) 

if (!args[0]) return conn.sendButton( m.chat, wm, texto1, null, [[`🍀 الأوامر `, `.menu`]], fkontak, m)
let [_, code] = args[0].match(linkRegex) || []

if (!linkRegex.test(args[0])) return conn.sendButton( m.chat, wm, texto3, null, [[`🍀 الأوامر `, `.menu`]], fkontak, m)
let user = db.data.users[m.sender]

if (!(isPrems || isOwner || isROwner)) { //Para Usuarios
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
//if (!args[1]) throw `${mg}*USE EL COMANDO COMO ESTE EJEMPLO*\n*${usedPrefix + command} enlace y Número de Token(s)*\n\n*EJEMPLO*\n*${usedPrefix + command} ${nn} 3*\n\n*3 TOKEN 🪙 = 30 MINUTOS*`
//if (!linkRegex.test(args[0])) throw `${fg}𝙀𝙉𝙇𝘼𝘾𝙀 𝙉𝙊 𝙑𝘼𝙇𝙄𝘿𝙊.` //Aquí 
if (user.joincount <= 1) return conn.sendButton( m.chat, wm, texto2, img1, [[`🏪 شراء 3 ${rpgshopp.emoticon('joincount')}`, `.buy joincount 3`]], fkontak, m)
if (isNaN(args[1])) return conn.sendButton( m.chat, wm, texto4, img1, [[`🍀 الاوامر`, `.menu`]], fkontak, m)
if (args[1] < 3) return conn.sendButton( m.chat, wm, texto5, img2, [[`🍀 الاوامر`, `.menu`]], fkontak, m)
if (args[1] > 3) return conn.sendButton( m.chat, wm, texto6, img2, [[`🍀 الاوامر`, `.menu`]], fkontak, m) 
//Solo ingresará si tiene 3 Token(s)
 await delay(5 * 5000)
let res = await conn.groupAcceptInvite(code)
await conn.sendButton( m.chat, texto7, `${await conn.getName(res)} | ` + wm, null, [[`🍀 الاوامر`, `.menu`]], fkontak, m).then(async() => { 
user.joincount -= args[1] 
var jumlahHari = 600000 * args[1] // 10 minutos | Usuarios
var now = new Date() * 1
 
 await delay(5 * 5000)
if (now < global.db.data.chats[res].expired) global.db.data.chats[res].expired += jumlahHari
else global.db.data.chats[res].expired = now + jumlahHari
await conn.sendButton( m.chat, wm, `✅ انضم إلى المجموعة \n${await conn.getName(res)}\n\n تذكر ما هو عليه ⏳ مؤقت ، استخدم الأمر *${usedPrefix}menu* لرؤية القائمة \n\n🚪 يتم حفظي تلقائيا. :\n${msToDate(global.db.data.chats[res].expired - now)}\n\n*${username}* لديك أي خيار متبقي *${user.joincount}* رمز مميز🪙\n\n❕ يمكنك استخدام الأمر *${usedPrefix + command}* أيضا في المجموعة بينما هذا لي \n\n❕\n*${usedPrefix + command}*\n\n❕ للحصول على تجربة أفضل ، يجب أن أكون مشرفا \n\n❗ في حالة قيام أحد المشرفين بإزالتي من المجموعة ويريد مني العودة ، فلن يتمكن من ذلك `, null, [[`+30 دقائق المجموعة`, `${usedPrefix + command} ${args[0]} 3`], [`🍀 الأوامر`, `.menu`]], fkontak, m)
await conn.sendButton( m.chat, botdate, `${igfg} إنه روبوت WHATSAPP سيساعدك على أداء أنشطة مختلفة 🪄 إلى القطاع الخاص أو المجموعة ، وسوف يكون لديك أيضا متعة 🎈 مع وظائفه العديدة ، استمتع ب YUNABOT😸\n\n💖 يونا بوت تمت دعوته من قبل:\n*${username}*`, gata.getRandom(), [[`🍀 جميع الأوامر `, `.allmenu`]], fkontak, m)
//for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
//let data = (await conn.onWhatsApp(jid))[0] || {}
  //if (data.exists) 
    //conn.reply(m.chat, `@${m.sender.split`@`[0]} adicional ${conn.user.name} a ${await conn.getName(res)}\njid: ${res}, el bot se apagará a tiempo: ${msToDate(global.db.data.chats[res].expired - now)}`, data.jid, m) 
})

       
} else if ((isOwner || !isPrems || isROwner)) { //Para Owner
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
  
if (user.joincount === 0 ) throw `${ag}*¡_ لم يعد لديك رموز بعد الآن! 🪙*\n\n*قم بشراء الرموز لتتمكن من دعوة YUNABOT إلى مجموعتك باستخدام الأمر *${usedPrefix} شراء  joincount 3 o ${usedPrefix} شراء لعرض المتجر*`
 if (!args[1]) throw `${mg}*_ استخدم الأمر كمثال _*\n*${usedPrefix + command} الرابط ورقم الرمز المميز *\n\n*مثل*\n*${usedPrefix + command} ${nn} 3*\n\n*3 رمز مميز 🪙 = 30 دقيق*`
if (!linkRegex.test(args[0])) throw `${fg} رابط غير صالح .` //Aquí 

await delay(5 * 5000)
let res = await conn.groupAcceptInvite(code) 
conn.reply(m.chat, `${eg}👑 *تن إضافة البوت بنجاح!*`, m).then(async() => { //Si el Owner se une al Grupo no habrá temporizador
let img = 'https://i.imgur.com/muIYlKI.jpeg'
 var jumlahHari = 600000 * args[1] // 10 minutos | Owner
 var now = new Date() * 1
  if (now < global.db.data.chats[res].expired) global.db.data.chats[res].expired += jumlahHari
else global.db.data.chats[res].expired = now + jumlahHari

await conn.reply(m.chat, `✅ لقد انضم إلى المجموعة!\n${await conn.getName(res)}\n\n*تذكر أنه ⏳ مؤقت ، استخدم الأمر ${usedPrefix}menu كيفية عرض القائمة*\n\n🚪 *سأغادر تلقائيا:*\n${msToDate(global.db.data.chats[res].expired - now)}\n\n${username} *لديك أي خيار متبقي ${user.joincount} رمز مميز 🪙*\n\n❕ *يمكنك أيضا استخدام الأمر في مجموعة أثناء هذا لي*\n\n❕ *إذا كنت تريد زيادة عدد الرموز المميزة لفترة أطول عند استخدام الأمر*\n*${usedPrefix + command}*\n\n❗ *في حالة قيام أحد المشرفين بإزالتي من المجموعة ويريد مني العودة ، فلن يكون ذلك ممكنا*`, m)  
await conn.reply(m.chat, `${wm} *إنه روبوت واتساب سيساعدك على أداء أنشطة 🪄 مختلفة خاصة أو جماعية وستستمتع 🎈 أيضا بوظائفه المتعددة ، استمتع ب YUNABOT!! 😸*\n\n💖 *تمت دعوة يونابوت من قبل:*\n${username}`, m)
for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != m.sender)) {
let data = (await conn.onWhatsApp(jid))[0] || {}
  if (data.exists) 
    conn.reply(m.chat, `@${m.sender.split`@`[0]} adicional ${conn.user.name} a ${await conn.getName(res)}\njid: ${res}, el bot se apagará a tiempo: ${msToDate(global.db.data.chats[res].expired - now)}`, data.jid, m)
                
} conn.sendButton(m.chat, '', wm, null, [['مالك', `/creadora`], ['الأوامر ☘️', '/menu']], m, res) })}
} catch (e) {
await conn.reply(m.chat, `${fg}\`\`\`الأسباب المحتملة
- الرابط غير صحيح أو منتهي الصلاحية.
- لا يمكنني الانضمام إذا تمت إزالتي من المجموعة سابقا.
- المجموعة ممتلئة ، لذلك لا يمكنني الانضمام.
\`\`\``, m)
console.log(e)}
}
handler.help = ['temporal', 'tiempo']
handler.command = ['bottemporal', 'botemporal', 'addbot', 'botadd']
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
function msToDate(ms) {
let temp = ms
let days = Math.floor(ms / (24 * 60 * 60 * 1000));
let daysms = ms % (24 * 60 * 60 * 1000);
let hours = Math.floor((daysms) / (60 * 60 * 1000));
let hoursms = ms % (60 * 60 * 1000);
let minutes = Math.floor((hoursms) / (60 * 1000));
let minutesms = ms % (60 * 1000);
let sec = Math.floor((minutesms) / (1000));
return days + " *ايام* ☀️\n" + hours + " *س* ⏳\n" + minutes + " *د* ⏰\n" + sec + " *ث* 🕐\n";
}
