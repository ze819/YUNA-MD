let media = './media/menus/Menuvid2.mp4'
let handler = async (m, { conn, command }) => {
let str = `
💜 مرحبا بكم في الحسابات الرسمية
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ *GITHUB*
*${md}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ *INSTAGRAM*
*${ig}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ *YOUTUBE*
*${yt}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*إذا كانت لديك شكوك أو اقتراحات أو أسئلة ، فما عليك سوى التكلم مع مالك.*
`.trim()
  
conn.sendHydrated(m.chat, str, wm, media, 'https://github.com/ahmed1p7', 'YUNA', null, null, [
['قروبات رسمي🔰', '.grupos'],
['مالك 💗', '#owner']
], m,)}

handler.command = /^cuentasoficiales|gataig|cuentasgb|cuentagb|accounts|gataaccounts|account|iggata|cuentasdegata|cuentasdegatabot|حسابات_يونا|حسابات يونا|cuentasgatabot$/i
handler.exp = 35
export default handler
