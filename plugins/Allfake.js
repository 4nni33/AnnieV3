import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs'; 
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';

global.hachejota = '𝙷𝙰𝙲𝙷𝙴𝙹𝙾𝚃𝙰';
global.hb = 'HΔCHIҜΩβΩT-MD';
global.wm = '𝙷𝙰𝙲𝙷𝙸𝙺𝙾-𝙱𝙾𝚃-𝙼𝙳';
global.titulowm2 = `乂  𝐇 𝐀 𝐂 𝐇 𝐈 𝐊 𝐎 - 𝐁 𝐎 𝐓 - 𝐌 𝐃 乂`;
global.gp1 = 'https://chat.whatsapp.com/LRQdtS7nKt89NBUPWJDjzh';
global.md = 'https://www.instagram.com/hachejota16';
global.suittag = ['5214437863111']

//* ************************
let file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright('Update \'config.js\''));
  import(`${file}?update=${Date.now()}`);
});

