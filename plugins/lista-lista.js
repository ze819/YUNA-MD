let handler = async (m, { conn, command, text, usedPrefix }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

const sections = [{
title: comienzo + ' 🗂️ أنواع القوائم ' + fin,
rows: [
{title: "📛 محظورين", rowId: `${usedPrefix}listablock`, description: `المستخدمون المحظورون عن طريق الاتصال .`},
{title: "⚠️ تحزيرات", rowId: `${usedPrefix}listadv`, description: `تحذير المستخدمين من الكلمات السيئة .`},
{title: "📵 قروبات المحظورة", rowId: `${usedPrefix}chatsbaneados`, description: `الدردشات التي لا يمكنهم فيها استخدام YUNA`},
{title: "🚷 المستخدمون المحظورون", rowId: `${usedPrefix}listbanuser`, description: `المستخدمون الذين لا يمكنهم استخدام Yuna`},
{title: "🎟️مستخدمو VIP ", rowId: `${usedPrefix}listapremium`, description: `مستخدمو بطاقة بريميوم `},
{title: "💞 علاقة", rowId: `${usedPrefix}listaparejas`, description: `المستخدمون الذين هم في علاقة .`}]}]

const listMessage = {
  text: `أنواع قوائم المستخدمين`,
  footer: wm,
  title: `༺════ •⊰『 𝒚𝒖𝒏𝒂 𝒃𝒐𝒕 』⊱• ════༻`,
  buttonText: `📑 اختر قائمة 📑`,
  sections
}
await conn.sendMessage(m.chat, listMessage, {quoted: fkontak})}
handler.command = /^listas|lists?$/i
export default handler
