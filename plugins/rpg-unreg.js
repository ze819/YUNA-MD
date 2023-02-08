import { createHash } from 'crypto'
let handler = async function (m, { args }) {
if (!args[0]) throw ``
let user = global.db.data.users[m.sender]
let sn = createHash('md5').update(m.sender).digest('hex')
if (args[0] !== sn) throw `${fg}  تحقق من صحته ، استخدم الأمر *#myns* للحصول على الرقم التسلسلي الخاص بك`
global.db.data.users[m.sender].money -= 400
global.db.data.users[m.sender].limit -= 7
global.db.data.users[m.sender].exp -= 250
global.db.data.users[m.sender].joincount -= 3

user.registroC = false
user.registroR = false
global.db.data.users[m.sender].name = 0
global.db.data.users[m.sender].age = 0
global.db.data.users[m.sender].genero = 0
user.registered = false
m.reply(`${eg}  لم تعد مسجلا `)
}
handler.help = ['', 'ister'].map(v => 'unreg' + v + ' <numero de serie>')
handler.tags = ['xp']
handler.command = /^unreg(ister)?$/i
handler.register = true
export default handler
