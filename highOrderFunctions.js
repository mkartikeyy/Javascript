/*The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.

let arr = [45,23,31];
let b = arr.map( (v) => {
    return  v*2;
} );
console.log(b);

filter(), the method of array.prototype creates a shallow copy of a portion of given array filtered according to the given function
filet an array for the values which passes the condition
let arr2 = [1,2,3,4,5,6,7,8,9,0];
let arr2Filtered = arr2.filter( (value)=>{
    return value%2!=0
} )
console.log(arr2Filtered)


The final result of running the reducer across all elements of the array is a single value.
an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element 

 let arr3 = [1,2,3,4];
let val = arr3.reduce( (first,second)=>{
    return first+second;
} )
console.log(val);
console.log(typeof(val));//not an array
*/

