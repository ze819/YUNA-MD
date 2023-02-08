/*const bannedWords = ["هارا كيسكي","شينوبو كاناو","كيسامي اكاشي","كوزان"]

let intervalId;

async function startContest(conn, chat) {
    intervalId = setInterval(() => {
        const message = bannedWords[Math.floor(Math.random() * bannedWords.length)];
        conn.sendHydrated(chat, message);
    }, 10000);
}

async function stopContest() {
    clearInterval(intervalId);
}

let handler  = async (m, { conn, usedPrefix, command }) => {
    if(command === 'start') {
        await startContest(conn, m.chat);
    } else if(command === 'stop') {
        await stopContest();
    }
}

handler.help = ['start or stop the contest']
handler.tags = ['fun']
handler.command = /^contest/i
handler.fail = null
export default handler
*/