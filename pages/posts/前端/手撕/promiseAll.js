// in : promise数组，out: promise onfullfiled [res..] or error
const promiseAll = function(promises) {
    return new Promise((resolve, reject) => {
        let resolveNums = 0;
        let targetNums = promises.length;
        let reses = [];
        for(let i = 0; i < targetNums; i++){
            promises[i].then(res => {
                resolveNums++;
                reses[i] = res;
                if (resolveNums >= targetNums) {
                    resolve(reses);
                }
            }).catch(error => {
                reject(error);
            })
        }
    })
}