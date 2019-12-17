var fs = require('fs');
path = './file.json';
console.log('before')
fs.readFile(path, function (err, file) {
    console.log('during');
    const writeClbk = (err) => {
        console.log('end write');
    }
    fs.writeFile('./copy.json', file, writeClbk)
});




console.log('after');