var { default: srtParser2 } = require("srt-parser-2")
var parser = new srtParser2()
 //https://www.npmjs.com/package/srt-parser-2
 var fs = require('fs');


// use romaja library to convert korean to roman words
// return string
function koreanToRoman(korean) {
    
}

// give location of file, import and
// return new srt file
function readSrt(filename) {
    try {  
        let data = fs.readFileSync(filename, 'utf8');
        let srt = data.toString()
        let segmentList = parser.fromSrt(srt);
        segmentList.forEach(segment => {
            // call koreanToRoman function
            // export a new srt file
        });
    } catch(e) {
        console.log('Error:', e.stack);
    }
}