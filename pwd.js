module.exports =  function (){
    console.log("Current working directory: ", // process.cwd comes from the global process module
        process.cwd());
        process.stdout.write('\nprompt > ');

}
