function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

function creationOfPromisewithoutLoop() {
    try {
        return new Promise(function executor(resolve, reject) {
            setTimeout(() => {
                console.log("delayed this logic for 60 sec") 
                let num = getRandomInt(10);
                console.log("num value is ----------", getRandomInt(10))
                if (num % 2 == 0) {
                    // resolve promise
                    resolve(num);
                    console.log("resolving promise")
                } else {
                    // reject promise
                    reject(num)
                    console.log("rejecting promise")
                }
            }, 60000)
        })

    } catch (error) {
        console.log("catch block error---------->>>>>>>>",error)
    }
}

let y = creationOfPromisewithoutLoop();
// examplewithforloop function has setTimeout code which is asynchronous in nature.

console.log("final output y------>>>>>>>>>>>>>", y)