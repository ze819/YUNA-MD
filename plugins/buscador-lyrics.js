import fetch from 'node-fetch'
import { lyrics, lyricsv2 } from '@bochilteam/scraper'
import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
if (!teks) throw `${lenguajeGB['smsAvisoMG']()}\nأدخل اسم أغنية للحصول على كلماتها\n*مثال:*\n*${usedPrefix + command} Billie Eilish bored*`
const result = await lyricsv2(teks).catch(async _ => await lyrics(teks))
let res = await fetch(global.API('https://some-random-api.ml', '/lyrics', {
title: result.author + result.title}))
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.thumbnail.genius) throw json


let letratexto =`
 | عنوان 
💚 *${result.title}*
 | كاتب
💜 *${result.author}*
${result.lyrics}
 | الرابط
🧡 *${result.link}*
`.trim()
conn.sendHydrated(m.chat, letratexto, wm, json.thumbnail.genius, null, null, null, null, [
[' | تحميل 🚀', `/play ${text}`],
[' | البحث 🔎', '#buscarmenu'],
[' | قائمة الأوامر☘️', '/menu']
], m)
}
handler.help = ['lirik','letra'].map(v => v + ' <Apa>')
handler.tags = ['internet']
handler.command = /^(lirik|lyrics|lyric|بحث1|letra)$/i
handler.limit = 1
handler.level = 3
handler.exp = 55
export default handler 
