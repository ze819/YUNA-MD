import { googleIt } from '@bochilteam/scraper'
let handler = async (m, { conn, command, args, usedPrefix }) => {
const fetch = (await import('node-fetch')).default
let full = /f$/i.test(command)
let text = args.join` `
if (!text) return conn.reply(m.chat, `${lenguajeGB['smsAvisoMG']()}\nاكتب ما تريد البحث عنه\n*مثال:*\n*${usedPrefix + command} yuna kuma*`, m)
let pp = './media/menus/Menu1.jpg'
let url = 'https://google.com/search?q=' + encodeURIComponent(text)
let search = await googleIt(text)
let msg = search.articles.map(({
// header,
title,
url,
description
}) => {
return `*${title}*\n_${url}_\n_${description}_\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈`
}).join('\n\n')

let info = `\n💝 *تعرف على الجديد وتذكر أن يكون لديك أحدث إصدار.*
  `.trim()
conn.sendHydrated(m.chat, info, wm, pp, ig, 'انستغرام', null, null, [
[' | البحث 🔎', '#buscarmenu'],
[' | القائمة الكاملة ✨', '.allmenu'],
[' | القائمة ☘️', '/menu']
], m,) 

try {
let ss = await (await fetch(global.API('nrtm', '/api/ssweb', { delay: 1000, url, full }))).arrayBuffer()
if (/<!DOCTYPE html>/i.test(ss.toBuffer().toString())) throw ''
await conn.sendFile(m.chat, ss, 'error.png', url + '\n\n' + msg, m)
} catch (e) {
m.reply(msg)
}}
handler.help = ['google', 'googlef'].map(v => v + ' <pencarian>')
handler.tags = ['internet']
handler.command = /^بحث|googlef?$/i
handler.exp = 40
handler.exp = 3
export default handler
