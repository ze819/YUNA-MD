limport util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
  if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
  let vn = './media/a.mp3'
  conn.sendPresenceUpdate('recording', m.chat)
  conn.sendMessage(m.chat, { audio: { url: vn }, seconds: '1934.4', ptt: true, mimetype: 'audio/mpeg', fileName: `a.mp3` }, { quoted: m })
}

handler.customPrefix = /ª|a|A/
handler.command = /^(a|ª|A?$)/

let handler2 = async (m, { conn }) => {
  if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
  global.db.data.users[m.sender].money += 100 
  global.db.data.users[m.sender].exp += 100
  
  let vn = './media/siu.mp3'
  conn.sendMessage(m.chat, { audio: { url: vn }, seconds: '1934.4', ptt: true, mimetype: 'audio/mpeg', fileName: `deja de llorar.mp3` }, { quoted: m })
}

handler2.customPrefix = /siu|siiuu|ssiiuu|siuuu|siiuuu|siiiuuuu|siuuuu|siiiiuuuuu|siu|SIIIIUUU/i
handler2.command = new RegExp
handler2.fail = null

let handler3 = async (m, { conn }) => {
  if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
  global.db.data.users[m.sender].money += 100 
  global.db.data.users[m.sender].exp += 100
  
  let vn = './media/Te-amo.mp3'
  conn.sendMessage(m.chat, { audio: { url: vn }, seconds: '1934.4', ptt: true, mimetype: 'audio/mpeg', fileName: `deja de llorar.mp3` }, { quoted: m })
}

handler3.customPrefix = /te amo|teamo/i
handler3.command = new RegExp
handler3.fail = null

let handler4 = async (m, { conn }) => {
  if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
  global.db.data.users[m.sender].money += 100 
  global.db.data.users[m.sender].exp += 100
  
  

export default handler
