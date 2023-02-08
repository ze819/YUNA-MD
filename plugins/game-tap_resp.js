/*import similarity from 'similarity'
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/^ⷮ/i.test(m.quoted.text)) return !0
    this.yunatap = this.yunatap ? this.yunatap : {}
    if (!(id in this.yunatap)) return m.reply('انتهى هذا اللغز!')
    if (m.quoted.id == this.yunatap[id][0].id) {
     let json = JSON.parse(JSON.stringify(this.yunatap[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.جواب.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.yunatap[id][2]
            m.reply(`*الإجابة الصحيحة!*\n+${this.yunatap[id][2]} Exp`)
            clearTimeout(this.yunatap[id][3])
            delete this.yunatap[id]

        } else if (similarity(m.text.toLowerCase(), json.جواب.toLowerCase().trim()) >= threshold) m.reply(`لقد كدت تنجح!`)
        else m.reply('إجابة غير صحيحة!')
    }
    return !0
}
handler.exp = 0
export default handler*/