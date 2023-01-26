const fs = require('fs');

// module.exports = fs.readdir('./', 'utf8', (err, files) => {
//     if (err) {
//         throw err;
//     } else {
//         process.stdout.write(files.join('\n'));
//         process.stdout.write('\nprompt > ');
//     }
// });

// module.exports = (done) => {
//     fs.readdir(__dirname, (err, files) => {
//         process.stdout.write(files.join('\n'));
//         process.stdout.write('\nprompt > ');
//     });
// }

module.exports = (done) => {
    fs.readdir(__dirname, (err, files) => {
        done(files.join('\n'));
    });
}