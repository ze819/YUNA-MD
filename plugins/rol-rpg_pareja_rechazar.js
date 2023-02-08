import fetch from 'node-fetch'  
import { areJidsSameUser } from '@adiwajshing/baileys'
let handler = async (m, { conn, text, participants, groupMetadata }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let grupos = [nna, nn, nnn, nnnt]
let gata = [img5, img6, img7, img8, img9]
let enlace = { contextInfo: { externalAdReply: {title: wm + ' ❤️', body: 'support group' , sourceUrl: grupos.getRandom(), thumbnail: await(await fetch(gata.getRandom())).buffer() }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: '𝗦𝘂𝗽𝗲𝗿 YUNABOT- 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', thumbnailUrl: await(await fetch(global.img)).buffer(), sourceUrl: yt }}}
let dos = [enlace, enlace2]

let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
var number = text.split`@`[1]

if(!text && !m.quoted) return await conn.sendButton(m.chat, `${mg}وضع علامة على رسالة الشخص الذي تريد رفضه كشريك أو الرد عليها\n`, wm, null, [
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m)
	
try {
if(text) {
var user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
var user = conn.getName(m.quoted.sender)
} else if(m.mentionedJid) {
var user = number + '@s.whatsapp.net'
}  
} catch (e) {
} finally {
	
let users = m.isGroup ? participants.find(v => areJidsSameUser(v.jid == user)) : {}
let yo = conn.getName(m.sender)
let tu = conn.getName(who)

if(!users) return await conn.sendButton(m.chat, `${fg}\nلم يتم العثور على الشخص ، يجب أن يكون في هذه المجموعة`, wm, null, [
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m)
	
if(user === m.sender) return await conn.sendButton(m.chat, `${fg}\nأنت نفسك لا يمكن أن تكون شريكا `, wm, null, [
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m)
	
if(user === conn.user.jid) return await conn.sendButton(m.chat, `${fg}حبيبي\n\nمعي لا يمكنك أن نكون زوجان `, wm, null, [
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m)
    
if(global.db.data.users[user].pasangan != m.sender){ 
return await conn.sendButton(m.chat, `لا يمكنك الرفض  *${tu}* إذا لم يصرح أحد بذلك ، فأعلن عن نفسك حتى يقولوا إذا قبلوك أو رفضوك\n\nلا يمكنك الرفض إذا لم يعلن أحد ، أعلن مع *${tu}* لتقول ما إذا كنت تقبلك أو ترفضك`, wm, null, [
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m, { contextInfo: { mentionedJid: [user, tu] }})	
	
}else{
global.db.data.users[user].pasangan = ""
return await conn.sendButton(m.chat, ` الاسف *${yo}* لقد قام(ة) برفض السيد(ة)  💔*${tu}*\nلا تحزن ، لا يزال لديك الكثير لتفعله  تعيش و تلاقي الأحسن 🍃\n\n لا تهتم ل أمثاله(ا) العالم كبير و يوجد افضل بكثير `, `*${tu} 💔 ${yo}*\n` + wm, img5, [
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], m, dos.getRandom(), { contextInfo: { mentionedJid: [user, tu, yo]}})	
}}}

handler.command = /^(ارفض|رفض|أرفض)$/i
handler.group = true
export default handler
