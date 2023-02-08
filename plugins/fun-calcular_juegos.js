let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `${lenguajeGB['smsAvisoMG']()} الإشارة إلى شخص ما @TAG او اكتب الاسم ` 

if (command == 'جمال') {
let juego = `معدل جمال السيد(ة): ${text.toUpperCase()} بنسبا 100/100\nهيا : ${(100).getRandom()}%`.trim()
await conn.reply(m.chat, juego, m, m.mentionedJid ? { mentions: m.mentionedJid } : {})}

 // ------------------------------------------------------------------------------------------------------------------------------------------------
  
if (command == 'ذكاء') {
let juego = `_*${text.toUpperCase()} ذكي بنسبا ${(500).getRandom()}%*_`.trim()
await conn.reply(m.chat, juego, m, m.mentionedJid ? { mentions: m.mentionedJid } : {})}
  

 // ------------------------------------------------------------------------------------------------------------------------------------------------   
 
  // ------------------------------------------------------------------------------------------------------------------------------------------------
  
if (command == 'غباء') {
let juego = `_*${text.toUpperCase()} غبي بنسبا ${(500).getRandom()}%*_`.trim()
await conn.reply(m.chat, juego, m, m.mentionedJid ? { mentions: m.mentionedJid } : {})}


  

 // ------------------------------------------------------------------------------------------------------------------------------------------------   
 
if (command == 'حب') {
let juego = `*نسبه حب ${text.toUpperCase()} لك هي ${(500).getRandom()}%*`.trim()
await conn.reply(m.chat, juego, m, m.mentionedJid ? { mentions: m.mentionedJid } : {})}

}
handler.help = ['حب', 'جمال', 'lesbiana', 'غباء', 'pajera', 'puto', 'puta', 'ذكاء', 'manca', 'rata', 'prostituta', 'prostituto'].map(v => v + ' @tag | nombre')
handler.tags = ['calculator']
handler.command = /^حب|جمال|lesbiana|pajero|pajera|puto|puta|ذكاء|manca|rata|prostituta|prostituto/i
handler.exp = 100
export default handler
