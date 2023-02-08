async function handler(m, { usedPrefix }) {
let users = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]
await m.reply( '😺 قائمة الروبوتات الفرعية النشطة (SERBOT / JADIBOT)\n\n🙌 يمكنك الاتصال بهم لتطلب منهم الانضمام إلى مجموعتك ، كن محترما\n\n❕ إذا ظهر النص فارغا ، فهذا يعني أنه لا توجد روبوتات فرعية نشطة\n\n❗ يدير كل مستخدم روبوت فرعي الوظيفة كما يريد ، ولا يتم تحميل الرقم الرئيسي المسؤولية. ')
await m.reply(users.map(v => '🙂 Wa.me/' + v.jid.replace(/[^0-9]/g, '') + `?text=${usedPrefix}estado\n(${v.name})\n\n`).join('\n'))}
handler.command = handler.help = ['listajadibots','boot','listjadibot','bots','subsbots']
handler.tags = ['jadibot']
export default handler

