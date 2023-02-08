const items = [
    'limit', 'exp', 'joincount', 'money', 'potion', 'trash', 'wood',
    'rock', 'string', 'petFood', 'emerald',
    'diamond', 'gold', 'iron', 'common',
    'uncoommon', 'mythic', 'legendary', 'pet',
]
let confirmation = {} 
async function handler(m, { conn, args, usedPrefix, command }) {
    if (confirmation[m.sender]) return m.reply('أنت تقوم بالتحويل')
    let user = global.db.data.users[m.sender]
    const item = items.filter(v => v in user && typeof user[v] == 'number')
    
    let lol = `💱 *تبرع* 💱
    
*${usedPrefix + command} العنصر + الكميه + @منشن شخص
*مثل*
*${usedPrefix + command} exp 30 @393271166550*

╭━━━━━━━━━━━━━━━━━━ ღ
┃ ✅ *الموارد المتاحة*
┃──────────────
┃ limit *= الماس* 💎
┃ money *= كوينز*
┃ exp *= خبرى* ⚡
┃iron= *حديد*
┃money = *مال*
┃potion = *جرعه*
┃trash = *مخلفات*
┃wood = *خشب* 
┃rock = *صخر*
┃string= *خيط*
┃petFood = *طعام الحيوانات الأليفة*
┃emerald = *زمرد*
┃gold = *ذهب*
┃common = *صندوق شائع*
┃uncoommon = *صندوق غير شائع*
┃mythic = *صندوق اسطوري*
┃legendary = *لصندوق الأسطوري*
┃pet = *حيوان أليف*
╰━━━━━━━━━━━━━━━━━━ ღ 
`.trim()
    
    const type = (args[0] || '').toLowerCase()
    if (!item.includes(type)) return m.reply(lol)
    const count = Math.min(Number.MAX_SAFE_INTEGER, Math.max(1, (isNumber(args[1]) ? parseInt(args[1]) : 1))) * 1
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[2] ? (args[2].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
    if (!who) return m.reply(`${ag} *_منشن شخص_*`)
    if (!(who in global.db.data.users)) return m.reply(`${fg}*لا يمكن العثور على المستخدم ${WHO} في قاعدة البيانات الخاصة بي*`)
    if (user[type] * 1 < count) return m.reply(`${fg}*_لا تملك ما بكفي من العنصر _ ${type}*`)
    let mentionedJid = [who]
    let username = conn.getName(who)
    
    let confirm = `
*أنت على وشك القيام بتبرع بـ:* 

💹 *${count} ${type} من أجل* *@${(who || '').replace(/@s\.whatsapp\.net/g, '')}* ? 

*تريد المتابعة?*`.trim()
    
    let c = `${wm}\nلديك 60 ثانية!!`
    conn.sendButton(m.chat, confirm, c, null, [['نعم'], ['لا']], m, { mentions: [who] })
    confirmation[m.sender] = {
        sender: m.sender,
        to: who,
        message: m,
        type,
        count,
        timeout: setTimeout(() => (m.reply('*انتهى وقتك*'), delete confirmation[m.sender]), 60 * 1000)
    }
}

handler.before = async m => {
    if (m.isBaileys) return
    if (!(m.sender in confirmation)) return
    if (!m.text) return
    let { timeout, sender, message, to, type, count } = confirmation[m.sender]
    if (m.id === message.id) return
    let user = global.db.data.users[sender]
    let _user = global.db.data.users[to]
    if (/لا?/g.test(m.text.toLowerCase())) {
        clearTimeout(timeout)
        delete confirmation[sender]
        return m.reply('*ملغي*')
    }
    if (/نعم?/g.test(m.text.toLowerCase())) {
        let previous = user[type] * 1
        let _previous = _user[type] * 1
        user[type] -= count * 1
        _user[type] += count * 1
        if (previous > user[type] * 1 && _previous < _user[type] * 1) m.reply(`✅ *تم التحويل بنجاح:*\n\n*${count} ${type} من أجل* @${(to || '').replace(/@s\.whatsapp\.net/g, '')}`, null, { mentions: [to] })
        else {
            user[type] = previous
            _user[type] = _previous
            m.reply(`*Error al transferir ${count} ${type} para* *@${(to || '').replace(/@s\.whatsapp\.net/g, '')}*`, null, { mentions: [to] })
        }
        clearTimeout(timeout)
        delete confirmation[sender]
    }
}

handler.help = ['transfer'].map(v => v + ' [tipo] [cantidad] [@tag]')
handler.tags = ['xp']
handler.command = ['تبرع', 'transfer', 'darxp', 'dar', 'enviar', 'transferir'] 

handler.disabled = false

export default handler

function special(type) {
    let b = type.toLowerCase()
    let special = (['common', 'uncoommon', 'mythic', 'legendary', 'pet'].includes(b) ? ' Crate' : '')
    return special
}

function isNumber(x) {
    return !isNaN(x)
}
