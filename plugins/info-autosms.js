import moment from 'moment-timezone'
  
export async function before(m) {

if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup) return
  
let user = global.db.data.users[m.sender]

if (new Date() - user.pc < 21600000) return
await m.reply(`👋 𝙷𝙾𝙻𝙰 ${nombre}!!
  
🔰︎  *𝚂𝙸 𝙳𝙴𝚂𝙴𝙰 𝙲𝙾𝙽𝚃𝙰𝙲𝚃𝙰𝚁 𝙰 𝙼𝙸 𝙲𝚁𝙴𝙰𝙳𝙾𝚁 𝙴𝚂𝙲𝚁𝙸𝙱𝙴* #owner 

📑︎ *𝚂𝙸 𝚀𝚄𝙸𝙴𝚁𝙴𝚂 𝚅𝙴𝚁 𝙼𝙸𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝙴𝚂𝙲𝚁𝙸𝙱𝙴* #menu

👥︎ *𝚂𝙸 𝚀𝚄𝙸𝙴𝚁𝙴𝚂 𝚄𝙽𝙸𝚁𝚃𝙴 𝙰 𝙼𝙸𝚂 𝙶𝚁𝚄𝙿𝙾𝚂 𝙾𝙵𝙲 𝙴𝚂𝙲𝚁𝙸𝙱𝙴* #grupos

🎇︎ *𝚂𝙸 𝚀𝚄𝙸𝙴𝚁𝙴𝚂 𝚄𝙽𝙸𝚁𝙼𝙴 𝙰 𝚃𝚄 𝙶𝚁𝚄𝙿𝙾 𝙴𝚂𝙲𝚁𝙸𝙱𝙴* #join

🚀︎ *𝚂𝙸 𝚀𝚄𝙸𝙴𝚁𝙴𝚂 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚁 𝙴𝙻 𝙱𝙾𝚃 𝙴𝚂𝙲𝚁𝙸𝙱𝙴* #descargarbot
 
🤖 *𝚂𝙸 𝚀𝚄𝙸𝙴𝚁𝙴𝚂 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙸𝚁𝚃𝙴 𝙴𝙽 𝙱𝙾𝚃 𝚃𝙴𝙼𝙿𝙾𝚁𝙰𝙻 𝙴𝚂𝙲𝚁𝙸𝙱𝙴* #serbot
 
📝 ¿𝙌𝙪𝙞𝙚𝙧𝙚𝙨 𝙖𝙥𝙤𝙮𝙖𝙧 𝙚𝙨𝙩𝙚 𝙥𝙧𝙤𝙮𝙚𝙘𝙩𝙤 𝙥𝙖𝙧𝙖 𝙦𝙪𝙚 𝙨𝙞𝙜𝙖 𝙖𝙘𝙩𝙪𝙖𝙡𝙞𝙯𝙖𝙣𝙙𝙤𝙨𝙚? 𝙚𝙣𝙫𝙞𝙖𝙧 𝙖 𝙩𝙧𝙖𝙫𝙚𝙨 𝙙𝙚:
*https://paypal.me/eder469*`) 
user.pc = new Date * 1
}