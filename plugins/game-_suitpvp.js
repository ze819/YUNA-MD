let handler = m => m
handler.before = async function (m) {
this.suit = this.suit ? this.suit : {}
if (db.data.users[m.sender].suit < 0) db.data.users[m.sender].suit = 0
let room = Object.values(this.suit).find(room => room.id && room.status && [room.p, room.p2].includes(m.sender))
if (room) {
let win = ''
let tie = false
if (m.sender == room.p2 && /^(acc(ept)?|terima|اقبل|gas|aceptare?|nao|gamau|rechazar|ga(k.)?bisa)/i.test(m.text) && m.isGroup && room.status == 'wait') {
if (/^(tolak|gamau|rechazar|ga(k.)?bisa)/i.test(m.text)) {
let textno = `*[❗] @${room.p2.split`@`[0]} _انا أرفض حماية الأصناف النباتية ، يتم إلغاء الألعاب_*`
m.reply(textno, null, {mentions: this.parseMention(textno)})
delete this.suit[room.id]
return !0 }
room.status = 'play'
room.asal = m.chat
clearTimeout(room.waktu)
let textplay = `🎮 لعبه لاعب ضد لاعب  🎮\n\n—◉ تبدأ اللعبة ، تم إرسال الخيارات إلى الدردشات الخاصة @${room.p.split`@`[0]} 𝙮 @${room.p2.split`@`[0]}\n\n◉ حدد خيارا في الخاص \n*• اختر الخيار wa.me/${conn.user.jid.split`@`[0]}*`
m.reply(textplay, m.chat, {mentions: this.parseMention(textplay)})
let imgplay = `https://www.merca2.es/wp-content/uploads/2020/05/Piedra-papel-o-tijera-0003318_1584-825x259.jpeg`    
if (!room.pilih) this.sendHydrated(room.p, 'يرجى تحديد أحد الخيارات التالية', `الفائز+${room.poin}XP\nخاسر ${room.poin_lose}XP`, imgplay, null, null, null, null, [['حجر 🗿', 'حجر'], ['ورقه 📄', 'ورقه'], ['مقص ✂️', 'مقص']], m)
if (!room.pilih2) this.sendHydrated(room.p2, 'يرجى تحديد أحد الخيارات التالية', `كاسب +${room.poin}XP\nخاسر ${room.poin_lose}XP`, imgplay, null, null, null, null, [['حجر 🗿', 'حجر'], ['ورقه 📄', 'ورقه'], ['مقص ✂️', 'مقص']], m)                             
room.waktu_milih = setTimeout(() => {
if (!room.pilih && !room.pilih2) this.sendButton(m.chat, `[❗] لم يبادر أي لاعب لبدء اللعبة ، وقد تم إلغاؤها `, wm, null, [['OK', '.ok']], m)
else if (!room.pilih || !room.pilih2) {
win = !room.pilih ? room.p2 : room.p 
let textnull = `*[❗] @${(room.pilih ? room.p2 : room.p).split`@`[0]}  لم تختر أي خيار ، نهاية العبه*`
this.sendButton(m.chat, textnull, wm, null, [['ok', '.ok']], m, { mentions: this.parseMention(textnull)})
db.data.users[win == room.p ? room.p : room.p2].exp += room.poin
db.data.users[win == room.p ? room.p : room.p2].exp += room.poin_bot
db.data.users[win == room.p ? room.p2 : room.p].exp -= room.poin_lose
}
delete this.suit[room.id]
return !0
}, room.timeout)}
let jwb = m.sender == room.p
let jwb2 = m.sender == room.p2
let g = /مقص/i
let b = /حجر/i
let k = /ورقه/i
let reg = /^(مقص|حجر|ورقه)/i
if (jwb && reg.test(m.text) && !room.pilih && !m.isGroup) {
room.pilih = reg.exec(m.text.toLowerCase())[0]
room.text = m.text
m.reply(`*[ ✔ ] لقد اخترت ${m.text}, العودة إلى المجموعة و ${room.pilih2 ? `مراجعة النتائج*` : 'انتظر النتائج*'}`)
if (!room.pilih2) this.reply(room.p2, '*[❗]  اختار الخصم آه ، حان دورك للاختيار اسرع اسرع اسرع!!*', 0)}
if (jwb2 && reg.test(m.text) && !room.pilih2 && !m.isGroup) {
room.pilih2 = reg.exec(m.text.toLowerCase())[0]
room.text2 = m.text
m.reply(`*[ ✔ ] لقد اخترت ${m.text}, عد إلى مجموعة و ${room.pilih ? `راجع النتائج*` : 'انتظر النتائج*'}`)
if (!room.pilih) this.reply(room.p, '*[❗] اختار الخصم آه ، حان دورك للاختيار!!*', 0)}
let stage = room.pilih
let stage2 = room.pilih2
if (room.pilih && room.pilih2) {
clearTimeout(room.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = room.p
else if (b.test(stage) && k.test(stage2)) win = room.p2
else if (g.test(stage) && k.test(stage2)) win = room.p
else if (g.test(stage) && b.test(stage2)) win = room.p2
else if (k.test(stage) && b.test(stage2)) win = room.p
else if (k.test(stage) && g.test(stage2)) win = room.p2
else if (stage == stage2) tie = true 
this.reply(room.asal, `
*🧸 نتائج العبه 🐻*${tie ? '\n*—◉ إفراغ!!*' : ''}

*@${room.p.split`@`[0]} (${room.text}) ${tie ? '' : room.p == win ? ` لقد فاز 🥳 +${room.poin}XP*` : ` لقد خصرت 🤡 ${room.poin_lose}XP*`}
*@${room.p2.split`@`[0]} (${room.text2}) ${tie ? '' : room.p2 == win ? ` لقد فاز 🥳 +${room.poin}XP*` : ` خصرت 🤡 ${room.poin_lose}XP*`}
`.trim(), m, { mentions: [room.p, room.p2] } )
if (!tie) {
db.data.users[win == room.p ? room.p : room.p2].exp += room.poin
db.data.users[win == room.p ? room.p : room.p2].exp += room.poin_bot
db.data.users[win == room.p ? room.p2 : room.p].exp += room.poin_lose
}
delete this.suit[room.id]}}
return !0
}
handler.exp = 0
export default handler
function random(arr) {
return arr[Math.floor(Math.random() * arr.length)]}








