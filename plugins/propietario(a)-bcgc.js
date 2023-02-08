import fs from 'fs'
let handler = async (m, { conn, text } ) => {  
let groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0])
let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
let teks = text ? text : cc.text
for (let id of groups) { 
await delay(5 * 5000)
conn.sendButton(id, `*ا⊶⊷⊶⊷ •⊰اعلان عام⊱•⊶⊷⊶⊷ا✶*\n*┃💌* ${text}\n*༺════ •⊰『 𝒚𝒖𝒏𝒂 𝒃𝒐𝒕 』⊱• ════༻*`, '✅ *إعلان رسمي ل يونا*\n' + wm, fs.readFileSync('./src/avatar_contact.png'), [['اك', '.ok'],['اااااا', '.a']], false, { 
contextInfo: { externalAdReply: {
title: 'YUNA BOT ',
body: 'اعلان بوت', 
sourceUrl: `https://www.instagram.com/a_e_b_2003`, 
thumbnail: fs.readFileSync('./media/menus/img11.jpg') }}})}
m.reply(`${iig} ✅ *تم إرسال الرسالة إلى ${groups.length} مجموعة*\n*ربما لم يتم إرسالها إلى جميع المجموعات. معذرة.*`)
}
handler.help = ['broadcastgroup', 'bcgc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(comunicargrupo|comunicadogrupo|bcg|comunicadogrupos|broadcastgc|bcgc)$/i
handler.rowner = true
handler.exp = 500
//handler.owner = true
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms)) 