import fetch from 'node-fetch'
let handler = async (m, { command, conn, usedPrefix, args }) => {
let user = global.db.data.users[m.sender]
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" 
}
let grupos = [nna, nn, nnn, nnnt]
let gata = [img5, img6, img7, img8, img9]
let enlace = { contextInfo: { externalAdReply: {title: wm + ' 👑', body: 'support group' , sourceUrl: grupos.getRandom(), thumbnail: await(await fetch(gata.getRandom())).buffer() }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: ' 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', thumbnailUrl: await(await fetch(global.img)).buffer(), sourceUrl: yt }}}
let dos = [enlace, enlace2]

const items = {
   شراء: {
        exp: { eleksirb: 3 },
        limit: { money: 400 },
        diamond: { berlian: 5 },
        joincount: { limit: 15 },
        emerald: { emasbatang: 5 },
        berlian: { kyubi: 25 },
        kyubi: { trash: 15 },  
        gold: {  diamond: 35 },
        money: { kaleng: 2 },
        tiketcoin: { joincount: 3 },
        stamina: { potion: 2 },
        
        potion: { money: 550 },
        aqua: { botol: 2 },
        trash: { eleksirb: 5 },
        wood: { string: 5 },
        rock: { kardus: 6 },
        batu: { coal: 25 },
        string: { kaleng: 4 },
        iron: { kyubi: 20 },
        coal: { trash: 20 },
        botol: { wood: 4 },
        kaleng: { potion: 2 },
        kardus: { trash: 20 },
        
        eleksirb: { healtmonster: 2},
        emasbatang: { kayu: 30},
        emasbiasa: { diamond: 18 },
        rubah: { berlian: 40 },
        sampah: { trash: 70 },
        serigala: { kaleng: 125 },
        kayu: { wood: 40 },
        sword: { gold: 2 },
        umpan: { aqua: 2 },
        healtmonster: { kyubi: 19 },
        pancingan: { trash: user.pancingan == 0 ? 5 : '' || user.pancingan == 1 ? 10 : '' || user.pancingan == 2 ? 15 : '' || user.pancingan == 3 ? 20 : '' || user.pancingan >= 4 ? 25 : '' },
        emas: { berlian: 20 },
        pancing: { tiketcoin: user.pancing == 0 ? 1 : '' || user.pancing == 1 ? 2 : '' || user.pancing == 2 ? 3 : '' || user.pancing == 3 ? 4 : '' || user.pancing >= 4 ? 7 : '' },
        
        common: { aqua: 40 },
        uncoommon: { kyubi: 55 },
        mythic: { tiketcoin: 17 },
        pet: { kayu: 45 },
        gardenboxs: { healtmonster: 25 },
        legendary: { emerald: 75 },
        
        anggur: { emerald: 3 },
        apel: { emerald: 3 },
        jeruk: { emerald: 3 },
        mangga: { emerald: 3 },
        pisang: { emerald: 3 },
        
        bibitanggur: { aqua: 15 },
        bibitapel: { aqua: 15 },
        bibitjeruk: { aqua: 15 },
        bibitmangga: { aqua: 15 },
        bibitpisang: { aqua: 15 },
        
        centaur: { limit:45 },
        griffin: { limit: 55 },
        kucing: { limit: 70 },
        naga: { limit: 85 },
        fox: { limit: 100 },
        kuda: { limit: 125 },
        phonix: { limit: 140 },
        wolf: { limit: 155 },
        
        petFood: { tiketcoin: 4 },
        makanancentaur: { tiketcoin: 6 },
        makanangriffin: { tiketcoin: 8 },
        makanankyubi: { tiketcoin: 10 },
        makanannaga: { tiketcoin: 12 },
        makananpet: { tiketcoin: 14 },
        makananphonix: { tiketcoin: 16 }
    },
   
    بيع: {
        exp: { trash: pickRandom([1, 1, 2]) },
        limit: { eleksirb: pickRandom([1, 4, 1]) },
        diamond: { tiketcoin: pickRandom([1, 1, 2]) },
        joincount: { emasbatang: pickRandom([1, 1, 2]) },
        emerald: { money: pickRandom([10, 500, 1]) },
        berlian: { sword: pickRandom([1, 1, 2]) },
        kyubi: { aqua: pickRandom([1, 1, 2]) },
        gold: { exp: pickRandom([1, 20, 800]) },
        money: { aqua: pickRandom([1, 1, 2]) },
        tiketcoin: { kyubi: pickRandom([1, 1, 2]) },
        
        potion: { botol: pickRandom([1, 1, 3]) },
        aqua: { kaleng: pickRandom([1, 1, 2]) },
        trash: { umpan: pickRandom([1, 1, 2]) },
        wood: { coal: pickRandom([1, 1, 2]) },
        rock: { string: pickRandom([1, 1, 2]) },
        batu: { joincount: pickRandom([1, 1, 2]) },
        string: { kardus: pickRandom([1, 1, 2]) },
        iron: { healtmonster: pickRandom([1, 1, 3]) },
        coal: { money: pickRandom([1, 3, 30]) },
        botol: { aqua: pickRandom([1, 1, 2]) },
        kaleng: { batu: pickRandom([1, 1, 2]) },
        kardus: { pancingan: pickRandom([1, 1, 2]) },
        
        eleksirb: { rubah: pickRandom([1, 1, 2]) },
        emasbatang: { emasbiasa: pickRandom([1, 1, 3]) },
        emasbiasa: { potion: pickRandom([1, 1, 2]) },
        rubah: { petFood: pickRandom([1, 1, 4]) },
        sampah: { trash: pickRandom([1, 2, 20]) },
        serigala: { petFood: pickRandom([1, 2, 22]) },
        kayu: { wood: pickRandom([1, 3, 5]) },
        sword: { berlian: pickRandom([1, 1, 2]) },
        umpan: { exp: pickRandom([1, 5, 40, 0]) },
        healtmonster: { diamond: pickRandom([1, 1, 2]) },
        pancingan: { money: pickRandom([1, 10, 30]) },
        emas: { berlian: pickRandom([1, 1, 3]) },
        
        common: { limit: pickRandom([1, 3, 10]) },
        uncoommon: { diamond: pickRandom([1, 4, 15]) },
        mythic: { berlian: pickRandom([1, 3, 13]) },
        pet: { money: pickRandom([1, 500, 1500]) },
        gardenboxs: { gold: pickRandom([1, 1, 3]) },
        legendary: { emerald: pickRandom([1, 4, 20]) },
        
        anggur: { joincount: pickRandom([1, 1, 2]) },
        apel: { tiketcoin: pickRandom([1, 1, 2]) },
        jeruk: { berlian: pickRandom([1, 1, 2]) },
        mangga: { gold: pickRandom([1, 1, 2]) },
        pisang: { diamond: pickRandom([1, 1, 2]) },
        
        bibitanggur: { potion: pickRandom([1, 1, 2]) },
        bibitapel: { umpan: pickRandom([1, 1, 3]) },
        bibitjeruk: { healtmonster: pickRandom([1, 1, 2]) },
        bibitmangga: { pancingan: pickRandom([1, 1, 3]) },
        bibitpisang: { wood: pickRandom([1, 2, 4]) },
        
        centaur: { anggur: pickRandom([1, 3, 5]) },
        griffin: { apel: pickRandom([1, 2, 4]) },
        kucing: { jeruk: pickRandom([1, 3, 6]) },
        naga: { mangga: pickRandom([1, 4, 8]) },
        fox: { pisang: pickRandom([1, 5, 9]) },
        kuda: { anggur: pickRandom([1, 6, 10]) },
        phonix: { apel: pickRandom([1, 7, 12]) },
        wolf: { jeruk: pickRandom([1, 8, 15]) },
        
        petFood: { money: pickRandom([1, 400, 1400]) },
        makanancentaur: { diamond: pickRandom([1, 1, 2]) },
        makanangriffin: { diamond: pickRandom([1, 1, 3]) },
        makanankyubi: { diamond: pickRandom([1, 2, 4]) },
        makanannaga: { diamond: pickRandom([1, 2, 4]) },
        makananpet: { diamond: pickRandom([1, 3, 5]) },
        makananphonix: { diamond: pickRandom([1, 3, 5]) },
    }
}   
   
let imgr = flaaa.getRandom()
    const listItems = Object.fromEntries(Object.entries(items[command.toLowerCase()]).filter(([v]) => v && v in user))
    
    let text = ''
    let footer = ''
    let image = ''
    let buttons = ''
    text = (command.toLowerCase() == 'شراء' ?
(`
${htki} *شراء* ${htka}
`.trim()) : 
(`
${htki} *بيع* ${htka}
`.trim())
)
    footer = (command.toLowerCase() == 'شراء' ?
(`
🔖  قائمة المقالات
${Object.keys(listItems).map((v) => {
        let paymentMethod = Object.keys(listItems[v]).find(v => v in user)
        return `*» 1 ⇢ ${global.rpgshop.emoticon(v)}*\n*السعر:* ${listItems[v][paymentMethod]} ${global.rpgshop.emoticon(paymentMethod)}\n*شراء* ${global.rpgshopp.emoticon(v)} استخدام ${usedPrefix + command} ${v} *كميه*\n*---------------------------------------------------*\n`.trim()
    }).join('\n')}
✨  عينة للشراء
*استخدم الأمر على النحو التالي:*
*» ${usedPrefix}${command} (مقالة) (كميه)*
*» ${usedPrefix}${command} (عناصر) (كميه)*

*★  مثل*
*» ${usedPrefix}${command} جرعه 5*
`.trim()) : 
(`
🔖   قائمة المقالات
${Object.keys(listItems).map((v) => {
        let paymentMethod = Object.keys(listItems[v]).find(v => v in user)
        return `*» 1 ⇢ ${global.rpgshop.emoticon(v)}*\n*السعر:* ${listItems[v][paymentMethod]} ${global.rpgshop.emoticon(paymentMethod)}\n*شراء* ${global.rpgshopp.emoticon(v)} استخدام ${usedPrefix + command} ${v} *كميه*\n*---------------------------------------------------*\n`.trim()
    }).join('\n')}
✨  عينة للبيع
*استخدم الأمر على النحو التالي:*
*» ${usedPrefix}${command} (عنصر ) (كميه)*
*» ${usedPrefix}${command} (بند) (كميه)*

*★ مثل*
*» ${usedPrefix}${command} potion 5*
`.trim())
)
    image = (command.toLowerCase() == 'شراء' ?
(imgr + 'ابتاع : شراء') : 
(imgr + 'باع : بيع')
)
    buttons = (command.toLowerCase() == 'شراء' ?
([
[`🏪 متجر للبيع `, `${usedPrefix}بيع`],
[`🎒 المخزن `, `${usedPrefix}inventory`]
]) : 
([
[`🏪 تسوق للشراء `, `${usedPrefix}شراء`],
[`🎒 المخزن `, `${usedPrefix}inventory`]
])
)
const item = (args[0] || '').toLowerCase()
const total = Math.floor(isNumber(args[1]) ? Math.min(Math.max(parseInt(args[1]), 1), Number.MAX_SAFE_INTEGER) : 1) * 1
let premium = user.premium

if (!listItems[item]) return conn.sendButton(m.chat, text, footer, image, buttons, m)
if (command.toLowerCase() == 'شراء') {
let paymentMethod = Object.keys(listItems[item]).find(v => v in user)
if (user[paymentMethod] < listItems[item][paymentMethod] * total) return conn.sendButton(m.chat,
`*༺════ •⊰『 موارد غير كافية 』⊱• ════༻*`, 
`*_تحتاج_  ${(listItems[item][paymentMethod] * total) - user[paymentMethod]} ${global.rpgshop.emoticon(paymentMethod)} ل شراء  ${total} ${global.rpgshop.emoticon(item)}.*

*_لديك فقط_  ${user[paymentMethod]} ${global.rpgshop.emoticon(paymentMethod)}.*
*–––––––––––––––––––––––––*
*أسئلة للحصول على الموارد*
*⛰️  مغامرة : » ${new Date - user.lastadventure < 1500000 ? '❌' : `✅ ${usedPrefix} _مغامرة_`}*
*♻️ الساعه » ${new Date - user.lasthourly < 3600000 ? '❌' : `✅ _${usedPrefix} _ساعه_`}*
*💫   أسبوعي ${new Date - user.lastweekly < 259200000 ? '❌' : `✅ _${usedPrefix} اسبوعيه_`}*
*🔔 يوميه ${new Date - user.lastclaim < 7200000 ? '❌' : `✅ _${usedPrefix} يومي_`}*
*🏅 شهري ${new Date - user.lastmonthly < 432000000 ? '❌' : `✅ _${usedPrefix} شهريه_`}*`.trim(), imgr + ' موارد منخفضة', [
[` شراء  ${(listItems[item][paymentMethod] * total) - user[paymentMethod]} ${global.rpgshopp.emoticon(paymentMethod)}`, `${usedPrefix}شراء ${paymentMethod} ${(listItems[item][paymentMethod] * total) - user[paymentMethod]}`],
[` اطلب المساعده ☘️`, `${usedPrefix}pedirayuda *الرجاء شخص يساعدني مع*${(listItems[item][paymentMethod] * total) - user[paymentMethod]} ${global.rpg.emoticon(paymentMethod)}.*
*» المساعدة في نقل:*
*${usedPrefix}transfer ${paymentMethod} ${(listItems[item][paymentMethod] * total) - user[paymentMethod]} @${conn.getName(m.sender)}*`]], m)
user[paymentMethod] -= listItems[item][paymentMethod] * total
user[item] += total
   
return conn.sendButton(m.chat,
`*༺════ •⊰『 𝒚𝒖𝒏𝒂 𝒃𝒐𝒕 』⊱• ════༻*`,
`${conn.getName(m.sender)} 
*لقد اشتريت ${item} » ${total} ${global.rpgshop.emoticon(item)}*.
*--------------------------------------------*
*حساب: ${(listItems[item][paymentMethod] * total)} ${global.rpgshop.emoticon(paymentMethod)}*
*لديك الآن: ${user[item]} ${global.rpgshopp.emoticon(item)}*
`.trim(), imgr + 'شراء ناجح :', [
[`👝  محفظة `, `${usedPrefix}cartera`],
[`🎒  مخزن `, `${usedPrefix}inventory`]
], fkontak, m)
} else {
if (user[item] < total) return conn.sendButton(m.chat, `🎟️ مميز ⇢ ${premium ? '✅' : '❌'}\n${wm}`, `*ليس لديك ما يكفي ${global.rpgshop.emoticon(item)} para vender solo tienes ${user[item]} ${global.rpgshopp.emoticon(item)}*\n\n*ليس لديك ما يكفي ${global.rpgshop.emoticon(item)} لبيع لديك فقط  ${user[item]} ${global.rpgshopp.emoticon(item)}*`, gata.getRandom(), [[`🎒  مخزن `, `${usedPrefix}inventory`], ['الأوامر ☘️', '/menu']], m, enlace)
       
let paymentMethod = Object.keys(listItems[item]).find(v => v in user)
user[item] -= total
user[paymentMethod] += listItems[item][paymentMethod] * total
    
return conn.sendButton(m.chat,
`*––『 مباع 』––*`,
`${conn.getName(m.sender)} 
*لقد بعت ${item} » ${total} ${global.rpgshop.emoticon(item)}*.
*--------------------------------------------*
*الارباح: ${(listItems[item][paymentMethod] * total)} ${global.rpgshop.emoticon(paymentMethod)}*
*الآن لديك: ${user[paymentMethod]} ${global.rpgshopp.emoticon(paymentMethod)}*
`.trim(), imgr + 'بيع ناجح : تبرع', [
[`👝 محفظة `, `${usedPrefix}cartera`],
[`🎒   المخزن `, `${usedPrefix}inventory`]
], fkontak, m)
}}
handler.help = ['شراء', 'بيع'].map(v => v + ' [بند] [كميه]')
handler.tags = ['rpg']
handler.command = /^(شراء|بيع)$/i
handler.disabled = false

export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}

function isNumber(number) {
    if (!number) return number
    number = parseInt(number)
    return typeof number == 'number' && !isNaN(number)
}
