const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, message) {
    const helpMessage = `
✨──────────────✨
        *🤖 ${settings.botName || 'Zenitsu-Bot'}*
        Version: *${settings.version || '4.0.0'}*
        Owner: *${settings.botOwner || 'PAPII'}*
        YT: ${global.ytch}
✨──────────────✨

🎭 *DEV SHADOW-𝖬𝖣 𝖴𝖫𝖳𝖨𝖬𝖠𝖳𝖤* 🎭
« 𝖳𝗁𝖾 𝖲𝗁𝖺𝖽𝗈𝗐 𝖤𝗑𝖾𝖼𝗎𝗍𝗂𝗈𝗇 »
┏━━━━━━━━━━━━━━━━━━┓
┃  🔱 SHADOW INTERFACE 🔱
┗━━━━━━━━━━━━━━━━━━┛
◈ ╭───────────────┈
◈ │ 🌐 GENERAL
◈ │ 🔓 .help .ping .alive
◈ │ 📜 .news .weather .jid
◈ ╰───────────────┈
◈ ╭───────────────┈
◈ │ 🛡️ ADMINISTRATION
◈ │ 🚫 .ban .kick .mute
◈ │ 📢 .tagall .hidetag
◈ ╰───────────────┈
◈ ╭───────────────┈
◈ │ 👑 OWNER PRIVILEGE
◈ │ 🔑 .mode .update .setpp
◈ │ ⚙️ .settings .anticall
◈ ╰───────────────┈
◈ ╭───────────────┈
◈ │ 🤖 ARTIFICIAL INTEL
◈ │ 🧠 .gpt .gemini
◈ │ 🎨 .imagine .flux
◈ ╰───────────────┈
◈ ╭───────────────┈
◈ │ 📥 DOWNLOADER
◈ │ 🎵 .play .song .spotify
◈ │ 📽️ .video .ig .tiktok
◈ ╰───────────────┈
◈ ╭───────────────┈
◈ │ 🎨 EDITING & TEXT
◈ │ ✨ .remini .bg .neon
◈ │ 🎭 .glitch .hacker
◈ ╰───────────────┈
◈ ╭───────────────┈
◈ │ ⛩️ ANIME & GAMES
◈ │ 🎮 .ttt .trivia .truth
◈ │ 🌸 .japan .hug .kiss
◈ ╰───────────────┈
┏━━━━━━━━━━━━━━━━━━┓
  *🎭CREE PAR DEV SHADOW TECH*
┗━━━━━━━━━━━━━━━━━━┛
✨ ne rejoindre pas mon chaine!
`;

    try {
        const imagePath = path.join(__dirname, '../assets/bot_image.jpg');
        
        if (fs.existsSync(imagePath)) {
            const imageBuffer = fs.readFileSync(imagePath);
            
            await sock.sendMessage(chatId, {
                image: imageBuffer,
                caption: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '',
                        newsletterName: 'Dev shadow-md Bot',
                        serverMessageId: -1
                    }
                }
            }, { quoted: message });
        } else {
            await sock.sendMessage(chatId, {
                text: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '',
                        newsletterName: 'Dev shadow-md Bot by PAPII',
                        serverMessageId: -1
                    }
                }
            });
        }
    } catch (error) {
        console.error('Error in help command:', error);
        await sock.sendMessage(chatId, { text: helpMessage });
    }
}

module.exports = helpCommand;