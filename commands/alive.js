const settings = require("../settings");
async function aliveCommand(sock, chatId) {
    try {
        const message = `SAD HAPPY SAD HAPPY,, THEY NEVER MIX I DON KNOW WHY`;

        await sock.sendMessage(chatId, {
            text: message,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363330180223606@newsletter',
                    newsletterName: 'ICEBACK-TECH',
                    serverMessageId: -1
                }
            }
        });
    } catch (error) {
        console.error('Error in alive command:', error);
        await sock.sendMessage(chatId, { text: 'Bot is alive and running!' });
    }
}

module.exports = aliveCommand;