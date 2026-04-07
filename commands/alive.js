const settings = require("../settings");

async function aliveCommand(sock, chatId, message) {
    try {
        const aliveMessage = `
✨✨━━━━━━━━━━━━✨✨
🤖 *${settings.botName || "ད𝑄𝑈𝐸𝐸𝑁 𝑀𝐸𝑅𝐴-𝑀𝐷"} is ONLINE!*

🛠 *Version:* ${settings.version || "4.0.0"}
⚡ *Status:* Active
🌐 *Mode:* Public

🌟 *Bot cree par DEV SHADOW TECH:*
• *_JE SUIS QUEEN MERA🎭*_
• *_LA REINE SUPPREME DES INFIDEL⚜️*_
• *_JE SUIS INFIDEL

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
                    newsletterName: settings.botName || 'ད𝑄𝑈𝐸𝐸𝑁 𝑀𝐸𝑅𝐴-𝑀𝐷',
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