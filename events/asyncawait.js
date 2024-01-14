const promiseOne = new Promise(function(resolve,reject){
    setTimeout(() => {
        let err=true;
        if(err){
            reject('build failed')
        }
        else{
            resolve('build successful')
        }
    }, 100);
});

async function consumePromise(){
    try {
        const response =await promiseOne
        console.log(response)
    } catch (error) {
        console.log( `error: ${error}`)
    }
}
consumePromise()