process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim(); // removes the new line
    console.log("Current working directory: ", // process.cwd comes from the global process module
        process.cwd());
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
})

