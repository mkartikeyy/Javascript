fetch('https://jsonplaceholder.typicode.com/posts')
.then((data)=>{    
    return data.json()
}).then(function(result){
    console.log(result)
}).catch((error)=>{
    console.log(error)
})


// internal mech of fetch 

// 1 is web req which talks to the server and either returns the response 
// 2nd is the part of data, onfullfinned and on rejected array 
// the resolve will go in fulfilled even the errors and the reject will go in rejected
// the fullfilled and rejected array are responsible to filled the data field and then the data filled goes to the global and is then responsible to return the result in the variable 