function promiseNeverLand(text, timeout) {
    return new Promise((resolve, reject) => {
        // if(text === 'D') return reject('U GOT ERROR')
        setTimeout(() => {
            console.log(text);
            resolve();
        }, timeout);
    });
}

function syncing() {
    let x = prompt('bruh')
    console.log(x);
    return x;
}

async function callMama() {
    try {
        await promiseNeverLand('A', 2000)
        await promiseNeverLand(syncing(), 1000)
        await promiseNeverLand('D', 500)
    } catch (error) {
        console.error(error);
    }
}
callMama()