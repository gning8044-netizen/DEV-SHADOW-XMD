const settings = require("../settings");

async function aliveCommand(sock, chatId, message) {
    try {
        const aliveMessage = `
✨✨━━━━━━━━━━━━✨✨
🤖 *${settings.botName || "DEV SHADOW-MD"} is ONLINE!*

🛠 *Version:* ${settings.version || "6.0.0"}
⚡ *Status:* Active
🌐 *Mode:* Public

🌟 *Bot cree par DEV SHADOW TECH:*
• *SHADOW LE DEV & TECH*
• *CONNECTÉ A TOUS MOMENT⚜️*
• *DEV SHADOW TECH IS BACK*

📌 Tape *.menu* pou voire les nouveaux commandes
✨✨━━━━━━━━━━━━✨✨
`;

        await sock.sendMessage(chatId, {
            text: aliveMessage,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: 'https://whatsapp.com/channel/0029Vb7lAQs4NViqQM8tBj3M',
                    newsletterName: settings.botName || 'DEV SHADOW-MD',
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