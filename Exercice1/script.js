

function isBlank(str) {
    return str.trim() === "";
}
// true
console.log(isBlank("")); 
// true
console.log(isBlank("  ")); 
// false
console.log(isBlank("Hello")); 

//For fun  i'm using Regex
function isBlank(str) {
    return str.replace(/\s/g, "") === "";
}
 // true
console.log(isBlank(""));
// true
console.log(isBlank("  ")); 
// false
console.log(isBlank("Hello")); 