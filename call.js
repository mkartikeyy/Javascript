//functionality for  .call 
function thehelper(a){
    this.a=4
    console.log('reaching into helper')
}
function verification(a,b,c){
    thehelper.call(this,a) //to have the refecence of the execution context of the function being called 
    this.b=5
    this.c=6
}
const c = new verification(2,3,1)
console.log(c)