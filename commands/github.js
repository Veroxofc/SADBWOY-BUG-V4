async function githubCommand(sock, chatId) {
    const repoInfo = `*SADBWOY-BUG-V4*

> SAD BOT IS ONLY AVAILABLE IN LITE VERSION
> I KNOW YOU WANT PRENIUM
> TELL ICEBACK TO DIRECT YU TO ALPHA-KING
 
#TAG
YOU CAN USE THE FREE VERSION 
WITH 1750+ FEATURES

*📂 GitHub Repository:*

https://github.com/ALPHAKINGLITE/SADBWOY-BUG-V4/fork

*📢 Official Channel:*

https://whatsapp.com/channel/0029VarN0780Qeatn8cklB0E


I Hope you liked it


_Star ⭐ the repository if you like the bot!_`;

    try {
        await sock.sendMessage(chatId, {
            text: repoInfo,
            contextInfo: {
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363330180223606@newsletter',
                    newsletterName: 'ICEBACK-TECH',
                    serverMessageId: -1
                }
            }
        });
    } catch (error) {
        console.error('Error in github command:', error);
        await sock.sendMessage(chatId, { 
            text: '❌ Error fetching repository information.' 
        });
    }
}

module.exports = githubCommand; 