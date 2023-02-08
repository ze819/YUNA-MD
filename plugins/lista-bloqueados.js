import fetch from 'node-fetch' 
let handler = async (m, { conn }) => {
let grupos = [nna, nn, nnn, nnnt, nnntt, nnnttt]
let gata = [img5, img6, img7, img8, img9]
let enlace = { contextInfo: { externalAdReply: {title: wm + ' 🐈', body: 'support group' , sourceUrl: grupos.getRandom(), thumbnail: await(await fetch(gata.getRandom())).buffer() }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: '𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', thumbnailUrl: await(await fetch(global.img)).buffer(), sourceUrl: yt }}}
let dos = [enlace, enlace2]
await conn.fetchBlocklist().then(async data => {
let txt = `📛 قائمة  : محظورين\n\n*مجموع :* ${data.length}\n\n╭━━━[ *${vs} 𓃠* ]━━━⬣\n`
for (let i of data) {
txt += `┃🚫 @${i.split("@")[0]}\n`
}
txt += "╰━━━━━━━⬣"
return conn.sendButton(m.chat, txt, `*من فضلك لا تتصل لتجنب الحظر ، شكرا لك.*\n` + wm, null, [ 
[' الأوامر☘️', '/menu']], m, { mentions: await conn.parseMention(txt) })
}).catch(err => {
console.log(err);
return conn.sendButton(m.chat, `${rg} لم يتم حظر أي شخص`, wm, gata, [
[' الأوامر☘️', '/menu']], m, dos.getRandom())
})} 
handler.command = ['bloqueados', 'bloqueadoslista', 'listablock', 'blocklist', 'listblock', 'listabloqueados', 'محظورين' ] 

export default handler
