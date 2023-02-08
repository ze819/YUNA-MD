//CÓDIGO CREADO POR GataNina-Li : https://github.com/GataNina-Li

import { createHash } from 'crypto'
let nombre, edad, genero, registro, _registro

let handler = async function (m, { conn, text, command, usedPrefix }) {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? m.sender : m.sender

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
let nombreWA = await '.' + ' ' + conn.getName(m.sender)
let user = global.db.data.users[m.sender]
let verificar = new RegExp(usedPrefix)

if (user.registered === true) throw `${iig} انت مسجل بلفعل\nإذا كنت تريد إلغاء التسجيل ، فاستخدم هذا الأمر\n*${usedPrefix}unreg الرقم التسلسلي*\n\nإذا كنت لا تتذكر الرقم التسلسلي الخاص بك ، فاستخدم هذا الأمر\n*${usedPrefix}myns*`

if (command == 'verificar' || command == 'verify' || command == 'تسجيل' || command == 'register' || command == 'reg') {
await conn.sendButton(m.chat, iig + '😇 *كيف تريد التسجيل؟*', '*التسجيل السريع*\n- شارة إثبات الملكية\n- إلغاء تأمين الأوامر التي تتطلب التسجيل\n\n*التسجيل الكامل*\n- شارة إثبات الملكية\n- إلغاء تأمين الأوامر التي تتطلب التسجيل\n- مكافآت استخدام هذا النوع من التسجيل\n- بريميوم مجاني مؤقت\n\n' + wm, null, [[`📑 تسجيل سريع`, usedPrefix + 'Reg1'], [`🗂️ التسجيل الكامل`, usedPrefix + 'nombre']], m) 
}
	
if (command == 'reg1') {
registro = text.replace(/\s+/g, usedPrefix) 
_registro = text.split(" ",2) 

if (!text) return conn.sendButton(m.chat, mg + `*معلمات التسجيل:*\n\`\`\`${usedPrefix + command} الاسم العمر\`\`\`\n\n*مثال :* \`\`\`${usedPrefix + command} ${gt} 20\`\`\``, '```نصيحة:```\n\n- اكتب "الاسم" + "جنس" + "عمر"\n- يجب ألا يحتوي اسمك على أرقام\n- يجب ألا يحتوي العمر على رسائل\n\n*هل تعلم أنه يمكنك تخصيص تسجيلك بشكل أكبر?*\n_باستخدام الزر أدناه_', null, [[`🗂️ استخدم التسجيل الكامل`, usedPrefix + 'nombre']], m)
if (_registro['length'] >= 3 || isNaN(_registro[1])) return conn.sendButton(m.chat, fg + '🙃 *أنت تحاول أن تكتب اسمك?* ', '🧐 *يتزامن كما في هذه الأمثلة:*\n' + `\`\`\`${usedPrefix + command} Super ${gt} 20\`\`\`` + '\n' + `\`\`\`${usedPrefix + command} Super 15 ${gt} \`\`\`` + '\n' + `\`\`\`${usedPrefix + command} Super ${gt} 24 De ${author}\`\`\`\n\n` + '*إذا كان لديك (الاسم /الحنس  والعمر) ، فسنكمل تسجيلك تلقائيًا*\n_استخدم الزر أدناه_', null, [[`🌟 الإكمال التلقائي لتسجيلي`, usedPrefix + 'reg1' + ' ' + text.replace(/\s+/g, '').replace(/[0-9]+/gi, "") + ' ' + text.replace(/\s+/g, '').replace(/[a-z]+/gi, "")], ['📑 إعادة التسجيل', command + usedPrefix]], m)
if (!_registro[0]) return conn.sendButton(m.chat, fg + `*مفقود اسمك ، معلمات التسجيل:*\n\`\`\`${usedPrefix + command} الاسم والعمر\`\`\``, wm, null, [[`🗂️ استخدم التسجيل الكامل`, usedPrefix + 'nombre']], m)
if (_registro[0].length >= 30) throw fg + '*اسمك طويل جدا ، يرجى استخدام اسم آخر*' 
if (_registro[0].length <= 4) throw fg + '*اسمك قصير جدا ، يرجى استخدام اسم آخر*'
_registro[0] = text.replace(/\s+/g, '').replace(/[0-9]+/gi, "")
nombre = _registro[0]
	
if (!_registro[1]) return conn.sendButton(m.chat, fg + `*عمرك مفقود ، معلمات التسجيل:*\n\`\`\`${usedPrefix + command} الاسم العمر\`\`\``, wm, null, [[`🗂️ استخدم التسجيل الكامل`, usedPrefix + 'nombre']], m)
//if (isNaN(_registro[1])) throw '*LA EDAD DEBE DE SER SOLO NÚMEROS*'
if (_registro[1] > 50) throw fg + `*عمرك قديم جدا ، يرجى استخدام عمر آخر
*\n\n*معلمات التسجيل:*\n\`\`\`${usedPrefix + command} الاسم العمر\`\`\``
if (_registro[1] < 10) throw fg + `*عمرك أصغر جدا ، يرجى استخدام عمر آخر*\n\n*معلمات التسجيل:*\n\`\`\`${usedPrefix + command} الاسم العمر\`\`\``
edad = parseInt(_registro[1]) //_registro[1]	
user.registroR = true
	
await conn.sendButton(m.chat, eg + '*عظيم!! تم الانتهاء من ما يلي*\n*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*\n\n*✤ الاسم:* ' + nombre + '\n' + '*✤ عمر:* ' + edad + ' عمر', wm, null, [[`🧸 إنهاء التسجيل`, usedPrefix + 'finalizar']], m)	
}
		
if (command == 'nombre' || command == 'name') {
if (verificar.test(text) == false || text.length <= 1) return conn.sendButton(m.chat, '*تخصيص اسمك للتسجيل ، على سبيل المثال:*\n' + '```' + usedPrefix + command + ' # ' + gt + '```', '*يمكنك أيضا ربط اسم واتساب الخاص بك*\n_باستخدام الزر أدناه_', null, [[`التسجيل عبر الواتساب`, usedPrefix + 'nombre2' + ' ' + nombreWA]], m)
if (text.length >= 25) return conn.sendButton(m.chat, '*استخدم اسما أقصر، مثال:*\n' + '```' + usedPrefix + command + ' ' + gt + '```', '*هل تريد استخدام اسمك المسجل على WhatsApp الخاص بك؟*\n_في هذه الحالة ، استخدم الزر لأسفل_', null, [[` التسجيل عبر الواتساب`, usedPrefix + 'nombre2' + ' ' + nombreWA]], m)
if (text.length <= 4) return conn.sendButton(m.chat, '*اسم مفقود أو قصير جدا ، مثال:*\n' + '```' + usedPrefix + command + ' ' + gt + '```', '*هل تريد استخدام اسمك المسجل على WhatsApp الخاص بك؟*\n_في هذه الحالة ، استخدم الزر لأسفل_', null, [[`التسجيل عبر الواتساب`, usedPrefix + 'nombre2' + ' ' + nombreWA]], m) 

nombre = text.slice(1).replace(/[0-9]+/gi, "").trim()
if (verificar.test(text) == true) return conn.sendButton(m.chat, '*عظيم!! تم تسجيل ما يلي:*\n*الاسم:* ' + nombre, wm, null, [[`🔢 سجل عمري`, usedPrefix + 'edad']], m)
}
	
if (command == 'nombre2' || command == 'name2') {
if (nombreWA.slice(1).length < 4) return conn.sendButton(m.chat, '*اسم مفقود أو قصير جدا ، مثال: *\n' + '```' + usedPrefix + command + ' ' + gt + '```', '*هل تعلم أنه يمكنك تخصيص اسمك؟*\n_في هذه الحالة ، استخدم الزر لأسفل_', null, [[`تخصيص التسجيل`, usedPrefix + 'nombre']], m) 
if (nombreWA.slice(1).length > 25) return conn.sendButton(m.chat, '*استخدم اسما أقصر، على سبيل المثال:*\n' + '```' + usedPrefix + command + ' ' + gt + '```', '*هل تعلم أنه يمكنك تخصيص اسمك؟*\n_في هذه الحالة ، استخدم الزر لأسفل_', null, [[`تخصيص التسجيل`, usedPrefix + 'nombre']], m)
nombre = nombreWA.replace(/[0-9]+/gi, "").slice(1).trim()	
	
if (verificar.test(text) == false) return conn.sendButton(m.chat, '*عظيم!! تم تسجيل ما يلي:*\n*الاسم:* ' + nombre, wm, null, [[`🔢 سجل عمري`, usedPrefix + 'edad']], m)
}

	
if (command == 'edad' || command == 'age') {
const sections = [
{ title: "🌟 اختر عمرك!!",
rows: [ {title: "♻️ Edad Random", rowId: usedPrefix + command + ' ' + usedPrefix +  text + pickRandom(['30','29','28','27','26','25','24','23','22','21','20','19','18','17','16','15','14','13','12','11','10','31'])}]
}, {
title: "🍃 شب",
rows: [
{title: "1️⃣0️⃣ ", rowId: usedPrefix + command + ' ' + usedPrefix + text + '10'},
{title: "1️⃣1️⃣ ", rowId: usedPrefix + command + ' ' + usedPrefix + text + '11'},
{title: "1️⃣2️⃣ ", rowId: usedPrefix + command + ' ' + usedPrefix + text + '12'},
{title: "1️⃣3️⃣ ", rowId: usedPrefix + command + ' ' + usedPrefix + text + '13'},
{title: "1️⃣4️⃣ ", rowId: usedPrefix + command + ' ' + usedPrefix + text + '14'},
{title: "1️⃣5️⃣ ", rowId: usedPrefix + command + ' ' + usedPrefix + text + '15'},
{title: "1️⃣6️⃣ ", rowId: usedPrefix + command + ' ' + usedPrefix + text + '16'},
{title: "1️⃣7️⃣ ", rowId: usedPrefix + command + ' ' + usedPrefix + text + '17'}]
}, {
title: "🌳 بالغ",
rows: [
{title: "1️⃣8️⃣ ", rowId: usedPrefix + command + ' ' + usedPrefix + text + '18'},
{title: "1️⃣9️⃣ ", rowId: usedPrefix + command + ' ' + usedPrefix + text + '19'},
{title: "2️⃣0️⃣ ", rowId: usedPrefix + command + ' ' + usedPrefix + text + '20'},
{title: "2️⃣1️⃣ ", rowId: usedPrefix + command + ' ' + usedPrefix + text + '21'},
{title: "2️⃣2️⃣ ", rowId: usedPrefix + command + ' ' + usedPrefix + text + '22'},
{title: "2️⃣3️⃣ ", rowId: usedPrefix + command + ' ' + usedPrefix + text + '23'},
{title: "2️⃣4️⃣ ", rowId: usedPrefix + command + ' ' + usedPrefix + text + '24'},
{title: "2️⃣5️⃣ ", rowId: usedPrefix + command + ' ' + usedPrefix + text + '25'},
{title: "2️⃣6️⃣ ", rowId: usedPrefix + command + ' ' + usedPrefix + text + '26'},
{title: "2️⃣7️⃣ ", rowId: usedPrefix + command + ' ' + usedPrefix + text + '27'},
{title: "2️⃣8️⃣ ", rowId: usedPrefix + command + ' ' + usedPrefix + text + '28'},
{title: "2️⃣9️⃣ ", rowId: usedPrefix + command + ' ' + usedPrefix + text + '29'},
{title: "3️⃣0️⃣ ", rowId: usedPrefix + command + ' ' + usedPrefix + text + '30'}]
}, {
title: "🤔 أليس عمرك؟",
rows: [
{title: "🔢 تخصيص عمري", rowId: usedPrefix + 'edad2'}]},]

const listMessage = {
text: `*يرجى تحديد عمرك*\n\n*الاسم:* _${nombre}_\n\n*╰⸺ ⊹ ⸺  ⊹ ⸺ ⊹ ⸺ ⊹ ⸺ ⊹*`,
footer: wm,
title: "*╭⸺ ⊹ ⸺  ⊹ ⸺ ⊹ ⸺ ⊹ ⸺ ⊹*\n",
buttonText: "🧸 اختر العمر 🧸 ",
sections
}

if (!text) return conn.sendMessage(m.chat, listMessage, m)
if (verificar.test(text) == false || !text.slice(1) ) return conn.sendButton(m.chat, '*خصص عمرك للتسجيل، على سبيل المثال:*\n' + usedPrefix + command + ' ' + usedPrefix + '35', '*هل تعلم أنه يمكنك تحديد عمرك من قائمة؟*\n_في هذه الحالة ، استخدم الزر لأسفل_', null, [[`🔢 سجل عمري`, usedPrefix + 'edad']], m)
if (isNaN(text.slice(1))) throw '*أدخل الأرقام فقط*'
if (text.slice(1) > 50) throw '*أكبر من أن يتم تسجيلها*'
if (text.slice(1) < 10 || text.slice(1) < 0) throw '*قاصر جدا بحيث لا يمكن تسجيله*'
	
//user.age = text.slice(1) 
edad = text.slice(1).trim()
if (verificar.test(text) == true) return conn.sendButton(m.chat, '*عظيم!! تم تسجيل ما يلي:*\n*الاسم:* ' + nombre + '\n' + '*عمر:* ' + edad + ' سنه', wm, null, [[`🍃 سجل جنسك`, usedPrefix + `genero`]], m)
}
	
if (command == 'edad2' || command == 'age2') {
if (verificar.test(text) == false || !text.slice(1) ) return conn.sendButton(m.chat, '*تخصيص عمرك للتسجيل ، على سبيل المثال:*\n' + usedPrefix + command + ' ' + usedPrefix + '35', '*هل تعلم أنه يمكنك تحديد عمرك من قائمة؟*\n_في هذه الحالة ، استخدم الزر لأسفل_', null, [[`🔢 سجل عمري`, usedPrefix + 'edad']], m)
if (isNaN(text.slice(1))) throw '*أدخل الأرقام فقط*'
if (text.slice(1) > 50) throw '*أكبر من أن يتم تسجيلها*'
if (text.slice(1) < 10 || text.slice(1) < 0) throw '*قاصر جدا بحيث لا يمكن تسجيله*'

//user.age = text.slice(1) 
edad = text.slice(1).trim()
if (verificar.test(text) == true) return conn.sendButton(m.chat, '*عظيم!! تم تسجيل ما يلي:*\n*اسمك:* ' + nombre + '\n' + '*غمر:* ' + edad + ' سنة', wm, null, [[`تسجيل جنسك`, usedPrefix + `genero`]], m)
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
title: comienzo + " 👤 أخفى " + fin,
rows: [
{title: "👤 مخفي", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'مخفي' }]},]

const listMessage = {
text: `*الرجاء تحديد جنسك*\n\n*الاسم:* _${nombre}_\n*عمر:* _${edad}_\n\n*╰⸺ ⊹ ⸺  ⊹ ⸺ ⊹ ⸺ ⊹ ⸺ ⊹*`,
footer: wm,
title: "*╭⸺ ⊹ ⸺  ⊹ ⸺ ⊹ ⸺ ⊹ ⸺ ⊹*\n",
buttonText: "🧬 اختر الجنس 🧬 ",
sections
}

if (!text) return conn.sendMessage(m.chat, listMessage, m)
user.registroC = true
genero = text.slice(1).trim()	
	
if (verificar.test(text) == true) return conn.sendButton(m.chat, '*عظيم!! تم تسجيل ما يلي:*\n*الاسم:* ' + nombre + '\n' + '*عمر:* ' + edad + ' سنه' + '\n' + '*جنس:* ' + genero, wm, null, [[` إنهاء التسجيل`, usedPrefix + `finalizar`]], m)	 
}
if (command == 'finalizar' || command == 'end') {
if (user.registroC == true) {
user.registroR = false
user.name = nombre 
user.age = edad
user.genero = genero
global.db.data.users[m.sender].money += 400
global.db.data.users[m.sender].limit += 7
global.db.data.users[m.sender].exp += 250
global.db.data.users[m.sender].joincount += 3
	
}else{
user.registroC = false
user.name = nombre 
user.age = edad 
}
	
user.regTime = + new Date
user.registered = true
let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6)	
	
let caption1 = `╭━━━[ *معلومات تسجيل* ]━━━━⬣
┃ *نوع السجل* 
┃ ${user.registroC == true ? 'التسجيل الكامل' : 'التسجيل السريع'}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ *الاسم* 
┃ ${user.name} ${user.registered === true ? 'ͧͧͧͦꙶͣͤ✓ᚲYB' : ''}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ *عمر* 
┃ ${user.age} سنه 
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ *جنس* 
┃ ${user.genero}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ *جائزة تسجيل* 
┃ *$250 خبره*
┃ *$400 كوينز*
┃ *$7 الماس*
╰━━━━━━━━━━━━━━━━━━⬣`.trim()

let caption2 = `
🍃 \`\`\`التحقق الناجح\`\`\` 🍃
*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*

*مسجل من قبل*
❱❱ ${wm}

📑 *نوع السجل* 
❱❱ ${user.registroC === true ? 'التسجيل الكامل' : 'تسجيل سريع'}

✅ *شارة التحقق*
❱❱   *${user.registered === true ? 'ͧͧͧͦꙶͣͤ✓ᚲYB' : ''}*

👤 *الاسم* 
❱❱ ${user.name}${user.registered === true ? 'ͧͧͧͦꙶͣͤ✓ᚲᴳᴮ' : ''}

🔢 *العمر* 
❱❱ ${user.age} سنه *||* ${user.age > 18 ? '(بالغ)' : '(شاب)'}

🛅 *رمز التسجيل*
❱❱ ${sn}

${user.registroC == true ? 'كامل' : 'سريع '}
`.trim()

await m.reply('🍄 ```التحقق من البيانات...```')
await conn.sendButton(m.chat, caption2, user.registroC === true ? wm : 'إذا قمت بحذف تسجيلك ، حذف البيانات والشارة ولن تتمكن بعد ذلك من الوصول إلى الأوامر مع التسجيل\n\nيمكنك حذف تسجيلك مرة أخرى والتسجيل من صفر بدون مشاكل\n\nسيسمح لك الرمز التسلسلي الخاص بك بمسح سجل المثال الخاص بك:\n' + `${usedPrefix}unreg ${sn}`, [[' ملفي✅', '/profile']], m)
await m.reply(`${sn}`)
}}
handler.command = ['verify', 'verificar', 'register', 'reg', 'reg1', 'nombre', 'name', 'nombre2', 'name2', 'edad', 'age', 'edad2', 'age2', 'genero', 'género', 'gender', 'finalizar', 'end', 'تسجيل' ]  ///^(verify|verificar|reg(ister)?)$/i
export default handler



/*


import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { text, usedPrefix, command }) {
	function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
	let namae = conn.getName(m.sender)
	const sections = [
	{
	title: "حدد عمرك هنا!",
	rows: [
	    {title: "عمر عشوائي", rowId: '.reg ' + namae + '.' + pickRandom(['30','29','28','27','26','25','24','23','22','21','20','19','18','17','16','15','14','13','12','11','10','9'])}
	]
    },
    {
	title: "بالغ",
	rows: [
	    {title: "30 سنة", rowId: '.reg ' + namae + '.30 '},
	    {title: "29 سنة", rowId: '.reg ' + namae + '.29 '},
	    {title: "28 سنة", rowId: '.reg ' + namae + '.28 '},
	{title: "27 سنة", rowId: '.reg ' + namae + '.27 '},
	{title: "26 سنة", rowId: '.reg ' + namae + '.26 '},
	{title: "25 سنة", rowId: '.reg ' + namae + '.25 '},
	{title: "24 سنة", rowId: '.reg ' + namae + '.24 '},
	{title: "23 سنة", rowId: '.reg ' + namae + '.23 '},
	{title: "22 سنة", rowId: '.reg ' + namae + '.22 '},
	{title: "21 سنة", rowId: '.reg ' + namae + '.21 '}
	]
    },
    {
	title: "شاب",
	rows: [
	    {title: "20 سنة", rowId: '.reg ' + namae + '.20 '},
	    {title: "19 سنة", rowId: '.reg ' + namae + '.19 '},
	    {title: "18 سنة", rowId: '.reg ' + namae + '.18 '},
	{title: "17 سنة", rowId: '.reg ' + namae + '.17 '},
	{title: "16 سنة", rowId: '.reg ' + namae + '.16 '},
	{title: "15 سنة", rowId: '.reg ' + namae + '.15 '},
	{title: "14 سنة", rowId: '.reg ' + namae + '.14 '},
	{title: "13 سنة", rowId: '.reg ' + namae + '.13 '},
	{title: "12 سنة", rowId: '.reg ' + namae + '.12 '},
	{title: "11 سنة", rowId: '.reg ' + namae + '.11 '},
	{title: "10 سنة", rowId: '.reg ' + namae + '.10 '},
	{title: "9 سنة", rowId: '.reg ' + namae + '.9 '}
	]
    },
]

const listMessage = {
  text: `┃ يرجى تحديد عمرك بالضغط على الزر ...\n┃ اسمك : ${conn.getName(m.sender)}\n┃ تريد وضع اسم اخر ? \n┃ اكتب *${usedPrefix + command} اسمك|عمرك*\n┃يفضل كتابة الاسم في الغه الاجنبيه \n╰━━━━━━━━━━━━━━━━━━⬣`,
  footer: global.wm,
  title: "╭━━━[ *السجل* ]━━━━⬣",
  buttonText: "انقر هنا!",
  sections
}

  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `${iig} أنت مسجل بالفعل!!\nإذا كنت تريد إلغاء التسجيل ، فاستخدم هذا الأمر\n*${usedPrefix}unreg الرقم التسلسلي*\n\nإذا كنت لا تتذكر الرقم التسلسلي الخاص بك ، فاستخدم هذا الأمر\n*${usedPrefix}myns*`
  if (!Reg.test(text)) return conn.sendMessage(m.chat, listMessage, m)
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw ' لا يمكن أن يكون الاسم فارغا'
  if (!age) throw ' العمر لا يمكن أن يكون فارغا (أرقام)'
  age = parseInt(age)
  if (age > 30) throw 'يا جدو (。-`ω´-)'
  if (age < 5) throw '🚼  من متا بعرف أطفال يكتبو✍️😳'
  if (name.length >= 30) throw 'بناءً على ذلك ، الاسم طويل جدًا لدرجة أنك تريد جسرًا ' 
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender
  global.db.data.users[m.sender].money += 400
global.db.data.users[m.sender].limit += 6
global.db.data.users[m.sender].exp += 250
global.db.data.users[m.sender].joincount += 3
  let caption = `
╭━━━[ *تسجيل* ]━━━━⬣
┃ *الاسم* 
┃ ${name} ${user.registered === true ? 'ͧͧͧͦꙶͣͤ✓ᚲYB' : ''}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ *عمر* 
┃ ${age} سنة
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ *جائزتك* 
┃ *$250 XP*
┃ *$400 كوينز*
┃ *$6 الماس*
╰━━━━━━━━━━━━━━━━━━⬣`
//let author = global.author
await conn.sendButton(m.chat, caption, `الرقم التسلسلي الخاص بك سوف يخدمك في حالة رغبتك في حذف تسجيلك\nمثل\n${usedPrefix}unreg الرقم التسلسلي\n${wm}`, [['ملفي✅', '/profile']], m)
await m.reply(`${sn}`) 
}
handler.help = ['daftar', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['xp']

handler.command = /^(verify|تسجيل|verificar|reg(ister)?)$/i

export default handler

*/ 