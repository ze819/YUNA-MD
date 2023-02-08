let handler = async (m, { conn, usedPrefix, command, args: [event], text }) => {
if (!event) return await conn.sendButton(m.chat, `*EJEMPLO:*

${usedPrefix + command} welcome @منشن
${usedPrefix + command} bye @منشن
${usedPrefix + command} promote @منشن
${usedPrefix + command} demote @منشن`.trim(), wm, null, [['WELCOME', '#simulate welcome'], ['BYE', '#simulate bye']])
let mentions = text.replace(event, '').trimStart()
let who = mentions ? conn.parseMention(mentions) : []
let part = who.length ? who : [m.sender]
let act = false
m.reply(`*Simulando ${event}...*`)
switch (event.toLowerCase()) {
case 'add':
case 'invite':
case 'welcome':
case 'bienvenida':       
act = 'add'
break
case 'bye':
case 'kick':
case 'leave':
case 'remove':
case 'sacar':
act = 'remove'
break
case 'promote':
case 'daradmin':
case 'darpoder':
act = 'promote'
break
case 'demote':
case 'quitaradmin':
case 'quitarpoder':
act = 'demote'
break
default:
throw 'خطأ ، أدخل خيارا صالحا'
}
if (act) return conn.participantsUpdate({
id: m.chat,
participants: part,
action: act
})}
handler.help = ['simulate <event> [@mention]','simular <event>'] 
handler.tags = ['owner']
handler.command = /^simulate|simular$/i
handler.group = true
export default handler
