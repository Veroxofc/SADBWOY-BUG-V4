const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, channelLink) {
    const helpMessage = `
*SADBWOY-BUG-FREE-CPANEL*    
╔═════════════════════╗
║       (❁´◡`❁)      🔰
║ *PURCHASE PRENIUM*  ║
║ *from Alpha-King*   ║
║ THIS IS A LITE VERSN║
╚═════════════════════╝
║💀HOST   : LINUX     ║
║💀OWNER  : ICEBACK
║💀CMDS   : 750+      ║
║💀MODE   : PUBLIC
║💀VERSION: 4.0.0     ║
║💀DVLPER : ALPHA
║💀RAM  :   [▣□□□□□]9%║
║💀USAGE  : 122MB/UNLI
║💀PREFIX : {.}       ║
║💀ZONE   : 263/ZIM   
╚═════════════════════╝
╔═════════════════════╗
║ *❄SPECIAL THANKS❄* 
╚═════════════════════╝
║💀MR UNIQUE HACKER
║💀DAVID CYRIL TECH
║💀HECTOR KANGO
║💀DANNY-CREEPYMD
║💀PREXZYVILLA
║💀XEOM-MEDIA-TECH
╔═════════════════════╗
║ *❄ICEBACK-TECHIES❄* 
╚═════════════════════╝
>  DEV: https://t.me/ICEBACKINGSV1
  ╚═════════════════╝
╔═════════════════════╗
║ *Prenium is purchased* 
╚═════════════════════╝
.
.

╔═════════════════════╗
║ *LITE PACK COMMANDS* 
╚═════════════════════╝
║ ❄ping. ♡
║ ❄alive
║ ❄tts <text>
║ ❄owner
║ ❄joke
║ ❄quote
║ ❄fact
║ ❄weather <city>
║ ❄news
║ ❄attp <text>
║ ❄lyrics <song_title>
║ ❄8ball <question>
║ ❄groupinfo
║ ❄staff or .admins 
║ ❄vv
║ ❄pair or .rent
.
.
╔═════════════════════╗
║ *❄ADMIN MENU❄* 
╚═════════════════════╝
║ ❄ ban @user
║ ❄ promote @user
║ ❄ demote @user
║ ❄ mute <minutes>
║ ❄ unmute
║ ❄ delete or .del
║ ❄ kick @user
║ ❄ warnings @user
║ ❄ warn @user
║ ❄ antilink
║ ❄ antibadword
║ ❄ clear
║ ❄ tag <message>
║ ❄ tagall
║ ❄ chatbot
║ ❄ resetlink
.
.
╔═════════════════════╗
║ *❄DOWNLOAD MENU❄* 
╚═════════════════════╝
║ ❄ play <song_name>
║ ❄ song <song_name>
║ ❄ instagram <link>
║ ❄ facebook <link>
║ ❄ tiktok <link>
.
.
╔═════════════════════╗
║ *❄PHOTO RUB MENU❄* 
╚═════════════════════╝
║ ❄ metallic <text>
║ ❄ ice <text>
║ ❄ snow <text>
║ ❄ impressive <text>
║ ❄ matrix <text>
║ ❄ light <text>
║ ❄ neon <text>
║ ❄ devil <text>
║ ❄ purple <text>
║ ❄ thunder <text>
║ ❄ leaves <text>
║ ❄ 1917 <text>
║ ❄ arena <text>
║ ❄ hacker <text>
║ ❄ sand <text>
║ ❄ blackpink <text>
║ ❄ glitch <text>
║ ❄ fire <text>
.
.
╔═════════════════════╗
║ *❄STICKER MENU❄* 
╚═════════════════════╝
║ ❄ blur <image>
║ ❄ simage <reply to sticker>
║ ❄ sticker <reply to image>
║ ❄ tgsticker <Link>
║ ❄ meme
║ ❄ take <packname> 
║ ❄ emojimix <emj1>+<emj2>
.
.
╔═════════════════════╗
║ *❄OWNER MENU❄* 
╚═════════════════════╝
║ ❄ mode
║ ❄ autostatus
║ ❄ clearsession
║ ❄ antidelete
║ ❄ cleartmp
║ ❄ setpp <reply to image>
.
.
╔═════════════════════╗
║ *❄OTHER-MENU❄* 
╚═════════════════════╝
║ ❄ tictactoe @user
║ ❄ hangman
║ ❄ guess <letter>
║ ❄ trivia
║ ❄ answer <answer>
║ ❄ truth
║ ❄ dare
║ ❄ gpt <question>
║ ❄ gemini <question>
║ ❄ compliment @user
║ ❄ insult @user
║ ❄ flirt 
║ ❄ character @user
║ ❄ wasted @user
║ ❄ ship @user
║ ❄ simp @user
║ ❄ stupid @user [text]
║ ❄ git
║ ❄ github
║ ❄ sc
║ ❄ script
║ ❄ repo
.
.
╔═════════════════════╗
║ *❄PHONE CRASH❄* 
╚═════════════════════╝
║❄kill
║❄devore
║❄infinity
║❄brutality
║❄madmax
╔═════════════════════╗
║ *❄WHATSAPP CRASH❄* 
╚═════════════════════╝
║❄hug
║❄kick
║❄kill
║❄crash
║❄ban
╔═════════════════════╗
║ *❄WHATSAPP UNBAN❄* 
╚═════════════════════╝
WHATSAPP BUSINESS
║❄unban
WHATSAPP META
║❄unban
╔═════════════════════╗
║ *PURCHASE PRENIUM* 
╚═════════════════════╝
║❄1GB
║❄2G 
║❄3GB
║❄4GB
║❄8GB
║❄12GB
║❄16GB
║❄UNLI
║💀ONLY WORKS ON PREM 
╔═════════════════════╗
║ *❄VPS PRENIUM CMD❄* 
╚═════════════════════╝
║❄1GB
║❄2G 
║❄3GB
║❄4GB
║❄8GB
║❄12GB
║❄16GB
║❄32GB
║💀WORKS ONLY ON PREM
╔═════════════════════╗
║ *❄PANEL PRENIUM CMD❄* 
╚═════════════════════╝
║❄3DAYS
║❄5DAYS
║❄6DAYS
║❄1MONTH
║❄ANNUALLY
║❄LIFETIME
╔═════════════════════╗
║ *❄KEEP IN MIND* 
╚═════════════════════╝

Prenium isnt free.Even l
too wish it was anyways 
join my channels to
stand chances to win 
prenium cmds'

*JOIN TODAY*
120363330180223606@newsletter

CLONING MY WORK WONT MAKE YOU A  
DEVELOPER BUT RATHER A VRY WEAK
PERSON `;

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
                        newsletterJid: '120363330180223606@newsletter',
                        newsletterName: 'SADBWOY BUG N CPANEL',
                        serverMessageId: -1
                    }
                }
            });
        } else {
            console.error('Bot image not found at:', imagePath);
            await sock.sendMessage(chatId, { 
                text: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363330180223606@newsletter',
                        newsletterName: 'SADBWOY-BUG N CPANEL',
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
