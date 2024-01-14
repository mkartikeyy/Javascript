// const promiseOne = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('working')
//         // resolve()
//     }, 1000);
// })

// creating a promise 
// const promiseTwo = new Promise(function(resolve,reject){
//     setTimeout(function() {
//         let err=false;
//         if(err){
//             reject('error')
//         }
//         else{
//             resolve('passed')
//         }
//     }, 200);
// })
// //consuming the promise 
// promiseTwo.then((event)=>{
//     console.log(event)
// }).catch((event)=>{
//     console.log(event)
// }).finally(()=>{
//     console.log('finally its over')
// })

//creating a promise using Promise constructor 


// two ways to handel a promise | .then  .catch .finally |async await
const promiseHold = new Promise(function(resolve,reject){
    setTimeout(() => {
        let err=false;
        if(err){
            reject('build failed')
        }
        else{
            resolve('build successful')
        }
    }, 100);
})
//consuming a promise //chaining then it'll be a fall thru
promiseHold.then((e)=>{
    console.log(e)
}).then(()=>{
    console.log('build healthy')
}).catch((e)=>{
    console.log(e)
}).finally(()=>{
    console.log('execution complete')
})
