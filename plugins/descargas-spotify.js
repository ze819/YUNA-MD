import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
if (!text) throw `*[❗] أدخل اسم أغنية للبحث عنها*`
try {
let res = await fetch(global.API('zeks', '/api/spotify', { q: text }, 'apikey'))
if (!res.ok) throw await res.text()
let json = await res.json()
if(!json.data[0]) throw json
let { title, artists, album, thumb, url, preview_mp3 } = json.data[0]
let spotifyi = `❒═════❬ سبوتيفي ❭═════╾❒
┬
├‣✨ *عنوان:* ${title}
┴
┬
├‣🗣️ *الفنان:* ${artists}
┴
┬
├‣🎆 *البوم:* ${album}
┴
┬
├‣🌐 *رابط*: ${url}
┴
┬
├‣💚 *رابط مباشر:* ${preview_mp3}\n┴\n\n*_- إرسال معاينة الموسيقى_*\n\n${wm}`

conn.sendFile(m.chat, thumb, '', spotifyi, m)
conn.sendFile(m.chat, preview_mp3, 'spotify.mp3', spotifyi, m)
} catch (e) {
throw '*[❗] خطأ ، لم يكن من الممكن البحث عن الأغنية أو صفحة المساعدة للعثور على إسقاط الأغنية ، يرجى إعادة إدخالها لاحقا*'
}}
handler.command = /^(spotify|sy)$/i
handler.help = ['spotify']
handler.tags = ['general']
export default handler
