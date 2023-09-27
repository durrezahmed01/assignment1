const fs = require('fs');
const ytdl = require('ytdl-core');


ytdl('https://www.youtube.com/watch?v=ooBxSg1Cl1w')
  .pipe(fs.createWriteStream('video.mp4'));