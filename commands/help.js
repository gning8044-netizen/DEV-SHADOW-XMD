const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, message) {
    const helpMessage = `
✨───────⚰️───────✨
        *🤖 ${settings.botName || 'DEV SHADOW-MD'}*
        Version: *${settings.version || '6.0.0'}*
        Owner: *${settings.botOwner || 'DEV SHADOW-TECH'}*
        YT: ${global.ytch}
✨──────🪦────────✨

👑 *BOT SHADOW-TECH* 👑
«connectez le bot de DEV SHADOW-TECH en tout securité»

╭━━〔 👑 ᴏᴡɴᴇʀ ᴍᴇɴᴜ 〕━━▢
┃◈ .public
┃◈ .self
┃◈ .block
┃◈ .unblock
┃◈ .broadcast
┃◈ .setppbot
┃◈ .autobio
┃◈ .addowner
┃◈ .delowner
┃◈ .addprem
┃◈ .delprem
┃◈ .runtime
┃◈ .speed
┃◈ .getpp
┃◈ .autopresence
┃◈ .autorecording
┃◈ .autotyping
┃◈ .setprefix
┃◈ .cleartmp
┃◈ .restart
┃◈ .savestatus
┃◈ .autoread
┃◈ .autoviewstatus
┃◈ .autolikestatus
┃◈ .fixowner
┃◈ .ccgen
╰━━━━━━━━━━━━━━━━━━▢

╭━━〔 👥 ɢʀᴏᴜᴘ ᴍᴇɴᴜ 〕━▢
┃◈ .add
┃◈ .kick
┃◈ .kickall
┃◈ .kickadmins
┃◈ .promote
┃◈ .demote
┃◈ .promoteall
┃◈ .demoteall
┃◈ .tagall
┃◈ .hidetag
┃◈ .tag
┃◈ .groupjid
┃◈ .listadmin
┃◈ .listonline
┃◈ .mute
┃◈ .unmute
┃◈ .linkgc
┃◈ .resetlink
┃◈ .poll
┃◈ .del
┃◈ .join
┃◈ .leave
┃◈ .creategc
┃◈ .antilink
┃◈ .antispam
┃◈ .antibadword
┃◈ .antibot
┃◈ .antibill
┃◈ .welcome
┃◈ .goodbye
┃◈ .addprotect
┃◈ .antihijack
┃◈ .opengroup
┃◈ .closegroup
┃◈ .opentime
┃◈ .closetime
┃◈ .setdesc
┃◈ .setname
┃◈ .setppgc
┃◈ .warn
┃◈ .resetwarn
┃◈ .welcomecard
┃◈ .antidelete
┃◈ .antideletedm
┃◈ .chatbot
┃◈ .clearchatbot
┃◈ .checkadmin
╰━━━━━━━━━━━━━━━━━▢

╭━〔 📥 ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ 〕━▢
┃◈ .play
┃◈ .spotify
┃◈ .ytmp3
┃◈ .ytmp4
┃◈ .tiktok
┃◈ .instagram
┃◈ .facebook
┃◈ .twitter
┃◈ .threads
┃◈ .capcut
┃◈ .mediafire
┃◈ .apk
┃◈ .pinterest
┃◈ .tomp3
┃◈ .tomp4
┃◈ .runway <prompt>
╰━━━━━━━━━━━━━━━━━▢

╭━━〔 🤖 ᴀɪ ᴍᴇɴᴜ 〕━━▢
┃◈ .ai
┃◈ .chatgpt
┃◈ .gpt
┃◈ .gemini
┃◈ .llama
┃◈ .deepseek
┃◈ .mistral
┃◈ .groq
┃◈ .flux
┃◈ .pixart
┃◈ .sdxl
┃◈ .pollinations
┃◈ .playground
┃◈ .aidetect
╰━━━━━━━━━━━━━━━━━▢

╭━━〔 🎮 ɢᴀᴍᴇ ᴍᴇɴᴜ 〕━━▢
┃◈ .tictactoe
┃◈ .ttt
┃◈ .wordchain
┃◈ .wcg
┃◈ .surrender
┃◈ .endwcg
┃◈ .truth
┃◈ .dare
┃◈ .8ball
┃◈ .flip
┃◈ .dice
┃◈ .math
┃◈ .trivia
┃◈ .rps
┃◈ .slot
┃◈ .guess
╰━━━━━━━━━━━━━━━━━▢

╭━━〔 ✨ ғᴜɴ ᴍᴇɴᴜ 〕━━▢
┃◈ .joke
┃◈ .dadjoke
┃◈ .quote
┃◈ .fact
┃◈ .advice
┃◈ .pickupline
┃◈ .roast
┃◈ .meme
┃◈ .ship
┃◈ .hack
┃◈ .couple
┃◈ .flirt
┃◈ .compliment
┃◈ .insult
┃◈ .whoami
┃◈ .gaycheck
┃◈ .coolcheck
┃◈ .hotcheck
┃◈ .smartcheck
┃◈ .pellar
┃◈ .evilcheck
╰━━━━━━━━━━━━━━━━━▢

╭━━〔 🖼️ sᴛɪᴄᴋᴇʀ ᴍᴇɴᴜ 〕━━▢
┃◈ .s
┃◈ .sticker
┃◈ .take
┃◈ .steal
┃◈ .toimg
┃◈ .qc
┃◈ .emojimix
┃◈ .smeme
┃◈ .pat
┃◈ .slap
┃◈ .hug
┃◈ .kiss
┃◈ .bite
┃◈ .bonk
┃◈ .dance
╰━━━━━━━━━━━━━━━━━━▢


╭━━〔 🎤 ᴠᴏɪᴄᴇ ᴍᴇɴᴜ 〕━▢
┃◈ .bass
┃◈ .blown
┃◈ .deep
┃◈ .earrape
┃◈ .fast
┃◈ .fat
┃◈ .nightcore
┃◈ .reverse
┃◈ .robot
┃◈ .slow
┃◈ .smooth
┃◈ .squirrel
╰━━━━━━━━━━━━━━━━━▢

╭━━〔 👾 ᴏᴛʜᴇʀ ᴍᴇɴᴜ 〕━━▢
┃◈ .repo
┃◈ .script
┃◈ .test
┃◈ .save
┃◈ .download
┃◈ .afk
┃◈ .reminder
┃◈ .setmood
┃◈ .mymood
┃◈ .vv
┃◈ .vv2
╰━━━━━━━━━━━━━━━━━▢
👑 DEV SHADOW-MD crée par DEV SHADOW TECH👑
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
                        newsletterName: 'DEV SHADOW-MD Bot by DEV SHADOW TECH',
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