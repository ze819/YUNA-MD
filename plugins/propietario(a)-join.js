let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text, isMods, isOwner, isPrems }) => {
try {  
let link = (m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text
let [_, code] = link.match(linkRegex) || []
if (!code) throw '${mg}🙌 *يجب أن يكون رابط UR*\n😼 *أدخل رابط مجموعة* \n*مثل*\n*#unete ${nn}*\n\n*#join ${nnn}*'
if ( isPrems || isMods || isOwner || m.fromMe) {
m.reply(`*انضمت يونا إلى المجموعة! ✅*\n*انضم بنجاح ✅*`)
await delay(5 * 5000)
let res = await conn.groupAcceptInvite(code)
} else {
const data = global.owner.filter(([id]) => id)
for (let jid of data.map(([id]) => [id] + '@s.whatsapp.net').filter(v => v != conn.user.jid)) await m.reply('*${iig}╭══•───────────────•══╮\n┃ 📧 *طلب الحصول على قروب*\n┃ 📧 *طلب مجموعة*\n╰══•───────────────•══╯\n\n*👤 مقدم الطلب:* ' + 'wa.me/' + m.sender.split('@')[0] + '\n🔮 رابط المجموعة:* ' + link, jid)
await ('${ag}*✅ تم إرسال الرابط الخاص بك إلى المالك الخاص بي* \n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n⚠️ *سيتم تقييم مجموعتك وسيكون الأمر متروكا لمالك بلدي إذا انضم $ {gt} إلى المجموعة أم لا.*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n❕ *قد يتم رفض طلبك للأسباب التالية:* \n*1️⃣ الروبوت مشبع* \n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n2️⃣ * تمت إزالة الروبوت من المجموعة.*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n3️⃣ * لا تمتثل المجموعة للوائح ${gt}* \n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n4️⃣ * تم إعادة تعين رابط المجموعة* \n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n5️⃣ *لم تتم إضافته إلى المجموعات من قبل المالك*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n💌 *قد يستغرق الرد على الطلب ساعات. يرجى التحلي بالصبر. شكرًا لك* ')
}
} catch {
throw '*y el link?*'  
}}
handler.help = ['join [chat.whatsapp.com]']
handler.tags = ['owner']
handler.command = /^join|nuevogrupo$/i
handler.private = true 
export default handler