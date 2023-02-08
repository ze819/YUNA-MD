import { spawn } from 'child_process';
import { join } from 'path';

const __dirname = global.__dirname(import.meta.url);

const defaultFonts = {
  fontLevel: join(__dirname, '../src/font/level_c.otf'),
  fontTexts: join(__dirname, '../src/font/texts.otf'),
};

const defaultAnnotations = [
  {
    level: 2,
    value: '+1385+260'
  },
  {
    level: 10,
    value: '+1370+260'
  },
  {
    level: 50,
    value: '+1330+260'
  },
  {
    level: 100,
    value: '+1260+260'
  }
];

/**
 * Levelup image
 * @param {String} teks 
 * @param {Number} level 
 * @param {Object} [options={}]
 * @param {Object} [options.fonts={}]
 * @param {String} [options.fonts.fontLevel]
 * @param {String} [options.fonts.fontTexts]
 * @param {Array} [options.annotations]
 * @returns {Promise<Buffer>}
 */
export function levelup(teks, level, options = {}) {
  return new Promise(async (resolve, reject) => {
    if (!(global.support.convert || global.support.magick || global.support.gm)) {
      return reject('Not Support!');
    }

    const {
      fonts = {},
      annotations = defaultAnnotations
    } = options;
    const {
      fontLevel = defaultFonts.fontLevel,
      fontTexts = defaultFonts.fontTexts
    } = fonts;
    const xtsx = join(__dirname, '../src/lvlup_template.jpg');

    let annotation = annotations.find(annot => annot.level > level) || annotations[annotations.length - 1];
    annotation = annotation.value;

    const [_spawnprocess, ..._spawnargs] = [...(global.support.gm ? ['gm'] : global.support.magick ? ['magick'] : []),
      'convert',
      xtsx,
      '-font',
      fontTexts,
'-fill', '#FFFFFF', // for white

      '-size',
      '1024x784',
      '-pointsize',
      '68',
      '-interline-spacing',
      '-7.5',
      '-annotate',
      '+153+200',
      teks,
      //original together
      '-font',
      fontLevel,
      '-fill',
      '#ffffff',
      '-size',
      '1024x784',
      '-pointsize',
      '140',
      '-interline-spacing',
      '-1.2',
      '-annotate',
      annotation,
      level,
      '-append',           
      'jpg:-' 
        ]
        let bufs = []
        spawn(_spawnprocess, _spawnargs)
            .on('error', reject)
            .on('close', () => {
                return resolve(Buffer.concat(bufs))
            })
            .stdout.on('data', chunk => bufs.push(chunk))
    })
}
