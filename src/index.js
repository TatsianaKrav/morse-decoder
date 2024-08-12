const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let arr = expr.split('**********');
    let str = '';
    let decodedStr = '';


    arr.forEach(item => { 

        for (let i = 0; i < item.length - 9; i += 10) {
            let letter10 = item.slice(i, i + 10); 
            str = '';

            for (let j = 0; j < letter10.length - 1; j += 2) {
                let char = letter10.slice(j, j + 2);


                if (char === '10') {
                    str += '.';
                } else if (char === '11') {
                    str += '-';
                }

            }

            decodedStr += MORSE_TABLE[str];
        }
        decodedStr += " ";
    })


    return decodedStr.trim();

}

module.exports = {
    decode
}