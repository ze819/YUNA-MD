import { wallpaper, wallpaperv2 } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `${lenguajeGB['smsAvisoMG']()} يجب عليك كتابة الاسم\nمثل\n*${usedPrefix + command}  kuma*`
const res = await (/2/.test(command) ? wallpaperv2 : wallpaper)(text)
const img = res[Math.floor(Math.random() * res.length)]
let link = img
//conn.sendFile(m.chat, img, 'error.jpg', `*𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾 𝙳𝙴 ${text}*`, m)
  
  conn.sendHydrated(m.chat, `💞 نتيجة: ${text}`, `ويب | ${wm}`, img, img, '☘️ رابط', null, null, [
['🔄 التالي', `${usedPrefix + command} ${text}`],
['🔍 بينتيريست ', `#pinterest ${text}`],
['🔍 جوجل ', `#image ${text}`],
], m)
  
}
handler.help = ['', '2'].map(v => 'wallpaper' + v + ' <query>')
handler.tags = ['downloader']
handler.command = /^(wp|ويب|wallpaper2?)$/i
handler.exp = 29
export default handler 
