import app from './server';

async function main () {
    await app.listen(3000);
    console.log('app runing on port 3000!')
}

main();