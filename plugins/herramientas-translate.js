import translate from '@vitalets/google-translate-api'
import fs from "fs"
import fetch from 'node-fetch'
let handler = async (m, { args, usedPrefix, command, conn }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let user = global.db.data.users[m.sender]
let msg = `${mg}يتم استخدام الأمر بهذه الطريقة \nمثال\n*${usedPrefix + command} (اللغة) (نص)*\n*اللغات المدعومة*\n*https://cloud.google.com/translate/docs/languages*`
if (!args || !args[0]) return m.reply(msg)  
let lang = args[0]
let text = args.slice(1).join(' ')
const defaultLang = 'es'
if ((args[0] || '').length !== 2) {
lang = defaultLang
text = args.join(' ')}
if (!text && m.quoted && m.quoted.text) text = m.quoted.text

const idiomas = [['الأفريقانية',	'af'], ['الألبانية', 'sq'], ['الأمهرية',	'am'], ['العربية',	'ar'], ['الأرمينية',	'hy'], ['أساميس',	'as'], ['ايمارا',	'ay'], ['الاذربيجانيه',	'az'], ['بامبارا',	'bm'], ['الباسكية',	'eu'], ['البيلاروسية',	'be'], ['البنغالية',	'bn'], ['بوسبوري',	'bho'], ['البوسنية',	'bs'], ['البلغارية',	'bg'], ['الكتالانية',	'ca'], ['سيبوانو',	'ceb'], ['الصيني (المبسطه)',	'zh-CN'], ['الصينية (تقليدي)',	'ny'], ['الكورسيكيه',	'co'], ['الكرواتية',	'hr'], ['التشيكية',	'cs'], ['الدانماركية',	'da'], ['ديفيهي',	'dv'], ['دوجري',	'doi'], ['الهولندية',	'nl'], ['الإنكليزية',	'en'], ['إسبرانتو',	'eo'], ['الإستونية',	'et'], ['شاة',	'ee'], ['فيلبيني (التغالوغيه)',	'fil'], ['الفنلندية',	'fi'], ['الفرنسية',	'fr'], ['الفريزية',	'fy'], ['الغاليشية',	'gl'], ['الجورجية',	'ka'], ['الألمانية',	'de'], ['غريغ',	'el'], ['الجواراني',	'gn'], ['الجوجاراتية',	'gu'], ['هايتي',	'ht'], ['الهوسا',	'ha'], ['هاواي',	'haw'], ['العبرية',	'he'], ['الهندية',	'hi'], ['الهمونغ',	'hmn'], ['المجرية',	'hu'], ['الأيسلندية',	'is'], ['الإيغبو',	'ig'], ['إيلوكانو',	'ilo'], ['الإندونيسية',	'id'], ['الأيرلندية',	'ga'], ['الإيطالية',	'it'], ['اليابانية',	'ja'], ['الجاويه',	'jv'], ['الكندية',	'kn'], ['الكازاخية',	'kk'], ['خميرية',	'km'], ['كينارواندا',	'rw'], ['الكونكانيه',	'gom'], ['الكورية',	'ko'], ['كريو',	'kri'], ['كردي',	'ku'], ['كردي (سوراني)',	'ckb'], ['كيرج',	'ky'], ['اللاو',	'lo'], ['لاتينيه',	'la'], ['اللاتفية',	'lv'], ['لينغالا',	'ln'], ['الليتوانية',	'lt'], ['اللوغندية',	'lg'], ['اللوكسمبرجية',	'lb'], ['مقدوني',	'mk'], ['ميثيلي',	'mai'], ['الملغاشيه',	'mg'], ['الماليزية',	'ms'], ['المالايلامية',	'ml'], ['المالطية',	'mt'], ['الماوورية',	'mi'], ['الماراثية',	'mr'], ['ميتيلون (مانيبوري)',	'mni-Mtei'], ['ميزو',	'lus'], ['المنغولية',	'mn'], ['البورميه',	'my'], ['النيبالية',	'ne'], ['النرويجية ‏',	'no'], ['نيانجا (الشيشيوا)',	'ny'], ['يكره (الأوريا)',	'or'], ['اورومو',	'om'], ['الباشتو',	'ps'], ['فارسي',	'fa'], ['البولندية',	'pl'], ['البرتغالية (البرتغال والبرازيل)',	'pt'], ['البنجابية',	'pa'], ['الكيشوا',	'qu'], ['الرومانية',	'ro'], ['الروسية',	'ru'], ['ساموا',	'sm'], ['',	''], ['سانسر',	'sa'], ['الغايلية',	'gd'], ['سيبيدي',	'nso'], ['الصربية',	'sr'], ['سيسوتو',	'st'], ['شونا',	'sn'], ['السندية',	'sd'], ['السنهاليه',	'si'], ['السلوفاكية',	'sk'], ['السلوفينية',	'sl'], ['صومالي',	'so'], ['الإسبانية',	'es'], ['السوندية',	'su'], ['السواحلية',	'sw'], ['السويدية',	'sv'], ['التغالوغيه (فيلبيني)',	'tl'], ['الطاجيكي',	'tg'], ['التاميلية',	'ta'], ['التتارية',	'tt'], ['التيلوغية',	'te'], ['التايلندية',	'th'], ['التغرينية',	'ti'], ['تسونغا',	'ts'], ['التركية',	'tr'], ['توركوم',	'tk'], ['توي (أكانية)',	'ak'], ['الأوكرانية',	'uk'], ['الأوردية',	'ur'], ['الأويغور',	'ug'], ['الأوزبكية',	'uz'], ['الفيتنامية',	'vi'], ['الويلزية',	'cy'], ['زوسا',	'xh'], ['الييديه',	'yi'], ['اليوروبا',	'yo'], ['الزولوية',	'zu']]	
const sections = [
{
title: htjava + ' 🌐 قائمة اللغات  ' + htjava,
rows: [
{title: "🪄 " + idiomas[0][0], rowId: `${usedPrefix + command} ${idiomas[0][1]} ${text}`, description: `اللغه: ${idiomas[0][0]} | ${idiomas[0][1]}`},
{title: "🪄 " + idiomas[1][0], rowId: `${usedPrefix + command} ${idiomas[1][1]} ${text}`, description: `اللغه: ${idiomas[1][0]} | ${idiomas[1][1]}`},
{title: "🪄 " + idiomas[2][0], rowId: `${usedPrefix + command} ${idiomas[2][1]} ${text}`, description: `اللغه: ${idiomas[2][0]} | ${idiomas[2][1]}`},
{title: "🪄 " + idiomas[3][0], rowId: `${usedPrefix + command} ${idiomas[3][1]} ${text}`, description: `اللغه: ${idiomas[3][0]} | ${idiomas[3][1]}`},
{title: "🪄 " + idiomas[4][0], rowId: `${usedPrefix + command} ${idiomas[4][1]} ${text}`, description: `اللغه: ${idiomas[4][0]} | ${idiomas[4][1]}`},
{title: "🪄 " + idiomas[5][0], rowId: `${usedPrefix + command} ${idiomas[5][1]} ${text}`, description: `اللغه: ${idiomas[5][0]} | ${idiomas[5][1]}`},
{title: "🪄 " + idiomas[6][0], rowId: `${usedPrefix + command} ${idiomas[6][1]} ${text}`, description: `اللغه: ${idiomas[6][0]} | ${idiomas[6][1]}`},
{title: "🪄 " + idiomas[7][0], rowId: `${usedPrefix + command} ${idiomas[7][1]} ${text}`, description: `اللغه: ${idiomas[7][0]} | ${idiomas[7][1]}`},
{title: "🪄 " + idiomas[8][0], rowId: `${usedPrefix + command} ${idiomas[8][1]} ${text}`, description: `اللغه: ${idiomas[8][0]} | ${idiomas[8][1]}`},
{title: "🪄 " + idiomas[9][0], rowId: `${usedPrefix + command} ${idiomas[9][1]} ${text}`, description: `اللغه: ${idiomas[9][0]} | ${idiomas[9][1]}`},
{title: "🪄 " + idiomas[10][0], rowId: `${usedPrefix + command} ${idiomas[10][1]} ${text}`, description: `اللغه: ${idiomas[10][0]} | ${idiomas[10][1]}`},
{title: "🪄 " + idiomas[11][0], rowId: `${usedPrefix + command} ${idiomas[11][1]} ${text}`, description: `اللغه: ${idiomas[11][0]} | ${idiomas[11][1]}`},
{title: "🪄 " + idiomas[12][0], rowId: `${usedPrefix + command} ${idiomas[12][1]} ${text}`, description: `اللغه: ${idiomas[12][0]} | ${idiomas[12][1]}`},
{title: "🪄 " + idiomas[13][0], rowId: `${usedPrefix + command} ${idiomas[13][1]} ${text}`, description: `اللغه: ${idiomas[13][0]} | ${idiomas[13][1]}`},
{title: "🪄 " + idiomas[14][0], rowId: `${usedPrefix + command} ${idiomas[14][1]} ${text}`, description: `اللغه: ${idiomas[14][0]} | ${idiomas[14][1]}`},
{title: "🪄 " + idiomas[15][0], rowId: `${usedPrefix + command} ${idiomas[15][1]} ${text}`, description: `اللغه: ${idiomas[15][0]} | ${idiomas[15][1]}`},
{title: "🪄 " + idiomas[16][0], rowId: `${usedPrefix + command} ${idiomas[16][1]} ${text}`, description: `اللغه: ${idiomas[16][0]} | ${idiomas[16][1]}`},
{title: "🪄 " + idiomas[17][0], rowId: `${usedPrefix + command} ${idiomas[17][1]} ${text}`, description: `اللغه: ${idiomas[17][0]} | ${idiomas[17][1]}`},
{title: "🪄 " + idiomas[18][0], rowId: `${usedPrefix + command} ${idiomas[18][1]} ${text}`, description: `اللغه: ${idiomas[18][0]} | ${idiomas[18][1]}`},
{title: "🪄 " + idiomas[19][0], rowId: `${usedPrefix + command} ${idiomas[19][1]} ${text}`, description: `اللغه: ${idiomas[19][0]} | ${idiomas[19][1]}`},
{title: "🪄 " + idiomas[20][0], rowId: `${usedPrefix + command} ${idiomas[20][1]} ${text}`, description: `اللغه: ${idiomas[20][0]} | ${idiomas[20][1]}`},
{title: "🪄 " + idiomas[21][0], rowId: `${usedPrefix + command} ${idiomas[21][1]} ${text}`, description: `اللغه: ${idiomas[21][0]} | ${idiomas[21][1]}`},
{title: "🪄 " + idiomas[22][0], rowId: `${usedPrefix + command} ${idiomas[22][1]} ${text}`, description: `اللغه: ${idiomas[22][0]} | ${idiomas[22][1]}`},
{title: "🪄 " + idiomas[23][0], rowId: `${usedPrefix + command} ${idiomas[23][1]} ${text}`, description: `اللغه: ${idiomas[23][0]} | ${idiomas[23][1]}`},
{title: "🪄 " + idiomas[24][0], rowId: `${usedPrefix + command} ${idiomas[24][1]} ${text}`, description: `اللغه: ${idiomas[24][0]} | ${idiomas[24][1]}`},
{title: "🪄 " + idiomas[25][0], rowId: `${usedPrefix + command} ${idiomas[25][1]} ${text}`, description: `اللغه: ${idiomas[25][0]} | ${idiomas[25][1]}`},
{title: "🪄 " + idiomas[26][0], rowId: `${usedPrefix + command} ${idiomas[26][1]} ${text}`, description: `اللغه: ${idiomas[26][0]} | ${idiomas[26][1]}`},
{title: "🪄 " + idiomas[27][0], rowId: `${usedPrefix + command} ${idiomas[27][1]} ${text}`, description: `اللغه: ${idiomas[27][0]} | ${idiomas[27][1]}`},
{title: "🪄 " + idiomas[28][0], rowId: `${usedPrefix + command} ${idiomas[28][1]} ${text}`, description: `اللغه: ${idiomas[28][0]} | ${idiomas[28][1]}`},
{title: "🪄 " + idiomas[29][0], rowId: `${usedPrefix + command} ${idiomas[29][1]} ${text}`, description: `اللغه: ${idiomas[29][0]} | ${idiomas[29][1]}`},
{title: "🪄 " + idiomas[30][0], rowId: `${usedPrefix + command} ${idiomas[30][1]} ${text}`, description: `اللغه: ${idiomas[30][0]} | ${idiomas[30][1]}`},
{title: "🪄 " + idiomas[31][0], rowId: `${usedPrefix + command} ${idiomas[31][1]} ${text}`, description: `اللغه: ${idiomas[31][0]} | ${idiomas[31][1]}`},
{title: "🪄 " + idiomas[32][0], rowId: `${usedPrefix + command} ${idiomas[32][1]} ${text}`, description: `اللغه: ${idiomas[32][0]} | ${idiomas[32][1]}`},
{title: "🪄 " + idiomas[33][0], rowId: `${usedPrefix + command} ${idiomas[33][1]} ${text}`, description: `اللغه: ${idiomas[33][0]} | ${idiomas[33][1]}`},
{title: "🪄 " + idiomas[34][0], rowId: `${usedPrefix + command} ${idiomas[34][1]} ${text}`, description: `اللغه: ${idiomas[34][0]} | ${idiomas[34][1]}`},
{title: "🪄 " + idiomas[35][0], rowId: `${usedPrefix + command} ${idiomas[35][1]} ${text}`, description: `اللغه: ${idiomas[35][0]} | ${idiomas[35][1]}`},
{title: "🪄 " + idiomas[36][0], rowId: `${usedPrefix + command} ${idiomas[36][1]} ${text}`, description: `اللغه: ${idiomas[36][0]} | ${idiomas[36][1]}`},
{title: "🪄 " + idiomas[37][0], rowId: `${usedPrefix + command} ${idiomas[37][1]} ${text}`, description: `اللغه: ${idiomas[37][0]} | ${idiomas[37][1]}`},
{title: "🪄 " + idiomas[38][0], rowId: `${usedPrefix + command} ${idiomas[38][1]} ${text}`, description: `اللغه: ${idiomas[38][0]} | ${idiomas[38][1]}`},
{title: "🪄 " + idiomas[39][0], rowId: `${usedPrefix + command} ${idiomas[39][1]} ${text}`, description: `اللغه: ${idiomas[39][0]} | ${idiomas[39][1]}`},
{title: "🪄 " + idiomas[40][0], rowId: `${usedPrefix + command} ${idiomas[40][1]} ${text}`, description: `اللغه: ${idiomas[40][0]} | ${idiomas[40][1]}`},
{title: "🪄 " + idiomas[41][0], rowId: `${usedPrefix + command} ${idiomas[41][1]} ${text}`, description: `اللغه: ${idiomas[41][0]} | ${idiomas[41][1]}`},
{title: "🪄 " + idiomas[42][0], rowId: `${usedPrefix + command} ${idiomas[42][1]} ${text}`, description: `اللغه: ${idiomas[42][0]} | ${idiomas[42][1]}`},
{title: "🪄 " + idiomas[43][0], rowId: `${usedPrefix + command} ${idiomas[43][1]} ${text}`, description: `اللغه: ${idiomas[43][0]} | ${idiomas[43][1]}`},
{title: "🪄 " + idiomas[44][0], rowId: `${usedPrefix + command} ${idiomas[44][1]} ${text}`, description: `اللغه: ${idiomas[44][0]} | ${idiomas[44][1]}`},
{title: "🪄 " + idiomas[45][0], rowId: `${usedPrefix + command} ${idiomas[45][1]} ${text}`, description: `اللغه: ${idiomas[45][0]} | ${idiomas[45][1]}`},
{title: "🪄 " + idiomas[46][0], rowId: `${usedPrefix + command} ${idiomas[46][1]} ${text}`, description: `اللغه: ${idiomas[46][0]} | ${idiomas[46][1]}`},
{title: "🪄 " + idiomas[47][0], rowId: `${usedPrefix + command} ${idiomas[47][1]} ${text}`, description: `اللغه: ${idiomas[47][0]} | ${idiomas[47][1]}`},
{title: "🪄 " + idiomas[48][0], rowId: `${usedPrefix + command} ${idiomas[48][1]} ${text}`, description: `اللغه: ${idiomas[48][0]} | ${idiomas[48][1]}`},
{title: "🪄 " + idiomas[49][0], rowId: `${usedPrefix + command} ${idiomas[49][1]} ${text}`, description: `اللغه: ${idiomas[49][0]} | ${idiomas[49][1]}`},
{title: "🪄 " + idiomas[50][0], rowId: `${usedPrefix + command} ${idiomas[50][1]} ${text}`, description: `اللغه: ${idiomas[50][0]} | ${idiomas[50][1]}`},
{title: "🪄 " + idiomas[51][0], rowId: `${usedPrefix + command} ${idiomas[51][1]} ${text}`, description: `اللغه: ${idiomas[51][0]} | ${idiomas[51][1]}`},
{title: "🪄 " + idiomas[52][0], rowId: `${usedPrefix + command} ${idiomas[52][1]} ${text}`, description: `اللغه: ${idiomas[52][0]} | ${idiomas[52][1]}`},
{title: "🪄 " + idiomas[53][0], rowId: `${usedPrefix + command} ${idiomas[53][1]} ${text}`, description: `اللغه: ${idiomas[53][0]} | ${idiomas[53][1]}`},
{title: "🪄 " + idiomas[54][0], rowId: `${usedPrefix + command} ${idiomas[54][1]} ${text}`, description: `اللغه: ${idiomas[54][0]} | ${idiomas[54][1]}`},
{title: "🪄 " + idiomas[55][0], rowId: `${usedPrefix + command} ${idiomas[55][1]} ${text}`, description: `اللغه: ${idiomas[55][0]} | ${idiomas[55][1]}`},
{title: "🪄 " + idiomas[56][0], rowId: `${usedPrefix + command} ${idiomas[56][1]} ${text}`, description: `اللغه: ${idiomas[56][0]} | ${idiomas[56][1]}`},
{title: "🪄 " + idiomas[57][0], rowId: `${usedPrefix + command} ${idiomas[57][1]} ${text}`, description: `اللغه: ${idiomas[57][0]} | ${idiomas[57][1]}`},
{title: "🪄 " + idiomas[58][0], rowId: `${usedPrefix + command} ${idiomas[58][1]} ${text}`, description: `اللغه: ${idiomas[58][0]} | ${idiomas[58][1]}`},
{title: "🪄 " + idiomas[59][0], rowId: `${usedPrefix + command} ${idiomas[59][1]} ${text}`, description: `اللغه: ${idiomas[59][0]} | ${idiomas[59][1]}`},
{title: "🪄 " + idiomas[60][0], rowId: `${usedPrefix + command} ${idiomas[60][1]} ${text}`, description: `اللغه: ${idiomas[60][0]} | ${idiomas[60][1]}`},
{title: "🪄 " + idiomas[61][0], rowId: `${usedPrefix + command} ${idiomas[61][1]} ${text}`, description: `اللغه: ${idiomas[61][0]} | ${idiomas[61][1]}`},
{title: "🪄 " + idiomas[62][0], rowId: `${usedPrefix + command} ${idiomas[62][1]} ${text}`, description: `اللغه: ${idiomas[62][0]} | ${idiomas[62][1]}`},
{title: "🪄 " + idiomas[63][0], rowId: `${usedPrefix + command} ${idiomas[63][1]} ${text}`, description: `اللغه: ${idiomas[63][0]} | ${idiomas[63][1]}`},
{title: "🪄 " + idiomas[64][0], rowId: `${usedPrefix + command} ${idiomas[64][1]} ${text}`, description: `اللغه: ${idiomas[64][0]} | ${idiomas[64][1]}`},
{title: "🪄 " + idiomas[65][0], rowId: `${usedPrefix + command} ${idiomas[65][1]} ${text}`, description: `اللغه: ${idiomas[65][0]} | ${idiomas[65][1]}`},
{title: "🪄 " + idiomas[66][0], rowId: `${usedPrefix + command} ${idiomas[66][1]} ${text}`, description: `اللغه: ${idiomas[66][0]} | ${idiomas[66][1]}`},
{title: "🪄 " + idiomas[67][0], rowId: `${usedPrefix + command} ${idiomas[67][1]} ${text}`, description: `اللغه: ${idiomas[67][0]} | ${idiomas[67][1]}`},
{title: "🪄 " + idiomas[68][0], rowId: `${usedPrefix + command} ${idiomas[68][1]} ${text}`, description: `اللغه: ${idiomas[68][0]} | ${idiomas[68][1]}`},
{title: "🪄 " + idiomas[69][0], rowId: `${usedPrefix + command} ${idiomas[69][1]} ${text}`, description: `اللغه: ${idiomas[69][0]} | ${idiomas[69][1]}`},
{title: "🪄 " + idiomas[70][0], rowId: `${usedPrefix + command} ${idiomas[70][1]} ${text}`, description: `اللغه: ${idiomas[70][0]} | ${idiomas[70][1]}`},
{title: "🪄 " + idiomas[71][0], rowId: `${usedPrefix + command} ${idiomas[71][1]} ${text}`, description: `اللغه: ${idiomas[71][0]} | ${idiomas[71][1]}`},
{title: "🪄 " + idiomas[72][0], rowId: `${usedPrefix + command} ${idiomas[72][1]} ${text}`, description: `اللغه: ${idiomas[72][0]} | ${idiomas[72][1]}`},
{title: "🪄 " + idiomas[73][0], rowId: `${usedPrefix + command} ${idiomas[73][1]} ${text}`, description: `اللغه: ${idiomas[73][0]} | ${idiomas[73][1]}`},
{title: "🪄 " + idiomas[74][0], rowId: `${usedPrefix + command} ${idiomas[74][1]} ${text}`, description: `اللغه: ${idiomas[74][0]} | ${idiomas[74][1]}`},
{title: "🪄 " + idiomas[75][0], rowId: `${usedPrefix + command} ${idiomas[75][1]} ${text}`, description: `اللغه: ${idiomas[75][0]} | ${idiomas[75][1]}`},
{title: "🪄 " + idiomas[76][0], rowId: `${usedPrefix + command} ${idiomas[76][1]} ${text}`, description: `اللغه: ${idiomas[76][0]} | ${idiomas[76][1]}`},
{title: "🪄 " + idiomas[77][0], rowId: `${usedPrefix + command} ${idiomas[77][1]} ${text}`, description: `اللغه: ${idiomas[77][0]} | ${idiomas[77][1]}`},
{title: "🪄 " + idiomas[78][0], rowId: `${usedPrefix + command} ${idiomas[78][1]} ${text}`, description: `اللغه: ${idiomas[78][0]} | ${idiomas[78][1]}`},
{title: "🪄 " + idiomas[79][0], rowId: `${usedPrefix + command} ${idiomas[79][1]} ${text}`, description: `اللغه: ${idiomas[79][0]} | ${idiomas[79][1]}`},
{title: "🪄 " + idiomas[80][0], rowId: `${usedPrefix + command} ${idiomas[80][1]} ${text}`, description: `اللغه: ${idiomas[80][0]} | ${idiomas[80][1]}`},
{title: "🪄 " + idiomas[81][0], rowId: `${usedPrefix + command} ${idiomas[81][1]} ${text}`, description: `اللغه: ${idiomas[81][0]} | ${idiomas[81][1]}`},
{title: "🪄 " + idiomas[82][0], rowId: `${usedPrefix + command} ${idiomas[82][1]} ${text}`, description: `اللغه: ${idiomas[82][0]} | ${idiomas[82][1]}`},
{title: "🪄 " + idiomas[83][0], rowId: `${usedPrefix + command} ${idiomas[83][1]} ${text}`, description: `اللغه: ${idiomas[83][0]} | ${idiomas[83][1]}`},
{title: "🪄 " + idiomas[84][0], rowId: `${usedPrefix + command} ${idiomas[84][1]} ${text}`, description: `اللغه: ${idiomas[84][0]} | ${idiomas[84][1]}`},
{title: "🪄 " + idiomas[85][0], rowId: `${usedPrefix + command} ${idiomas[85][1]} ${text}`, description: `اللغه: ${idiomas[85][0]} | ${idiomas[85][1]}`},
{title: "🪄 " + idiomas[86][0], rowId: `${usedPrefix + command} ${idiomas[86][1]} ${text}`, description: `اللغه: ${idiomas[86][0]} | ${idiomas[86][1]}`},
{title: "🪄 " + idiomas[87][0], rowId: `${usedPrefix + command} ${idiomas[87][1]} ${text}`, description: `اللغه: ${idiomas[87][0]} | ${idiomas[87][1]}`},
{title: "🪄 " + idiomas[88][0], rowId: `${usedPrefix + command} ${idiomas[88][1]} ${text}`, description: `اللغه: ${idiomas[88][0]} | ${idiomas[88][1]}`},
{title: "🪄 " + idiomas[89][0], rowId: `${usedPrefix + command} ${idiomas[89][1]} ${text}`, description: `اللغه: ${idiomas[89][0]} | ${idiomas[89][1]}`},
{title: "🪄 " + idiomas[90][0], rowId: `${usedPrefix + command} ${idiomas[90][1]} ${text}`, description: `اللغه: ${idiomas[90][0]} | ${idiomas[90][1]}`},
{title: "🪄 " + idiomas[91][0], rowId: `${usedPrefix + command} ${idiomas[91][1]} ${text}`, description: `اللغه: ${idiomas[91][0]} | ${idiomas[91][1]}`},
{title: "🪄 " + idiomas[92][0], rowId: `${usedPrefix + command} ${idiomas[92][1]} ${text}`, description: `اللغه: ${idiomas[92][0]} | ${idiomas[92][1]}`},
{title: "🪄 " + idiomas[93][0], rowId: `${usedPrefix + command} ${idiomas[93][1]} ${text}`, description: `اللغه: ${idiomas[93][0]} | ${idiomas[93][1]}`},
{title: "🪄 " + idiomas[94][0], rowId: `${usedPrefix + command} ${idiomas[94][1]} ${text}`, description: `اللغه: ${idiomas[94][0]} | ${idiomas[94][1]}`},
{title: "🪄 " + idiomas[95][0], rowId: `${usedPrefix + command} ${idiomas[95][1]} ${text}`, description: `اللغه: ${idiomas[95][0]} | ${idiomas[95][1]}`},
{title: "🪄 " + idiomas[96][0], rowId: `${usedPrefix + command} ${idiomas[96][1]} ${text}`, description: `اللغه: ${idiomas[96][0]} | ${idiomas[96][1]}`},
{title: "🪄 " + idiomas[97][0], rowId: `${usedPrefix + command} ${idiomas[97][1]} ${text}`, description: `اللغه: ${idiomas[97][0]} | ${idiomas[97][1]}`},
{title: "🪄 " + idiomas[98][0], rowId: `${usedPrefix + command} ${idiomas[98][1]} ${text}`, description: `اللغه: ${idiomas[98][0]} | ${idiomas[98][1]}`},
{title: "🪄 " + idiomas[99][0], rowId: `${usedPrefix + command} ${idiomas[99][1]} ${text}`, description: `اللغه: ${idiomas[99][0]} | ${idiomas[99][1]}`},
{title: "🪄 " + idiomas[100][0], rowId: `${usedPrefix + command} ${idiomas[100][1]} ${text}`, description: `اللغه: ${idiomas[100][0]} | ${idiomas[100][1]}`},
{title: "🪄 " + idiomas[101][0], rowId: `${usedPrefix + command} ${idiomas[101][1]} ${text}`, description: `اللغه: ${idiomas[101][0]} | ${idiomas[101][1]}`},
{title: "🪄 " + idiomas[102][0], rowId: `${usedPrefix + command} ${idiomas[102][1]} ${text}`, description: `اللغه: ${idiomas[102][0]} | ${idiomas[102][1]}`},
{title: "🪄 " + idiomas[103][0], rowId: `${usedPrefix + command} ${idiomas[103][1]} ${text}`, description: `اللغه: ${idiomas[103][0]} | ${idiomas[103][1]}`},
{title: "🪄 " + idiomas[104][0], rowId: `${usedPrefix + command} ${idiomas[104][1]} ${text}`, description: `اللغه: ${idiomas[104][0]} | ${idiomas[104][1]}`},
{title: "🪄 " + idiomas[105][0], rowId: `${usedPrefix + command} ${idiomas[105][1]} ${text}`, description: `اللغه: ${idiomas[105][0]} | ${idiomas[105][1]}`},
{title: "🪄 " + idiomas[106][0], rowId: `${usedPrefix + command} ${idiomas[106][1]} ${text}`, description: `اللغه: ${idiomas[106][0]} | ${idiomas[106][1]}`},
{title: "🪄 " + idiomas[107][0], rowId: `${usedPrefix + command} ${idiomas[107][1]} ${text}`, description: `اللغه: ${idiomas[107][0]} | ${idiomas[107][1]}`},
{title: "🪄 " + idiomas[108][0], rowId: `${usedPrefix + command} ${idiomas[108][1]} ${text}`, description: `اللغه: ${idiomas[108][0]} | ${idiomas[108][1]}`},
{title: "🪄 " + idiomas[109][0], rowId: `${usedPrefix + command} ${idiomas[109][1]} ${text}`, description: `اللغه: ${idiomas[109][0]} | ${idiomas[109][1]}`},
{title: "🪄 " + idiomas[110][0], rowId: `${usedPrefix + command} ${idiomas[110][1]} ${text}`, description: `اللغه: ${idiomas[110][0]} | ${idiomas[110][1]}`},
{title: "🪄 " + idiomas[111][0], rowId: `${usedPrefix + command} ${idiomas[111][1]} ${text}`, description: `اللغه: ${idiomas[111][0]} | ${idiomas[111][1]}`},
{title: "🪄 " + idiomas[112][0], rowId: `${usedPrefix + command} ${idiomas[112][1]} ${text}`, description: `اللغه: ${idiomas[112][0]} | ${idiomas[112][1]}`},
{title: "🪄 " + idiomas[113][0], rowId: `${usedPrefix + command} ${idiomas[113][1]} ${text}`, description: `اللغه: ${idiomas[113][0]} | ${idiomas[113][1]}`},
{title: "🪄 " + idiomas[114][0], rowId: `${usedPrefix + command} ${idiomas[114][1]} ${text}`, description: `اللغه: ${idiomas[114][0]} | ${idiomas[114][1]}`},
{title: "🪄 " + idiomas[115][0], rowId: `${usedPrefix + command} ${idiomas[115][1]} ${text}`, description: `اللغه: ${idiomas[115][0]} | ${idiomas[115][1]}`},
{title: "🪄 " + idiomas[116][0], rowId: `${usedPrefix + command} ${idiomas[116][1]} ${text}`, description: `اللغه: ${idiomas[116][0]} | ${idiomas[116][1]}`},
{title: "🪄 " + idiomas[117][0], rowId: `${usedPrefix + command} ${idiomas[117][1]} ${text}`, description: `اللغه: ${idiomas[117][0]} | ${idiomas[117][1]}`},
{title: "🪄 " + idiomas[118][0], rowId: `${usedPrefix + command} ${idiomas[118][1]} ${text}`, description: `اللغه: ${idiomas[118][0]} | ${idiomas[118][1]}`},
{title: "🪄 " + idiomas[119][0], rowId: `${usedPrefix + command} ${idiomas[119][1]} ${text}`, description: `اللغه: ${idiomas[119][0]} | ${idiomas[119][1]}`},
{title: "🪄 " + idiomas[120][0], rowId: `${usedPrefix + command} ${idiomas[120][1]} ${text}`, description: `اللغه: ${idiomas[120][0]} | ${idiomas[120][1]}`},
{title: "🪄 " + idiomas[121][0], rowId: `${usedPrefix + command} ${idiomas[121][1]} ${text}`, description: `اللغه: ${idiomas[121][0]} | ${idiomas[121][1]}`},
{title: "🪄 " + idiomas[122][0], rowId: `${usedPrefix + command} ${idiomas[122][1]} ${text}`, description: `اللغه: ${idiomas[122][0]} | ${idiomas[122][1]}`},
{title: "🪄 " + idiomas[123][0], rowId: `${usedPrefix + command} ${idiomas[123][1]} ${text}`, description: `اللغه: ${idiomas[123][0]} | ${idiomas[123][1]}`},
{title: "🪄 " + idiomas[124][0], rowId: `${usedPrefix + command} ${idiomas[124][1]} ${text}`, description: `اللغه: ${idiomas[124][0]} | ${idiomas[124][1]}`},
{title: "🪄 " + idiomas[125][0], rowId: `${usedPrefix + command} ${idiomas[125][1]} ${text}`, description: `اللغه: ${idiomas[125][0]} | ${idiomas[125][1]}`},
{title: "🪄 " + idiomas[126][0], rowId: `${usedPrefix + command} ${idiomas[126][1]} ${text}`, description: `اللغه: ${idiomas[126][0]} | ${idiomas[126][1]}`},
{title: "🪄 " + idiomas[127][0], rowId: `${usedPrefix + command} ${idiomas[127][1]} ${text}`, description: `اللغه: ${idiomas[127][0]} | ${idiomas[127][1]}`},
{title: "🪄 " + idiomas[128][0], rowId: `${usedPrefix + command} ${idiomas[128][1]} ${text}`, description: `اللغه: ${idiomas[128][0]} | ${idiomas[128][1]}`},
{title: "🪄 " + idiomas[129][0], rowId: `${usedPrefix + command} ${idiomas[129][1]} ${text}`, description: `اللغه: ${idiomas[129][0]} | ${idiomas[129][1]}`},
{title: "🪄 " + idiomas[130][0], rowId: `${usedPrefix + command} ${idiomas[130][1]} ${text}`, description: `اللغه: ${idiomas[130][0]} | ${idiomas[130][1]}`},
{title: "🪄 " + idiomas[131][0], rowId: `${usedPrefix + command} ${idiomas[131][1]} ${text}`, description: `اللغه: ${idiomas[131][0]} | ${idiomas[131][1]}`},
{title: "🪄 " + idiomas[132][0], rowId: `${usedPrefix + command} ${idiomas[132][1]} ${text}`, description: `اللغه: ${idiomas[132][0]} | ${idiomas[132][1]}`},
{title: "🪄 " + idiomas[133][0], rowId: `${usedPrefix + command} ${idiomas[133][1]} ${text}`, description: `اللغه: ${idiomas[133][0]} | ${idiomas[133][1]}`},
{title: "🪄 " + idiomas[134][0], rowId: `${usedPrefix + command} ${idiomas[134][1]} ${text}`, description: `اللغه: ${idiomas[134][0]} | ${idiomas[134][1]}`}
]}]	
try {   
let result = await translate(`${text}`, { to: lang, autoCorrect: true })
const listMessage = {
text: result.text,
footer: `استخدم الأمر  تكلم لكي تعرف كيف تنطق جمله\n مثال : ${usedPrefix}تكلم ${result.text}  `,
title: `*⎔───ꕤ  🌐 ꕤ───⎔*`,
buttonText: `🪄 اختر لغة  🪄`,
sections }  
await conn.sendMessage(m.chat, listMessage, {quoted: fkontak} )
await m.reply(result.text)
  
} catch {
try {    
let lol = await fetch(`https://api.lolhuman.xyz/api/translate/auto/${lang}?apikey=85faf717d0545d14074659ad&text=${text}`)
let loll = await lol.json()
let result2 = loll.result.translated
const listMessage = {
text: result2.text,
footer: `*بريميوم${user.premium ? "✅": "❌"}*\n${wm}`,
title: `*⎔───ꕤ 🌐  ꕤ───⎔*`,
buttonText: `🪄 اختر لغة 🪄`,
sections }  
await conn.sendMessage(m.chat, listMessage, {quoted: fkontak} )
await m.reply(result2.text)
} catch { 
await m.reply(`${fg}\`\`\`فشل في ترجمة النص الخاص بك ، أبلغ عن هذا الأمر باستخدام الأمر  #reporte\`\`\``)    
}}}
handler.command = /^(translate|traducir|ترجم)$/i
export default handler
