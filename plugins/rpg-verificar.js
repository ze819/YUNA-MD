//CÓDIGO CREADO POR GataNina-Li : https://github.com/GataNina-Li
import { createHash } from 'crypto'
let nombre = 0, edad = 0, genero = 0, bio = 0, identidad = 0, pasatiempo = 0, registro, _registro, fecha, hora, tiempo, registrando
let pas1 = 0, pas2 = 0, pas3 = 0, pas4 = 0, pas5 = 0  

let handler = async function (m, { conn, text, command, usedPrefix }) {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }	
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
}) 

let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? m.sender : m.sender
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
let nombreWA = await usedPrefix + conn.getName(m.sender) //'@' + m.sender.split("@s.whatsapp.net")[0] 
let user = global.db.data.users[m.sender]
let verificar = new RegExp(usedPrefix)
let biografia = await conn.fetchStatus(m.sender).catch(_ => 'undefined')
bio = biografia.status?.toString() || 'No encontrada'
let intervalId

function mensajeRegistro() {
if (typeof edad === 'number' ) {
clearInterval(intervalId)
registrando = false
nombre = 0
m.reply('```لم يكتمل التسجيل. حاول مرة أخرى```')
return
}
if (user.registered === true) {
clearInterval(intervalId)
return 
}
if (typeof genero === 'string') {
clearInterval(intervalId)
global.db.data.users[m.sender]['registroC'] = true
registrando = false
conn.sendButton(m.chat, "*انتهى وقت التسجيل الخاص بك !!*", 'إذا لم تستخدم الزر أدناه في هذا الوقت ، فلن يتم حفظ السجل الخاص بك ، وإذا قمت بالحفظ لاحقا ، فقد السجل الخاص بك\n\n' + wm, null, [[` إنهاء التسجيل`, usedPrefix + 'finalizar']], m)	
}else{
clearInterval(intervalId)
global.db.data.users[m.sender]['registroR'] = true		
registrando = false
conn.sendButton(m.chat, "*انتهى وقت التسجيل الخاص بك !!*", 'إذا لم تستخدم الزر أدناه في هذا الوقت ، فلن يتم حفظ السجل الخاص بك ، وإذا قمت بالحفظ لاحقا ، فقد السجل الخاص بك\n\n' + wm, null, [[` إنهاء التسجيل `, usedPrefix + 'finalizar']], m)}
}
		
if (user.registered === true) throw `${iig} انت مسجل بلفعل \nإذا كنت تريد إلغاء التسجيل ، فاستخدم هذا الأمر\n*${usedPrefix}unreg الرقم التسلسلي*\n\nإذا كنت لا تتذكر الرقم التسلسلي الخاص بك ، فاستخدم هذا الأمر\n*${usedPrefix}myns*` 	

if (command == 'verificar' || command == 'verify' || command == 'register' || command == 'reg' || command == 'registrar') {
if (registrando === true) throw '*شخص ما يسجل ... يرجى الانتظار 2 دقيقة*'
await conn.sendButton(m.chat, iig + '👀 *كيف تريد التسجيل؟*', '📑 *التسجيل السريع*\n• شارة إثبات الملكية\n• إلغاء تأمين الأوامر التي تتطلب التسجيل\n\n🗂️ *التسجيل الكامل*\n• شارة إثبات الملكية\n• إلغاء تأمين الأوامر التي تتطلب التسجيل\n• بريميوم مؤقت مجاني\n• المزيد من الخيارات لهذا التسجيل\n\n' + wm, null, [[`📑 تسجيل سريع`, usedPrefix + 'Reg1'], [`🗂️ التسجيل الكامل`, usedPrefix + 'nombre']], m) 
}
	
if (command == 'reg1') {
registrando = true
if (registrando === true) {
intervalId = setInterval(mensajeRegistro, 2 * 60 * 1000) //2 min
setTimeout(() => {
clearInterval(intervalId)}, 126000) //2.1 min
}
	
registro = text.replace(/\s+/g, usedPrefix) 
_registro = text.split(" ",2) 
if (!text) return conn.sendButton(m.chat, iig + `👉 *معلمات التسجيل:*\n\`\`\`${usedPrefix + command} nombre edad\`\`\`\n\n*EJEMPLO:* \`\`\`${usedPrefix + command} ${gt} 20\`\`\``, '✨ ```نصيحة:```\n• يجب ألا يحتوي اسمك على أرقام\n• La يجب ألا يحتوي العمر على رسائل\n\n*هل تعلم أنه يمكنك تخصيص تسجيلك؟*\n➘ _باستخدام الزر أدناه_', null, [[`🗂️ استخدم التسجيل الكامل`, usedPrefix + 'nombre']], m)
if (_registro['length'] >= 3 || isNaN(_registro[1])) return conn.sendButton(m.chat, fg + '🙃 *هل تحاول أن تفصل اسمك أو توحد كل شيء؟* ', '🧐 *يتزامن كما في هذه الأمثلة:*\n' + `\`\`\`${usedPrefix + command} Super${gt}20\`\`\`` + '\n' + `\`\`\`${usedPrefix + command} Super 15 ${gt} \`\`\`` + '\n' + `\`\`\`${usedPrefix + command} Super ${gt} 24 De ${author}\`\`\`\n\n` + '*إذا قابلت أن لديك (الاسم / العبارة والعمر) ، فسنقوم بإكمال تسجيلك تلقائيا ، وإلا أعد التسجيل*\n➘ _استخدم الزر أدناه_', null, [[`🌟 الإكمال التلقائي لتسجيلي`, usedPrefix + 'reg1' + ' ' + text.replace(/\s+/g, '').replace(/[0-9]+/gi, "") + ' ' + text.replace(/\s+/g, '').replace(/[a-z]+/gi, "")], ['📑 إعادة التسجيل', command + usedPrefix]], m)
if (!_registro[0]) return conn.sendButton(m.chat, fg + `*اسمك مفقود ، معلمات التسجيل:*\n\`\`\`${usedPrefix + command} nombre edad\`\`\``, wm, null, [[`🗂️ استخدم التسجيل الكامل`, usedPrefix + 'nombre']], m)
if (_registro[0].length >= 20) throw fg + '*اسمك طويل جدا ، يرجى استخدام اسم آخر*' 
if (_registro[0].length <= 3) throw fg + '*اسمك قصير جدا ، يرجى استخدام اسم آخر*'
_registro[0] = text.replace(/\s+/g, '').replace(/[0-9]+/gi, "")
nombre = _registro[0]
	
if (!_registro[1]) return conn.sendButton(m.chat, fg + `*عمرك مفقود ، معلمات التسجيل:*\n\`\`\`${usedPrefix + command} nombre edad\`\`\``, wm, null, [[`🗂️ استخدم التسجيل الكامل`, usedPrefix + 'nombre']], m)
if (_registro[1] > 50) throw fg + `*عمرك قديم جدا ، يرجى استخدام عمر آخر*\n\n*معلمات التسجيل:*\n\`\`\`${usedPrefix + command} nombre edad\`\`\``
if (_registro[1] < 10) throw fg + `*عمرك أصغر جدا ، يرجى استخدام عمر آخر*\n\n*معلمات التسجيل:*\n\`\`\`${usedPrefix + command} nombre edad\`\`\``
edad = parseInt(_registro[1]) //_registro[1]	
global.db.data.users[m.sender]['registroR'] = true
	
await conn.sendButton(m.chat, eg + '*عظيم!! تم الانتهاء من ما يلي*\n*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*\n\n*❖ الاسم:* ' + `${nombre === 0 ? 'لم يتم العثور على' : nombre}` + '\n' + '*❖ عمر:* ' + `${edad === 0 ? 'لم يتم العثور على' : edad + ' سنة'}`, wm, null, [[` إنهاء التسجيل`, usedPrefix + 'finalizar']], m)	
}
		
if (command == 'nombre' || command == 'name') {
registrando = true
if (registrando === true) {
intervalId = setInterval(mensajeRegistro, 3 * 60 * 1000) //3 min
setTimeout(() => {
clearInterval(intervalId)}, 186000) //3.1 min
}
if (typeof nombre === 'string') fg + '*لا يمكنك تغيير اسمك*\n\n_بمجرد تحديده لا يمكن تعديله_'
if (verificar.test(text) == false || text.length <= 1) return conn.sendButton(m.chat, iig + '👉 *تخصيص اسمك للتسجيل ، على سبيل المثال:*\n' + '```' + usedPrefix + command + ' ' + gt + '```', '*يمكنك أيضا ربط اسم واتساب الخاص بك*\n➘ _باستخدام الزر أدناه_', null, [[`📲 التسجيل عبر الواتساب`, `${usedPrefix + 'nombre2'}`]], m)
if (text.length >= 20) return conn.sendButton(m.chat, fg + '*استخدم اسما أقصر، على سبيل المثال:*\n' + '```' + usedPrefix + command + ' ' + gt + '```', '*هل تريد استخدام اسمك المسجل على WhatsApp الخاص بك  ?*\n➘ _في هذه الحالة ، استخدم الزر لأسفل_', null, [[`📲 التسجيل عبر الواتساب`, usedPrefix + 'nombre2']], m)
if (text.length <= 2) return conn.sendButton(m.chat, fg + '*اسم مفقود أو قصير جدا ، مثال:*\n' + '```' + usedPrefix + command + ' ' + gt + '```', '*هل تريد استخدام اسمك المسجل على WhatsApp الخاص بك؟*\n➘ _في هذه الحالة ، استخدم الزر لأسفل_', null, [[`📲 التسجيل عبر الواتساب`, usedPrefix + 'nombre2']], m) 
nombre = text.replace(/\s+/g, '').replace(/[0-9]+/gi, "").trim()
user.name = nombre
if (verificar.test(text) == true) return conn.sendButton(m.chat, eg + '*عظيم!! تم الانتهاء من ما يلي*\n*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*\n\n*❖ الاسم:* ' + `${nombre === 0 ? 'لم يتم العثور على' : nombre}`, wm, null, [[`🔢 سجل عمري`, usedPrefix + 'edad']], m)
}
	
if (command == 'nombre2' || command == 'name2') {
if (typeof nombre === 'string') fg + '*لا يمكنك تغيير اسمك*\n\n_بمجرد تحديده لا يمكن تعديله_'
if (nombreWA.slice(1).length < 2) return conn.sendButton(m.chat, fg + '*اسم WHATSAPP الخاص بك قصير جدا بحيث لا يمكن التسجيل فيه * ' + '```' + usedPrefix + command + '```', '*قم بتعديل اسم WhatsApp الخاص بك وحاول مرة أخرى أو يمكنك تخصيص اسمك*\n➘ _إذا كنت ترغب في التخصيص ، فاستخدم الزر أدناه_', null, [[`📇 تخصيص التسجيل`, usedPrefix + 'nombre']], m) 
if (nombreWA.slice(1).length > 20) return conn.sendButton(m.chat, fg + '*اسم WHATSAPP الخاص بك طويل جدا للتسجيل باستخدام* ' + '```' + usedPrefix + command + '```', '*قم بتعديل اسم WhatsApp الخاص بك وحاول مرة أخرى أو يمكنك تخصيص اسمك*\n➘ _إذا كنت ترغب في التخصيص ، فاستخدم الزر أدناه_', null, [[`📇 تخصيص التسجيل`, usedPrefix + 'nombre']], m)
nombre = nombreWA.replace(/\s+/g, '').replace(/[0-9]+/gi, "").slice(1).trim()
user.name = nombre
if (verificar.test(text) == false) return conn.sendButton(m.chat, eg + '*عظيم!! تم الانتهاء من ما يلي*\n*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*\n\n*❖ الاسم:* ' + `${nombre === 0 ? 'لم يتم العثور على' : nombre}`, wm, null, [[`🔢 سجل عمري`, usedPrefix + 'edad']], m)
}
	
if (command == 'edad' || command == 'age') {
const sections = [
{ title: "🌟 حدد عمرك!!",
rows: [ {title: "♻️ عمر عشوائي", rowId: usedPrefix + command + ' ' + usedPrefix +  text + pickRandom(['30','29','28','27','26','25','24','23','22','21','20','19','18','17','16','15','14','13','12','11','10','31'])}]
}, {
title: "🍃 صغير",
rows: [
{title: "1️⃣0️⃣ سنة", rowId: usedPrefix + command + ' ' + usedPrefix + text + '10'},
{title: "1️⃣1️⃣ سنة", rowId: usedPrefix + command + ' ' + usedPrefix + text + '11'},
{title: "1️⃣2️⃣ سنة", rowId: usedPrefix + command + ' ' + usedPrefix + text + '12'},
{title: "1️⃣3️⃣ سنة", rowId: usedPrefix + command + ' ' + usedPrefix + text + '13'},
{title: "1️⃣4️⃣ سنة", rowId: usedPrefix + command + ' ' + usedPrefix + text + '14'},
{title: "1️⃣5️⃣ سنة", rowId: usedPrefix + command + ' ' + usedPrefix + text + '15'},
{title: "1️⃣6️⃣ سنة", rowId: usedPrefix + command + ' ' + usedPrefix + text + '16'},
{title: "1️⃣7️⃣ سنة", rowId: usedPrefix + command + ' ' + usedPrefix + text + '17'}]
}, {
title: "🌳 بالغ",
rows: [
{title: "1️⃣8️⃣ سنة", rowId: usedPrefix + command + ' ' + usedPrefix + text + '18'},
{title: "1️⃣9️⃣ سنة", rowId: usedPrefix + command + ' ' + usedPrefix + text + '19'},
{title: "2️⃣0️⃣ سنة", rowId: usedPrefix + command + ' ' + usedPrefix + text + '20'},
{title: "2️⃣1️⃣ سنة", rowId: usedPrefix + command + ' ' + usedPrefix + text + '21'},
{title: "2️⃣2️⃣ سنة", rowId: usedPrefix + command + ' ' + usedPrefix + text + '22'},
{title: "2️⃣3️⃣ سنة", rowId: usedPrefix + command + ' ' + usedPrefix + text + '23'},
{title: "2️⃣4️⃣ سنة", rowId: usedPrefix + command + ' ' + usedPrefix + text + '24'},
{title: "2️⃣5️⃣ سنة", rowId: usedPrefix + command + ' ' + usedPrefix + text + '25'},
{title: "2️⃣6️⃣ سنة", rowId: usedPrefix + command + ' ' + usedPrefix + text + '26'},
{title: "2️⃣7️⃣ سنة", rowId: usedPrefix + command + ' ' + usedPrefix + text + '27'},
{title: "2️⃣8️⃣ سنة", rowId: usedPrefix + command + ' ' + usedPrefix + text + '28'},
{title: "2️⃣9️⃣ سنة", rowId: usedPrefix + command + ' ' + usedPrefix + text + '29'},
{title: "3️⃣0️⃣ سنة", rowId: usedPrefix + command + ' ' + usedPrefix + text + '30'}]
}, {
title: "🤔 أليس عمرك؟",
rows: [
{title: "🔢 تخصيص عمري", rowId: usedPrefix + 'edad2'}]},]

const listMessage = {
text: `👉 *يرجى تحديد عمرك*\n*❖ الاسم:* ${nombre}\n\n*╰⸺ ⊹ ⸺  ⊹ ⸺ ⊹ ⸺ ⊹ ⸺ ⊹ 》*`,
footer: wm,
title: "*╭⸺ ⊹ ⸺  ⊹ ⸺ ⊹ ⸺ ⊹ ⸺ ⊹ 》*\n",
buttonText: "🫵 اختر العمر 🫵 ",
sections
}

if (!text) return conn.sendMessage(m.chat, listMessage, {quoted: fkontak})
if (text.slice(1).trim() > 50) throw fg + '*أكبر من أن يتم تسجيلها*'
if (text.slice(1).trim() < 10) throw fg + '*قاصر جدا بحيث لا يمكن تسجيله*' //.replace(/[^0-9.]+/gi,' ')
edad = text.replace(/[.,\/#!$%\^&\*;:{}@=\-_`~()\s\a-z]/gi, "").trim()
user.age = edad
if (verificar.test(text) == true) return conn.sendButton(m.chat, eg + '*عظيم!! تم الانتهاء من ما يلي*\n*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*\n\n*❖ الاسم:* ' + `${nombre === 0 ? 'لم يتم العثور على' : nombre}` + '\n' + '*❖ عمر:* ' + `${edad === 0 ? 'لم يتم العثور على' : edad + ' سنة'}`, wm, null, [[`🍃 تسجيل جنسي `, usedPrefix + `genero`]], m)
}
	
if (command == 'edad2' || command == 'age2') {
if (typeof edad === 'string') fg + '*لا يمكنك تغيير عمرك*\n\n_بمجرد تحديده لا يمكن تعديله_'
if (verificar.test(text.slice(1)) == false && !text) return conn.sendButton(m.chat, iig + '👉 *خصص عمرك للتسجيل، على سبيل المثال:*\n' + usedPrefix + command + ' ' + '35', '*هل تعلم أنه يمكنك تحديد عمرك؟*\n➘ _في هذه الحالة ، استخدم الزر لأسفل_', null, [[`🔢 سجل عمري`, usedPrefix + 'edad']], m)
if (isNaN(text)) throw fg + '*أدخل الأرقام فقط*'
if (text > 50) throw fg + '*أكبر من أن يتم تسجيلك*'
if (text < 10) throw fg + '*قاصر جدا بحيث لا يمكن تسجيله*'
edad = text.replace(/[.,\/#!$%\^&\*;:{}@=\-_`~()\s\a-z]/gi, "")
user.age = edad
if (verificar.test(text) == true) return conn.sendButton(m.chat, eg + '*عظيم!! تم الانتهاء من ما يلي*\n*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*\n\n*❖ الأسم:* ' + `${nombre === 0 ? 'لم يتم العثور على' : nombre}` + '\n' + '*❖ عمر:* ' + `${edad === 0 ? 'لم يتم العثور على' : edad + ' سنة'}`, wm, null, [[`🧬 تسجيل جنسي `, usedPrefix + `genero`]], m)
}
	
if (command == 'genero' || command == 'género' || command == 'gender') {
const sections = [
{ title: "🌟 حدد جنسك!!",
title: comienzo + " 🚹 ذكر " + fin,
rows: [ 
{title: "🚹 رجل", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'رجل' }]
}, {
title: comienzo + " 🚺 أنثى " + fin,
rows: [
{title: "🚺 امرأة", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'امرأة' }]
}, {
title: comienzo + " 👤 إخفاء الجنس " + fin,
rows: [
{title: "🕶️ أخفى", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'مخفي' }]},]

const listMessage = {
text: `👉 *الرجاء تحديد جنسك*\n*❖ الاسم:* ${nombre === 0 ? 'لم يتم العثور على' : nombre}\n*❖ عمر:* ${edad === 0 ? 'لم يتم العثور على' : edad}\n\n*╰⸺ ⊹ ⸺  ⊹ ⸺ ⊹ ⸺ ⊹ ⸺ ⊹ 》*`,
footer: wm,
title: "*╭⸺ ⊹ ⸺  ⊹ ⸺ ⊹ ⸺ ⊹ ⸺ ⊹ 》*\n",
buttonText: "🧬 اختر الجنس 🧬 ",
sections
}

if (!text) return conn.sendMessage(m.chat, listMessage, {quoted: fkontak})
genero = text.slice(1).trim()	
user.genero = genero
if (verificar.test(text) == true) return conn.sendButton(m.chat, eg + '*عظيم!! تم الانتهاء من ما يلي*\n*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*\n\n*❖ الاسم:* ' + `${nombre === 0 ? 'لم يتم العثور على' : nombre}` + '\n' + '*❖ عمر:* ' + `${edad === 0 ? 'لم يتم العثور على' : edad + ' سنة'}` + '\n' + '*❖ جنسك:* ' + `${genero === 0 ? 'لم يتم العثور على' : genero}`, wm, null, [[`🌱 REGISTRAR MI IDENTIDAD`, usedPrefix + 'identidad']], m)	 
}
	
if (command == 'identidad' || command == 'identity') {
const sections = [
{ title: "🌱 حدد هويتك الجنسية !!",
rows: [
{title: "• سوريا", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'سوريا' },	
{title: "⬆️ بحث في قوقل⬆️", rowId: usedPrefix + 'google' + ' ' + 'سوريا'},		
{title: "• مصر", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'مصر' },
{title: "⬆️ بحث في قوقل ⬆️", rowId: usedPrefix + 'google' + ' ' + 'مصر'},	
{title: "• السودان", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'السودان' },
{title: "⬆️ بحث في قوقل ⬆️", rowId: usedPrefix + 'google' + ' ' + 'السودان'},	
{title: "• تونس", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'تونس' },
{title: "⬆️ بحث في قوقل ⬆️", rowId: usedPrefix + 'google' + ' ' + 'تونس'},		
{title: "• الصومال", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'الصومال' },
{title: "⬆️ بحث في قوقل ⬆️", rowId: usedPrefix + 'google' + ' ' + 'الصومال'},	
{title: "• المغرب", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'المغرب' },
{title: "⬆️ بحث في قوقل ⬆️", rowId: usedPrefix + 'google' + ' ' + ' المغرب '},	
{title: "• العراق", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'العراق' },
{title: "⬆️ بحث في قوقل ⬆️", rowId: usedPrefix + 'google' + ' ' + 'العراق'},	
{title: "• السعودية", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'السعودية' },
{title: "⬆️ بحث في قوقل ⬆️", rowId: usedPrefix + 'google' + ' ' + 'السعودية'},	
{title: "• اليمن", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'اليمن' },
{title: "⬆️ بحث في قوقل ⬆️", rowId: usedPrefix + 'google' + ' ' + 'اليمن'},	
{title: "• ليبيا", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'ليبيا' },
{title: "⬆️ بحث في قوقل ⬆️", rowId: usedPrefix + 'google' + ' ' + 'ليبيا'},	
{title: "• الأردن", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'الأردن' },
{title: "⬆️ بحث في قوقل ⬆️", rowId: usedPrefix + 'google' + ' ' + 'الأردن'},	
{title: "• الإمارات", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'الإمارات' },
{title: "⬆️ بحث في قوقل ⬆️", rowId: usedPrefix + 'google' + ' ' + 'الإمارات'},	
{title: "• لبنان", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'لبنان' },
{title: "⬆️ بحث في قوقل ⬆️", rowId: usedPrefix + 'google' + ' ' + 'لبنان'},	
{title: "• الكويت", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'الكويت' },
{title: "⬆️ بحث في قوقل ⬆️", rowId: usedPrefix + 'google' + ' ' + 'الكويت'},	
{title: "• عمان", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'عمان' },
{title: "⬆️ بحث في قوقل ⬆️", rowId: usedPrefix + 'google' + ' ' + 'عمان'},	
{title: "• قطر", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'قطر' },
{title: "⬆️ بحث في قوقل ⬆️", rowId: usedPrefix + 'google' + ' ' + 'قطر'},	
{title: "• البحرين", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'البحرين' },
{title: "⬆️ بحث في قوقل ⬆️", rowId: usedPrefix + 'google' + ' ' + 'البحرين'},	
{title: "• فلسطين", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'فلسطين' },
{title: "⬆️ بحث في قوقل ⬆️", rowId: usedPrefix + 'google' + ' ' + 'فلسطين'},	
{title: "• جزر القمر", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'جزر القمر' },
{title: "⬆️ بحث في قوقل ⬆️", rowId: usedPrefix + 'google' + ' ' + 'جزر القمر'}]
}, {
title: comienzo + " 👤 إخفاء الهوية " + fin,
rows: [
{title: "🕶️ أخفى", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'مخفي' }]},]

const listMessage = {
text: `👉 *حدد هويتك الجنسية من فضلك*\n*❖ الاسم:* ${nombre === 0 ? 'لم يتم العثور على' : nombre}\n*❖ عمر:* ${edad === 0 ? 'لم يتم العثور على' : edad}\n*❖ جنسك:* ${genero === 0 ? 'لم يتم العثور على' : genero}\n\n*╰⸺ ⊹ ⸺  ⊹ ⸺ ⊹ ⸺ ⊹ ⸺ ⊹ 》*`,
footer: wm,
title: "*╭⸺ ⊹ ⸺  ⊹ ⸺ ⊹ ⸺ ⊹ ⸺ ⊹ 》*\n",
buttonText: "🌱 الهوية الجنسية 🌱",
sections
}

if (!text) return conn.sendMessage(m.chat, listMessage, {quoted: fkontak})
identidad = text.slice(1).trim()
user.identidad = identidad
if (verificar.test(text) == true) return conn.sendButton(m.chat, eg + '*عظيم!! تم الانتهاء من ما يلي*\n*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*\n\n*❖ الاسم:* ' + `${nombre === 0 ? 'لم يتم العثور على' : nombre}` + '\n' + '*❖ غمر:* ' + `${edad === 0 ? 'لم يتم العثور على' : edad + ' سنة'}` + '\n' + '*❖ جنس:* ' + `${genero === 0 ? 'لم يتم العثور على' : genero}` + '\n' + '*❖ الهوية الجنسية:* ' + `${identidad === 0 ? 'لم يتم العثور على' : identidad}`, wm, null, [[`❇️ سجل هواياتي`, usedPrefix + 'pasatiempo']], m)
}
	
const sections = [
{ title: "❇️ حدد ما يصل إلى 5 هوايات !!",
rows: [
{title: "جمع العملات 🪙", rowId: usedPrefix + command + ' ' + text + 'جمع العملات 🪙' },		
{title: "🎭 اداء", rowId: usedPrefix + command + ' ' + text + '🎭 اداء' },	
{title: "🥋 كرتي", rowId: usedPrefix + command + ' ' + text + '🥋 كرتي' },	
{title: "🎯 رماية ", rowId: usedPrefix + command + ' ' + text + '🎯 رماية' },
{title: "♟️ شطرنج", rowId: usedPrefix + command + ' ' + text + '♟️ شطرنج' },
{title: "🏔️ تسلق الجبال", rowId: usedPrefix + command + ' ' + text + '🏔️ تسلق الجبال' },
{title: "🖥️ رسم متحرك", rowId: usedPrefix + command + ' ' + text + '🖥️ رسم متحرك' },
{title: "🎉 رسم", rowId: usedPrefix + command + ' ' + text + '🎉 رسم' },
{title: "✏️ رسومات أنيمي", rowId: usedPrefix + command + ' ' + text + '✏️ رسومات أنيمي' },	
{title: " 🐱تربية قطط", rowId: usedPrefix + command + ' ' + text + '🐱 تربية قطط' },
{title: "💻 تعلم البرمجة", rowId: usedPrefix + command + ' ' + text + '💻 تعلم البرمجة' },
{title: "🌐 تعلم لغات", rowId: usedPrefix + command + ' ' + text + '🌐 تعلم لغات' },
{title: "🏌️الجولف", rowId: usedPrefix + command + ' ' + text + '🏌️الجولف' },
{title: "🔫 كرة الطلاء", rowId: usedPrefix + command + ' ' + text + '🔫 كرة الطلاء' },
{title: "🥋 فنون الدفاع عن النفس", rowId: usedPrefix + command + ' ' + text + '🥋 فنون الدفاع عن النفس' },
{title: "🥋 فنون القتال المختلطة", rowId: usedPrefix + command + ' ' + text + '🥋 Aمختلط الدفاع عن النفس' },
{title: "🔭 التصوير الفلكي", rowId: usedPrefix + command + ' ' + text + '🔭 التصوير الفلكي' },
{title: "🔮 تنجيم", rowId: usedPrefix + command + ' ' + text + '🔮 تنجيم' },
{title: "👟 العاب القوي", rowId: usedPrefix + command + ' ' + text + '👟 العاب القوي' },
{title: "🩰 رقص", rowId: usedPrefix + command + ' ' + text + '🩰 رقص' },
{title: "💄 جمال", rowId: usedPrefix + command + ' ' + text + '💄 جمال' },
{title: "🏔️ التجديف", rowId: usedPrefix + command + ' ' + text + '🏔️ التجديف' },
{title: "💻 المدونة", rowId: usedPrefix + command + ' ' + text + '💻 المدونة' },
{title: "✏️ الرسومات", rowId: usedPrefix + command + ' ' + text + '✏️ الرسومات' },
{title: "✂️ تطريز", rowId: usedPrefix + command + ' ' + text + '✂️ تطريز' },
{title: "🎳 البولنج", rowId: usedPrefix + command + ' ' + text + '🎳 البولنج' },
{title: "🥊 ملاكمة", rowId: usedPrefix + command + ' ' + text + '🥊 ملاكمة' },
{title: "🏸 الريشه", rowId: usedPrefix + command + ' ' + text + '🏸 الريشه' },
{title: "🏀 كرة السلة", rowId: usedPrefix + command + ' ' + text + '🏀 كرة السلة' },
{title: "⚾ بيسبول", rowId: usedPrefix + command + ' ' + text + '⚾ بيسبول' },
{title: "🖋️ خط", rowId: usedPrefix + command + ' ' + text + '🖋️ خط' },
{title: "👟 رياضة المحركات الآلية", rowId: usedPrefix + command + ' ' + text + '👟 رياضة المحركات الآلية' },
{title: "🏕 التخييم", rowId: usedPrefix + command + ' ' + text + '🏕 التخييم' },
{title: "🛶 الابحار", rowId: usedPrefix + command + ' ' + text + '🛶 الابحار' },
{title: "🎤 مغني", rowId: usedPrefix + command + ' ' + text + '🎤 مغني' }, 
{title: "🏂 التزلج على الجليد ", rowId: usedPrefix + command + ' ' + text + '🏂 التزلج على الجليد' },
{title: "✏️ مزخرف", rowId: usedPrefix + command + ' ' + text + '✏️ مزخرف' },
{title: "🪚 النجاره", rowId: usedPrefix + command + ' ' + text + '🪚 النجاره' },
{title: "🏎️ سباق السيارات", rowId: usedPrefix + command + ' ' + text + '🏎️ سباق السيارات' },
{title: "🐎 سباق الخيل", rowId: usedPrefix + command + ' ' + text + '🐎 سباق الخيل' },
{title: "🛵 سباق الدراجات النارية", rowId: usedPrefix + command + ' ' + text + '🛵 سباق الدراجات النارية' },
{title: "❄️ سباق الثلج", rowId: usedPrefix + command + ' ' + text + '❄️ سباق الثلج' },
{title: "🚧 دورات العقبات", rowId: usedPrefix + command + ' ' + text + '🚧 دورات العقبات' },
{title: "🦮 سباق الكلاب", rowId: usedPrefix + command + ' ' + text + '🦮 سباق الكلاب' },
{title: "🛷 سباق الزلاجات", rowId: usedPrefix + command + ' ' + text + '🛷 سباق الزلاجات' },
{title: "♿ سباق الكراسي المتحركة", rowId: usedPrefix + command + ' ' + text + '♿ سباق الكراسي المتحركة' },
{title: "🗺️ رسم الخرائط", rowId: usedPrefix + command + ' ' + text + '🗺️ رسم الخرائط' },
{title: "🏹 صيد", rowId: usedPrefix + command + ' ' + text + '🏹 صيد' },
{title: "🚲 ركوب الدراجات", rowId: usedPrefix + command + ' ' + text + '🚲 ركوب الدراجات' },
{title: "🎬 السينما", rowId: usedPrefix + command + ' ' + text + '🎬 السينما' },
{title: "😴 النوم", rowId: usedPrefix + command + ' ' + text + '😴 النوم' },
{title: "🍳 طباخ", rowId: usedPrefix + command + ' ' + text + '🍳 طباخ' },
{title: "🥗 الطبخ الصحي", rowId: usedPrefix + command + ' ' + text + '🥗 الطبخ الصحي' },
{title: "🧤 جمع الأشياء", rowId: usedPrefix + command + ' ' + text + '🧤 جمع الأشياء' },
{title: "🗝️ جمع التحف", rowId: usedPrefix + command + ' ' + text + '🗝️ جمع التحف' },
{title: "💥 جمع القصص المصورة", rowId: usedPrefix + command + ' ' + text + '💥 جمع القصص المصورة' },
{title: "📚 جمع الكتب", rowId: usedPrefix + command + ' ' + text + '📚 جمع الكتب' },
{title: "🎭 كوميديا", rowId: usedPrefix + command + ' ' + text + '🎭 كوميديا' },
{title: "👻 مؤامرة", rowId: usedPrefix + command + ' ' + text + '👻 مؤامرة' },	
{title: "🍕 أكل", rowId: usedPrefix + command + ' ' + text + '🍕 أكل' },
{title: "🎵 تأليف الأغاني", rowId: usedPrefix + command + ' ' + text + '🎵 تأليف الأغاني' },
{title: "🎶 التأليف الموسيقي", rowId: usedPrefix + command + ' ' + text + '🎶 التأليف الموسيقي' },
{title: "🚗 سوق", rowId: usedPrefix + command + ' ' + text + '🚗 سوق' },
{title: "🎩 علم الأنساب", rowId: usedPrefix + command + ' ' + text + '🎩 علم الأنساب' }, 
{title: "💐 زراعة الزهور", rowId: usedPrefix + command + ' ' + text + '💐 زراعة الزهور' },
{title: "🎼 رقص", rowId: usedPrefix + command + ' ' + text + '🎼 رقص' },
{title: "👟 الرياضات المتطرفة", rowId: usedPrefix + command + ' ' + text + '👟 الرياضات المتطرفة' },
{title: "✏️ رسم 3D", rowId: usedPrefix + command + ' ' + text + '✏️ رسم 3D' },
{title: "👋 يوتيوب كل وقت", rowId: usedPrefix + command + ' ' + text + '👋 يوتيوب كل وقت' },
{title: "👋 TikTok كل وقت", rowId: usedPrefix + command + ' ' + text + '👋 TikTok كل وقت' },
{title: "👋 Facebook كل وقت", rowId: usedPrefix + command + ' ' + text + '👋 Facebook كل وقت' },	
{title: "👋 Messenger كل وقت", rowId: usedPrefix + command + ' ' + text + '👋 Messenger كل وقت' },
{title: "👋 WhatsApp كل وقت", rowId: usedPrefix + command + ' ' + text + '👋 WhatsApp كل وقت' },	
{title: "👋 Instagram كل وقت", rowId: usedPrefix + command + ' ' + text + '👋 Instagram كل وقت ' },
{title: "👋 Twitter كل وقت", rowId: usedPrefix + command + ' ' + text + '👋 Twitter كل وقت' },
{title: "👋 Pinterest كل وقت", rowId: usedPrefix + command + ' ' + text + '👋 Pinterest كل وقت' },
{title: "👋 Telegram كل وقت ", rowId: usedPrefix + command + ' ' + text + '👋Telegram كل وقت' },
{title: "👋 WeChat كل وقت", rowId: usedPrefix + command + ' ' + text + '👋WeChat كل وقت' },
{title: "👋 Snapchat كل وقت ", rowId: usedPrefix + command + ' ' + text + '👋 Snapchat كل وقت' },
{title: "🎧 استمع إلى الموسيقى", rowId: usedPrefix + command + ' ' + text + '🎧 استمع إلى الموسيقى' },
{title: "📘 الدراسة ", rowId: usedPrefix + command + ' ' + text + '📘 الدراسة' },
{title: "👻 زينه في قروب", rowId: usedPrefix + command + ' ' + text + '👻 زينه في قروب' },
{title: "👟 اللياقه البدنيه", rowId: usedPrefix + command + ' ' + text + '👟 اللياقه البدنيه' },
{title: "📸 مصور", rowId: usedPrefix + command + ' ' + text + '📸 مصور' },
{title: "📸 تصوير الأزياء", rowId: usedPrefix + command + ' ' + text + '📸 تصوير الأزياء' },
{title: "📸 تصوير الألعاب", rowId: usedPrefix + command + ' ' + text + '📸 Fلعبة تصوير الأذن' },
{title: "📸 تصوير الحيوانات", rowId: usedPrefix + command + ' ' + text + '📸 تصوير الحيوانات' },
{title: "📸 تصوير المناظر الطبيعية", rowId: usedPrefix + command + ' ' + text + '📸 تصوير المناظر الطبيعية' },
{title: "📸 التصوير بالأبيض والأسود", rowId: usedPrefix + command + ' ' + text + '📸 التصوير بالأبيض والأسود' },
{title: "⚽ كرة القدم", rowId: usedPrefix + command + ' ' + text + '⚽ كرة القدم' },
{title: "🏈 كرة القدم الأمريكية", rowId: usedPrefix + command + ' ' + text + '🏈 كرة القدم الأمريكية' },
{title: "🎮 العاب", rowId: usedPrefix + command + ' ' + text + '🎮 العاب' },	
{title: "🏒 هوكي", rowId: usedPrefix + command + ' ' + text + '🏒 هوكي' },
/*
{title: "👟 Ir al gimnasio", rowId: usedPrefix + command + ' ' + text + '👟 Ir a gimnasio' },
{title: "🛍️ Ir de compra", rowId: usedPrefix + command + ' ' + text + '🛍️ Ir de compra' },
{title: "🎮 Juegos VR/AR", rowId: usedPrefix + command + ' ' + text + '🎮 Juegos VR/AR' },
{title: "🎮 Juegos de rol", rowId: usedPrefix + command + ' ' + text + '🎮 Juegos de rol' },
{title: "🎮 Juegos de acción", rowId: usedPrefix + command + ' ' + text + '🎮 Juegos de acción' },
{title: "🎮 Juegos de pelea", rowId: usedPrefix + command + ' ' + text + '🎮 Juegos de pelea' },
{title: "🎮 Juegos de arcade", rowId: usedPrefix + command + ' ' + text + '🎮 Juegos de arcade' },
{title: "🎮 Juegos de aventura", rowId: usedPrefix + command + ' ' + text + '🎮 Juegos de aventura' },
{title: "🎮 Juegos de estrategia", rowId: usedPrefix + command + ' ' + text + '🎮 Juegos de estrategia' },
{title: "🎮 Juegos de simulación", rowId: usedPrefix + command + ' ' + text + '🎮 Juegos de simulación' },
{title: "🎮 Juegos de deportes", rowId: usedPrefix + command + ' ' + text + '🎮 Juegos de deportes' },
{title: "🎮 Juegos de carreras", rowId: usedPrefix + command + ' ' + text + '🎮 Juegos de carreras' },
{title: "🎮 Juegos de battle royale", rowId: usedPrefix + command + ' ' + text + '🎮 Juegos de battle royale' },
{title: "🎮 Juegos clásicos", rowId: usedPrefix + command + ' ' + text + '🎮 Juegos clásicos' },
{title: "🃏 Juegos de cartas", rowId: usedPrefix + command + ' ' + text + '🃏 Juegos de cartas' },
{title: "🎲 Juegos de mesa", rowId: usedPrefix + command + ' ' + text + '🎲 Juegos de mesa' },
{title: "📖 Leer", rowId: usedPrefix + command + ' ' + text + '📖 Leer' },
{title: "👟 Lucha libre", rowId: usedPrefix + command + ' ' + text + '👟 Lucha libre' },
{title: "💄 Maquillaje artístico", rowId: usedPrefix + command + ' ' + text + '💄 Maquillaje artístico' },
{title: "😆 Memes", rowId: usedPrefix + command + ' ' + text + '😆 Memes' },
{title: "💭 Meditación", rowId: usedPrefix + command + ' ' + text + '💭 Meditación' },
{title: "🖥️ Modelado 3D", rowId: usedPrefix + command + ' ' + text + '🖥️ Modelado 3D' },
{title: "✨ Observación de estrellas", rowId: usedPrefix + command + ' ' + text + '✨ Observación de estrellas' },
{title: "🌕 Observación de la luna", rowId: usedPrefix + command + ' ' + text + '🌕 Observación de la luna' },
{title: "☁ Observación de las nubes", rowId: usedPrefix + command + ' ' + text + '☁ Observación de las nubes' },
{title: "📄 Origami", rowId: usedPrefix + command + ' ' + text + '📄 Origami' },
{title: "🎣 Pesca", rowId: usedPrefix + command + ' ' + text + '🎣 Pesca' },
{title: "🎨 Pintura", rowId: usedPrefix + command + ' ' + text + '🎨 Pintura' },
{title: "🎙️ Podcasts", rowId: usedPrefix + command + ' ' + text + '🎙️ Podcasts' },
{title: "📝 Poesía", rowId: usedPrefix + command + ' ' + text + '📝 Poesía' },
{title: "🎾 Tenis", rowId: usedPrefix + command + ' ' + text + '🎾 Tenis' },
{title: "🏓 Tenis de mesa", rowId: usedPrefix + command + ' ' + text + '🏓 Tenis de mesa' },
{title: "🎵 Toco un instrumento", rowId: usedPrefix + command + ' ' + text + '🎵 Toco un instrumento' },	
{title: "🎹 Tocar el piano", rowId: usedPrefix + command + ' ' + text + '🎹 Tocar el piano' },
{title: "🎸 Tocar la guitarra", rowId: usedPrefix + command + ' ' + text + '🎸 Tocar la guitarra' },
{title: "🎻 Tocar el violín", rowId: usedPrefix + command + ' ' + text + '🎻 Tocar el violín' },
{title: "🎷 Tocar el saxofón", rowId: usedPrefix + command + ' ' + text + '🎷 Tocar el saxofón' },
{title: "🎺 Tocar la trompeta", rowId: usedPrefix + command + ' ' + text + '🎺 Tocar la trompeta' },
{title: "🪘 Tocar el tamboril", rowId: usedPrefix + command + ' ' + text + '🪘 Tocar el tamboril' },
{title: "🥁 Tocar el tambor", rowId: usedPrefix + command + ' ' + text + '🥁 Tocar el tambor' },
{title: "📺 Ver la televisión", rowId: usedPrefix + command + ' ' + text + '📺 Ver la televisión' },
{title: "🌎 Viajar", rowId: usedPrefix + command + ' ' + text + '🌎 Viajar' },
{title: "🎒 Viajar de mochilero/a", rowId: usedPrefix + command + ' ' + text + '🎒 Viajar de mochilero/a' },
{title: "🫂 Visitar amigos", rowId: usedPrefix + command + ' ' + text + '🫂 Visitar amigos' },
{title: "📹 Vlog", rowId: usedPrefix + command + ' ' + text + '📹 Vlog' },
{title: "🏐 Voleibol", rowId: usedPrefix + command + ' ' + text + '🏐 Voleibol' },
{title: "👟 Yoga", rowId: usedPrefix + command + ' ' + text + '👟 Yoga' },*/
{title: "🎼 شاعر", rowId: usedPrefix + command + ' ' + text + '🎼 شاعر' }]},]


const listMessage = {
text: `👉 *SELECCIONE SUS PASATIEMPOS POR FAVOR*\n*❖ NOMBRE:* ${nombre === 0 ? 'No encontrada' : nombre}\n*❖ EDAD:* ${edad === 0 ? 'No encontrada' : edad}\n*❖ GÉNERO:* ${genero === 0 ? 'No encontrada' : genero}\n*❖ IDENTIDAD DE GÉNERO:* ${identidad === 0 ? 'No encontrada' : identidad}\n\n*╰⸺ ⊹ ⸺  ⊹ ⸺ ⊹ ⸺ ⊹ ⸺ ⊹ 》*`,
footer: wm,
title: "*╭⸺ ⊹ ⸺  ⊹ ⸺ ⊹ ⸺ ⊹ ⸺ ⊹ 》*\n",
buttonText: "❇️ MI PASATIEMPO ❇️",
sections
}

if (command == 'pasatiempo' || command == 'hobby') {
if (typeof pas1 === 'string') return conn.sendButton(m.chat, fg + '*NO PUEDE CAMBIAR DE PASATIEMPO*', 'Una vez seleccionado no puede ser modificado\n\n' + wm, null, [[`🐈 FINALIZAR REGISTRO`, usedPrefix + 'finalizar']], m)
if (!text) return conn.sendMessage(m.chat, listMessage, {quoted: fkontak})
pas1 = text.trim()
pasatiempo = pas1
user.pasatiempo = pasatiempo
global.db.data.users[m.sender]['registroC'] = true
conn.sendButton(m.chat, eg + '*GENIAL!! SE HA AGREGADO UN PASATIEMPO*\n*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*\n\n' + `${pasatiempo === 0 ? 'No encontrada' : pasatiempo}`, 'Puede agregar hasta 5 pasatiempos!!! o puede avanzar con el registro teniendo mínimo un pasatiempo\n\n' + wm, null, [[`❇️ AGREGAR OTRO PASATIEMPO`, usedPrefix + 'pas2'], [`🐈 FINALIZAR REGISTRO`, usedPrefix + 'finalizar']], m)
}	
	
if (command == 'pas2') {
if (typeof pas2 === 'string') return conn.sendButton(m.chat, fg + '*NO PUEDE CAMBIAR DE PASATIEMPO*', 'Una vez seleccionado no puede ser modificado\n\n' + wm, null, [[`🐈 FINALIZAR REGISTRO`, usedPrefix + 'finalizar']], m)
if (!text) return conn.sendMessage(m.chat, listMessage, {quoted: fkontak})

if (pas1 == text) throw fg + '*ESTE PASATIEMPO YA HA SIDO AGREGADO, SELECCIONE OTRO POR FAVOR*' 
global.db.data.users[m.sender]['registroC'] = true
pas2 = text.trim()	
pasatiempo = pas1 + ', ' + pas2
user.pasatiempo = pasatiempo
conn.sendButton(m.chat, eg + '*GENIAL!! SE HA AGREGADO OTRO PASATIEMPO*\n*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*\n\n' + `${pas2 === 0 ? 'No encontrada' : pasatiempo}`, 'Puede agregar hasta 5 pasatiempos!!! o puede avanzar con el registro teniendo mínimo un pasatiempo\n\n' + wm, null, [[`❇️ AGREGAR OTRO PASATIEMPO`, usedPrefix + 'pas3'], [`🐈 FINALIZAR REGISTRO`, usedPrefix + 'finalizar']], m)
}
	
if (command == 'pas3') {
if (typeof pas3 === 'string') return conn.sendButton(m.chat, fg + '*NO PUEDE CAMBIAR DE PASATIEMPO*', 'Una vez seleccionado no puede ser modificado\n\n' + wm, null, [[`🐈 FINALIZAR REGISTRO`, usedPrefix + 'finalizar']], m)
if (!text) return conn.sendMessage(m.chat, listMessage, {quoted: fkontak})

if (pas2 == text || pas1 == text) throw fg + '*ESTE PASATIEMPO YA HA SIDO AGREGADO, SELECCIONE OTRO POR FAVOR*'
global.db.data.users[m.sender]['registroC'] = true
pas3 = text.trim()
pasatiempo = pas1 + ', ' + pas2 + ', ' + pas3
user.pasatiempo = pasatiempo
conn.sendButton(m.chat, eg + '*GENIAL!! SE HA AGREGADO OTRO PASATIEMPO*\n*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*\n\n' + `${pas3 === 0 ? 'No encontrada' : pasatiempo}`, 'Puede agregar hasta 5 pasatiempos!!! o puede avanzar con el registro teniendo mínimo un pasatiempo\n\n' + wm, null, [[`❇️ AGREGAR OTRO PASATIEMPO`, usedPrefix + 'pas4'], [`🐈 FINALIZAR REGISTRO`, usedPrefix + 'finalizar']], m)
}
	
if (command == 'pas4') {
if (typeof pas4 === 'string') return conn.sendButton(m.chat, fg + '*NO PUEDE CAMBIAR DE PASATIEMPO*', 'Una vez seleccionado no puede ser modificado\n\n' + wm, null, [[`🐈 FINALIZAR REGISTRO`, usedPrefix + 'finalizar']], m)
if (!text) return conn.sendMessage(m.chat, listMessage, {quoted: fkontak})

if (pas3 == text || pas2 == text || pas1 == text) throw fg + '*ESTE PASATIEMPO YA HA SIDO AGREGADO, SELECCIONE OTRO POR FAVOR*'
global.db.data.users[m.sender]['registroC'] = true
pas4 = text.trim()	
pasatiempo = pas1 + ', ' + pas2 + ', ' + pas3 + ', ' + pas4
user.pasatiempo = pasatiempo
conn.sendButton(m.chat, eg + '*GENIAL!! SE HA AGREGADO OTRO PASATIEMPO*\n*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*\n\n' + `${pas4 === 0 ? 'No encontrada' : pasatiempo}`, 'Puede agregar hasta 5 pasatiempos!!! o puede avanzar con el registro teniendo mínimo un pasatiempo\n\n' + wm, null, [[`❇️ AGREGAR OTRO PASATIEMPO`, usedPrefix + 'pas5'], [`🐈 FINALIZAR REGISTRO`, usedPrefix + 'finalizar']], m)
}
	
if (command == 'pas5') {
if (typeof pas5 === 'string') return conn.sendButton(m.chat, fg + '*NO PUEDE CAMBIAR DE PASATIEMPO*', 'Una vez seleccionado no puede ser modificado\n\n' + wm, null, [[`🐈 FINALIZAR REGISTRO`, usedPrefix + 'finalizar']], m)
if (!text) return conn.sendMessage(m.chat, listMessage, {quoted: fkontak})
if (pas4 == text || pas3 == text || pas2 == text || pas1 == text) throw fg + '*ESTE PASATIEMPO YA HA SIDO AGREGADO, SELECCIONE OTRO POR FAVOR*'
global.db.data.users[m.sender]['registroC'] = true	
pas5 = text.trim()
pasatiempo = pas1 + ', ' + pas2 + ', ' + pas3 + ', ' + pas4 + ', ' + pas5
user.pasatiempo = pasatiempo
conn.sendButton(m.chat, eg + '*GENIAL!! SE HA AGREGADO OTRO PASATIEMPO*\n*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*\n\n' + `${pas5 === 0 ? 'No encontrada' : pasatiempo}`, 'Puede agregar hasta 5 pasatiempos!!! o puede avanzar con el registro teniendo mínimo un pasatiempo\n\n' + wm, null, [[`🐈 FINALIZAR REGISTRO`, usedPrefix + 'finalizar']], m)
}
	
if (command == 'finalizar' || command == 'end') {
if (global.db.data.users[m.sender]['registroC'] == true) {
if (user.premLimit === 0) {	
tiempo = user.premLimit === 1 ? 0 : 10800000 //3 horas
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
}
fecha = `${week}, ${date} *||* `
hora = `${time}`
user.tiempo = fecha + hora
user.name = nombre === 0 ? 'No encontrada' : nombre + 'ͧͧͧͦꙶͣͤ✓ᚲᴳᴮ'
user.descripcion = bio
user.age = edad === 0 ? 'No encontrada' : edad >= 18 ? edad += ' سنة *||* ' + '(Persona Adulta)' : edad += ' سنة *||* ' + '(Persona Joven)'
user.genero = genero === 0 ? 'No encontrada' : genero == 'Ocultado' ? `${genero} 🗣️` : genero == 'Mujer' ? `${genero} 🚺` : genero == 'Hombre' ? `${genero} 🚹` : 'No encontrada'
user.identidad = identidad === 0 ? 'No encontrada' : identidad
user.pasatiempo = pasatiempo === 0 ? 'No encontrada' : pasatiempo
}else{
fecha = `${week}, ${date} || `
hora = `${time}`
user.tiempo = fecha + hora
user.name = nombre === 0 ? 'No encontrada' : nombre + 'ͧͧͧͦꙶͣͤ✓ᚲᴳᴮ'
user.age = edad === 0 ? 'No encontrada' : `${edad >= 18 ? edad += ' سنة *||* ' + '(Persona Adulta)' : edad += ' سنة *||* ' + '(Persona Joven)'}`
user.descripcion = bio	
}
user.regTime = + new Date
user.registered = true
let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6)	
registrando = false
		
let caption = `
🍃 \`\`\`VERIFICACIÓN EXITOSA\`\`\` 🍃
*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*

😼 *REGISTRADO POR*
❱❱ ${wm}

📑 *TIPO DE REGISTRO* 
❱❱ ${user.registroC === true ? 'Registro Completo' : 'Registro Rápido'}

⌛ *FECHA/HORA*
❱❱ ${user.tiempo} 

🛅 *CÓDIGO DE REGISTRO*
❱❱ ${sn}

✅ *INSIGNIA DE VERIFICACIÓN*
❱❱   *${user.registered === true ? 'ͧͧͧͦꙶͣͤ✓ᚲᴳᴮ' : ''}*

👤 *NOMBRE* 
❱❱ ${user.name}

👀 *DESCRIPCIÓN*
❱❱ ${user.descripcion}

🔢 *EDAD* 
❱❱ ${user.age}

${user.registroC === true ? `☘️ *GENERO*
❱❱ ${user.genero}

🌱 *IDENTIDAD DE GÉNERO*
❱❱ ${user.identidad}

❇️ *PASATIEMPO(S)*
❱❱ ${user.pasatiempo}

${user.premLimit === 1 ? '' : `🎟️ *PREMIUM*
❱❱ ${user.premLimit === 1 ? '' : `${user.premiumTime > 0 ? '✅' : '❌'} +3 HORAS || ${user.premiumTime - now} ms`}`}   ` : ''} 
`.trim()

await m.reply('🍄 ```VERIFICANDO DATOS...```')
await conn.sendButton(m.chat, caption, user.registroC === true ? 'Si elimina su registro se eliminará los datos e insignia y dejara de tener acceso a los comandos con registro\n\nTendrá Premium solo la premira vez que se registre si llega a volver a registrarse no tendrá premium a excepción si compra usando #pase premium\n\nPuede volver a eliminar su registro y registrarse desde 0 sin problema.\n\nSu código de serie le permitirá borrar su registro ejemplo:\n' + `${usedPrefix}unreg ${sn}` : 'Si elimina su registro se eliminará los datos e insignia y dejara de tener acceso a los comandos con registro\n\nPuede volver a eliminar su registro y registrarse desde 0 sin problema.\n\nSu código de serie le permitirá borrar su registro ejemplo:\n' + `${usedPrefix}unreg ${sn}`, [['𝘼𝙝𝙤𝙧𝙖 𝙚𝙨𝙩𝙤𝙮 𝙑𝙚𝙧𝙞𝙛𝙞𝙘𝙖𝙙𝙤(𝙖)!! ✅', '/profile']], m)
await m.reply(`${sn}`)	
}}
handler.command = ['verify', 'verificar', 'register', 'registrar', 'reg', 'reg1', 'nombre', 'name', 'nombre2', 'name2', 'edad', 'age', 'edad2', 'age2', 'genero', 'género', 'gender', 'identidad', 'pasatiempo', 'hobby', 'identity', 'finalizar', 'pas2', 'pas3', 'pas4', 'pas5']  ///^(verify|verificar|reg(ister)?)$/i
handler.private = true 
export default handler