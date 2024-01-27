const handler = async (m, { conn, text, command, usedPrefix, args }) => {
  // الصورة المستخدمة في اللعبة (ورقة، مقص، حجر)
  const pp = 'https://telegra.ph/file/c7924bf0e0d839290cc51.jpg';

  // 60000 = 1 دقيقة // 30000 = 30 ثانية // 15000 = 15 ثانية // 10000 = 10 ثوان
  const time = global.db.data.users[m.sender].wait + 10000;
  if (new Date - global.db.data.users[m.sender].wait < 10000) throw `*🕓 عليك الانتظار ${Math.floor((time - new Date()) / 1000)} ثواني قبل أن تتمكن من اللعب مرة أخرى*`;

  if (!args[0]) return conn.reply(m.chat, `*حجر 🗿 , ورقة 📄 o مقص ✂️*\n\n*—◉ يمكنك استخدام هذه الأوامر:*\n*◉ ${usedPrefix + command} حجر*\n*◉ ${usedPrefix + command} ورقة*\n*◉ ${usedPrefix + command} مقص*\n\n*يمكنك أيضًا استخدام الإيموجيات:*\n✊ (للحجر) | ✌️ (للمقص) | 🖐️ (للورق)*`, m);
  
  // تحويل الإيموجيات إلى الأوامر المعترف بها
  const emojiToCommand = {
    '✊': 'حجر',
    '✌️': 'مقص',
    '🖐️': 'ورقة'
  };

  const selectedEmoji = text.trim();
  const selectedCommand = emojiToCommand[selectedEmoji];

  if (!selectedCommand) {
    throw `*إيموجي غير صالح! يرجى استخدام إيموجيات: ✊ (للحجر) | ✌️ (للمقص) | 🖐️ (للورق)*`;
  }

  let astro = Math.random();
  if (astro < 0.34) {
    astro = 'حجر';
  } else if (astro > 0.34 && astro < 0.67) {
    astro = 'مقص';
  } else {
    astro = 'ورقة';
  }

  if (selectedCommand == astro) {
    global.db.data.users[m.sender].exp += 500;
    m.reply(`*🔰 تعادل!*\n\n*👉🏻 أنت: ${selectedCommand}*\n*👉🏻 البوت: ${astro}*\n*🎁 جائزة +500 نقطة خبرة*`);
  } else if (selectedCommand == 'ورقة') {
    if (astro == 'حجر') {
      global.db.data.users[m.sender].exp += 1000;
      m.reply(`*🥳 أنت الفائز! 🎉*\n\n*👉🏻 أنت: ${selectedCommand}*\n*👉🏻 البوت: ${astro}*\n*🎁 جائزة +1000 نقطة خبرة*`);
    } else {
      global.db.data.users[m.sender].exp -= 300;
      m.reply(`*☠️ أنت الخاسر! ❌*\n\n*👉🏻 أنت: ${selectedCommand}*\n*👉🏻 البوت: ${astro}*\n*❌ جائزة -300 نقطة خبرة*`);
    }
  } else if (selectedCommand == 'مقص') {
    if (astro == 'ورقة') {
      global.db.data.users[m.sender].exp += 1000;
      m.reply(`*🥳 أنت الفائز! 🎉*\n\n*👉🏻 أنت: ${selectedCommand}*\n*👉🏻 البوت: ${astro}*\n*🎁 جائزة +1000 نقطة خبرة*`);
    } else {
      global.db.data.users[m.sender].exp -= 300;
      m.reply(`*☠️ أنت الخاسر! ❌*\n\n*👉🏻 أنت: ${selectedCommand}*\n*👉🏻 البوت: ${astro}*\n*❌ جائزة -300 نقطة خبرة*`);
    }
  } else if (selectedCommand == 'حجر') {
    if (astro == 'مقص') {
      global.db.data.users[m.sender].exp += 1000;
      m.reply(`*🥳 أنت الفائز! 🎉*\n\n*👉🏻 أنت: ${selectedCommand}*\n*👉🏻 البوت: ${astro}*\n*🎁 جائزة +1000 نقطة خبرة*`);
    } else {
      global.db.data.users[m.sender].exp -= 300;
      m.reply(`*☠️ أنت الخاسر! ❌*\n\n*👉🏻 أنت: ${selectedCommand}*\n*👉🏻 البوت: ${astro}*\n*❌ جائزة -300 نقطة خبرة*`);
    }
  }

  global.db.data.users[m.sender].wait = new Date * 1;
};

handler.help = ['ppt'];
handler.tags = ['games'];
handler.command = /^(ppt)$/i;
export default handler;
