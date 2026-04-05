const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, message) {
    const helpMessage = `
✨───────⚰️───────✨
        *🤖 ${settings.botName || 'Dev shadow-md-Bot'}*
        Version: *${settings.version || '4.0.0'}*
        Owner: *${settings.botOwner || 'PAPII'}*
        YT: ${global.ytch}
✨──────🪦────────✨

🎭 *𝐁𝐎𝐓 𝐃𝐄𝐕 𝐒𝐇𝐀𝐃𝐎𝐖-𝐌𝐃* 🎭
«connectez le bot de dev shadow en tout securité»
┏━━━━━━━━━━━━━━━━━━┓
┃  🔱 *DEV SHADOW TECH* 🔱
┗━━━━━━━━━━━━━━━━━━┛
◈ ╭───────────────┈
◈ │ 🌐 *GENERAL SHADOW*

◈ │ 🔓 .aide 
    🎭 .statut 
    🤖 .vivant
◈ │ 📜 .actus 
    🌹 .meteo .id
◈ ╰───────────────┈
◈ ╭───────────────┈
◈ │ 🛡️ *ADMIN SHADOW*

◈ │ 🚫 .interdire 
    ☣️ .expulser 
    💿 .muet
◈ │ 📢 .mentionner 
    👸 .cachemessage
◈ ╰───────────────┈
◈ ╭───────────────┈
◈ │ 👑 *OWNER SHADOW*

◈ │ 🔑 .mode 
    🎭 .maj 
    🥀 .photopp
◈ │ ⚙️ .parametres 
    👹 .antiappel
◈ ╰───────────────┈
◈ ╭───────────────┈
◈ │ 🤖 *IA SHADOW*

◈ │ 🧠 .gpt 
    🤡 .gemini
◈ │ 🎨 .imaginer 
    👾 .flux
◈ ╰───────────────┈
◈ ╭───────────────┈
◈ │ 📥 *DOWN SHADOW*

◈ │ 🎵 .jouer 
    🎼 .musique 
    🎤 .spotify
◈ │ 📽️ .video 
    🎺 .instagram 
    ⛓️ .tiktok
◈ ╰───────────────┈
◈ ╭───────────────┈
◈ │ 🎨 *EDITING & SHADOW*

◈ │ ✨ .remini 
    ⚰️ .fond 
    🪓 .neon
◈ │ 🎭 .defaut 
    🧿 .hacker
◈ ╰───────────────┈
◈ ╭───────────────┈
◈ │ ⛩️ ANIME & SHADOW
◈ │ 🎮 .morpion 
    🪦 .quiz 
    🔬 .verite
◈ │ 🌸 .japon 
    🪬 .calin 
    🔮 .baiser
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
                        newsletterJid: 'https://whatsapp.com/channel/0029Vb7lAQs4NViqQM8tBj3M',
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
                        newsletterJid: 'https://whatsapp.com/channel/0029Vb7lAQs4NViqQM8tBj3M',
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