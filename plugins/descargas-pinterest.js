import { pinterest } from '@bochilteam/scraper'
let handler = async(m, { conn, text, usedPrefix, command }) => {
if (!text) throw `${lenguajeGB['smsAvisoMG']()} استخدم الأمر مثل هذا\n*${usedPrefix + command} yuna kuma*` 
const json = await pinterest(text)
await conn.sendFile(m.chat, json.getRandom(), 'error.jpg', `
╰⊱💚⊱ *نجاح* ⊱💚⊱╮`.trim(), m)
  
  conn.sendHydrated(m.chat, `💞  | نتيجة: ${text}`, `بينتيريست | ${wm}`, null, md, 'YUNA-MD', null, null, [
['🔄  | التالي', `/pinterest ${text}`],
['🔍 جوجل ', `#image ${text}`],
['🐈 قائمة الأوامر', `.menu`],  
], m)
                    }
handler.help = ['p <الكلمه الاساسيه>']
handler.tags = ['internet']
handler.command = /^(pinterest|pt|p|pinterestdl)$/i
handler.exp = 25
export default handler
