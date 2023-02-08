let media = './media/menus/Menu4paypal.jpg'
let handler = async (m, { conn, command }) => {
let str = `
💖 مرحبًا!! أنا أقدر إذا كنت تدعمني بالتبرع. 🎁 أحب العمل الذي حققته وأشاركه معك. شكرًا لك!
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝙋𝙖𝙮𝙋𝙖𝙡 - 
*https://paypal.me/yunabot*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
`.trim()
  
conn.sendHydrated(m.chat, str, `YUNA BOT\n${asistencia}\n\n` + wm, media, 'https://paypal.me/yunabot', '🎁  | تبرّع', null, null, [
[' | المجموعات 🔰', '.grupos'],
[' | المالك 💗', '#owner'],
[' | الأوامر ☘️', '/menu']
], m,)}

handler.command = /^dona(te|si)|donar|دعم|apoyar|دعم|paypal|donating$/i
handler.exp = 80
export default handler
