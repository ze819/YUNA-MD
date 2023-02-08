import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `${lenguajeGB['smsAvisoMG']()}\n ستخدم الأمر مثل هذا\n*${usedPrefix + command} yuma kuma*`
const res = await googleImage(text)
let image = res.getRandom()
let link = image
conn.sendHydrated(m.chat, `💞  | نتيجة: ${text}`, `جوجل | ${wm}`, link, link, '☘️ الرابط', null, null, [
['🔄  | التالي', `/imagen ${text}`],
['🔍 بحث ', `#pinterest ${text}`],
['🐈 قائمة', `.menu`],  
], m)
}
handler.help = ['gimage <query>', 'imagen <query>']
handler.tags = ['internet', 'tools']
handler.command = /^(صور|image|imagen)$/i
handler.exp = 20
export default handler
