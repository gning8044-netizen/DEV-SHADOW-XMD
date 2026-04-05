const settings = require("../settings");

async function aliveCommand(sock, chatId, message) {
    try {
        const aliveMessage = `
✨✨━━━━━━━━━━━━✨✨
🤖 *${settings.botName || "Dev shadow-md Bot"} is ONLINE!*

🛠 *Version:* ${settings.version || "4.0.0"}
⚡ *Status:* Active
🌐 *Mode:* Public

🌟 *Bot cree par DEV SHADOW TECH:*
• *_Je suis DEV SHADOW TECH🎭*_
• *_EMPREUR DES BANN ETERNELE⚜️*_
• *_LA LUMUIER ME FUIT🫃🏻*_
• *_Ainstant bi guél la beugue*_
• *_KOUMAYE DIAPALÉ GAYI*_!

📌 Tape *.menu* pou voire les nouveaux commandes
✨✨━━━━━━━━━━━━✨✨
`;

        await sock.sendMessage(chatId, {
            text: aliveMessage,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363406588763460@newsletter',
                    newsletterName: settings.botName || 'Zenitsu Bot',
                    serverMessageId: -1
                }
            }
        }, { quoted: message });
    } catch (error) {
        console.error('Error in alive command:', error);
        await sock.sendMessage(chatId, { text: `🤖 ${settings.botName || "Zenitsu Bot"} is alive and running!` }, { quoted: message });
    }
}

module.exports = aliveCommand;