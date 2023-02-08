import { toDataURL } from 'qrcode'
let handler = async (m, { text, conn }) => {
if (!text) throw `${mg} اكتب نصا لتحويله إلى رمز الاستجابة السريعة`
conn.sendFile(m.chat, await toDataURL(text.slice(0, 2048), { scale: 8 }), 'qrcode.png', wm, m)
}
handler.help = ['', 'code'].map(v => 'qr' + v + ' <teks>')
handler.tags = ['tools']
handler.command = /^qr(code)|رمز?$/i
export default handler
