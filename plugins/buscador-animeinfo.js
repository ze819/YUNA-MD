import translate from '@vitalets/google-translate-api'
import { Anime } from "@shineiichijo/marika"
const client = new Anime();
let handler = async(m, { conn, text, usedPrefix }) => {
if (!text) return m.reply(`*[❗] أدخل اسم الأنمي للبحث*`)
try {  
let anime = await client.searchAnime(text)
let result = anime.data[0];
let resultes = await translate(`${result.background}`, { to: 'ar', autoCorrect: true })   
let resultes2 = await translate(`${result.synopsis}`, { to: 'ar', autoCorrect: true })   
let AnimeInfo = `
🎀 • *عنوان:* ${result.title}
🎋 • *تنسيق:* ${result.type}
📈 • *حالة:* ${result.status.toUpperCase().replace(/\_/g, " ")}
🍥 • *إجمالي الحلقات:* ${result.episodes}
🎈 • *مدة: ${result.duration}*
✨ • *بناء على:* ${result.source.toUpperCase()}
💫 • *تم الافراج عنه:* ${result.aired.from}
🎗 • *وضع الصيغه النهائيه:* ${result.aired.to}
🎐 • *شعبيه:* ${result.popularity}
🎏 • *المفضله:* ${result.favorites}
🎇 • *تصنيف:* ${result.rating}
🏅 • *رتبة:* ${result.rank}
♦ • *مقطوره:* ${result.trailer.url}
🌐 • *الرابط:* ${result.url}
🎆 • *خلفية:* ${resultes.text}
❄ • *ملخص:* ${resultes2.text}`
conn.sendFile(m.chat, result.images.jpg.image_url, 'error.jpg', AnimeInfo, m)
} catch {
throw `*[❗] خطأ، يرجى المحاولة مرة أخرى*`  
}}
handler.command = /^(anime|انمي)$/i
export default handler 