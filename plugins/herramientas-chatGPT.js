import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
if (!text) throw `[❗] أدخل طلبا أو أمرا لاستخدام وظيفة CHATGPT\n\n❏ مثال على الطلبات والأوامر\n❏ ${usedPrefix + command} Reflexion sobre la serie Merlina 2022 de netflix\n❏ ${usedPrefix + command} Codigo en JS para un juego de cartas`
try {
m.reply('*[❗] انتظر لحظة عندما أرسل تلك التي تسألني عنها*')
let tiores = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=${lolkeysapi}&text=${text}&user=user-unique-id`)
let hasil = await tiores.json()
m.reply(`${hasil.result}`.trim())
} catch {
throw `*[❗] خطأ، حاول مرة أخرى*`
}}
handler.command = ['openai', 'chatgpt', 'ia', 'robot']
export default handler