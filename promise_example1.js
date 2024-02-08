function getRandomInt(max) {
    console.log("getRandomInt ----------", max)
    return Math.floor(Math.random() * max)
}

function examplewithforloop() {
    return new Promise(function executor(resolve, reject) {
        for (let i = 0; i < 100000000000; i++) {}
        let num = getRandomInt(10);
        console.log("num value is ----------", num)
        if (num % 2 == 0) {
            // resolve promise 
            resolve(num);
            console.log("resolving promise")
        } else {
            // reject promise
            reject(num)
            console.log("rejecting promise")
        }
    })
}

let x = examplewithforloop();
// examplewithforloop function has code which is synchronous in nature similar to javascript

console.log("promise synchronous code--------->>>>>>.", x)