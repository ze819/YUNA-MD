let handler = async (m, { conn, text, command, usedPrefix, args }) => {
    let pp = 'https://media.istockphoto.com/id/460171067/es/foto/sacudir-el-bot%C3%B3n.jpg?s=612x612&w=0&k=20&c=TsX1krTyz8oyRNhpcbri4dguh3WyAZwYOwMu2T68S2A='
    if (!args[0]) {
        return conn.sendHydrated(m.chat, '*راس او نقش*\n\nيمكنك تحديد الخيار باستخدام الأزرار أو استخدام الأوامر:\nدوران نقش\n دوران راس\n',wm, pp, null, null, null, null, [
            ['راس', `${usedPrefix + command} راس `],
            ['نقش', `${usedPrefix + command} نقش `]
        ], m)
    }
    let result = Math.random() > 0.5 ? 'راس' : 'نقش'
    let selected = args[0].toLowerCase()
    if (selected === result) {
        global.db.data.users[m.sender].exp += 100
        return m.reply(` فاز \n\nالاختيار: ${selected}\nنتيجة: ${result}\nفاز +100 XP`)
    } else {
        global.db.data.users[m.sender].exp -= 300
        return m.reply(` خصرت\n\nالاختيار: ${selected}\nنتيجة: ${result}\nخصرت -300 XP`)
    }
}
handler.help = ['دوران']
handler.tags = ['games']
handler.command = /^(دوران)$/i
export default handler
 