async function unmuteCommand(sock, chatId) {
    await sock.groupSettingUpdate(chatId, 'not_announcement'); // Unmute the group
    await sock.sendMessage(chatId, { text: 'ད𝑄𝑈𝐸𝐸𝑁 𝑀𝐸𝑅𝐴-𝑀𝐷 has been unmuted.' });
}

module.exports = unmuteCommand;
