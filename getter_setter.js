// get and set both have to be defined
// setting pass multiple times leads to multiple call stack size increase
//to avoid that, we almost use a different vaiable to overwrite the password field 
// which is _pass 
//since classes are a syntactical sugar this is how it's working behind the scenes , this is a way of sirectly injecting a function in the prototye of the object
//behind : constructor is just setting email and not pass 

class user{
    constructor(email,pass){
        this.email=email
        this.pass=pass
    }
    //get, set for email
    get email(){
        return this._email
    }
    set email(val){
        this._email=val.toUpperCase()
    }
    get pass(){
        return this._pass
    }
    set pass(val){
        this._pass = val.toUpperCase()
    }
}

user.prototype.hii=function(){
    return 'hii';
}

const kartikey = new user("km@gmail.com","kartikey")
console.log(kartikey)
console.log(kartikey.hii())
console.log(kartikey.pass)
console.log(kartikey._pass)
console.log(kartikey.email)
