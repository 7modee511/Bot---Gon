import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs'; 
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';

global.botnumber = ""
global.confirmCode = ""

global.owner = [
  ['212648753294', '👑 Mystic - Creador 👑', true],
  ['212618578927, '💫 Mystic - Essaouidi 1 💫', true],
  ['212648753294', '💫 Mystic - Essaouidi 2 💫', true],
  ['212712263052', '💫 Mystic - Essaouidi 3 💫', true],
  ['212719596553, '💫 Mystic - Essaouidi 4 💫', true],
  ['212774459373', '💫 Mystic - Essaouidi 5 💫', true],
  ['212618578927', '💫 Mystic - Essaouidi 6 💫', true],
  ['212648753294', '💫 Mystic - Essaouidi 💫', false],
  ['212689707732', '💫 Mystic - Essaouidi 8 💫', true],
  ['212712263052,'💫 Mystic - Tester Fabri115💫', true],
  ['593968585283'],
  ['5219993404349'],
  ['5219991402134'],
  ['5492266466080'],
  ['5219996125657'],
  ['5218442114446'],
  ['59894808483'],
  ['593980586516'], 
  ['595975740803'],  
  ['5492266613038'],
  ['50497150165'],
  ['51906662557'],
  ['573183650526'], 
  ['5217441298510'], 
  ['5217294888993'],
  ['595992611272']
];

global.suittag = ['212618578927];
global.prems = ['51995386439'];

global.packname = 'Sticker';
global.author = 'The Mystic - Bot';
global.wm = 'The Essaouidi - Bot';
global.titulowm = 'The Mystic - Bot';
global.titulowm2 = `The Mystic - Bot`
global.igfg = 'The Mystic - Bot';
global.wait = '*[ ⏳ ] Cargando...*';

global.imagen1 = fs.readFileSync('./Menu2.jpg');
global.imagen2 = fs.readFileSync('./src/nuevobot.jpg');
global.imagen3 = fs.readFileSync('./src/Pre Bot Publi.png');
global.imagen4 = fs.readFileSync('./Menu.png');
global.imagen5 = fs.readFileSync('./src/+18.jpg');
global.imagen6 = fs.readFileSync('./Menu3.png');

global.mods = [];

