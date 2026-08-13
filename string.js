const hisName = "PeTeR";

console.log(hisName.toLowerCase()); //peter
console.log(hisName.toUpperCase()); //PETER

function lowerMe (value) {
    return value.toLowerCase();
}
console.log(lowerMe(hisName));
const trimExample = " Hello World! ";
console.log(trimExample.trim()); // "Hello World!"
console.log(trimExample.trimStart()); // "Hello World!"
console.log(trimExample.trimEnd()); // "Hello World!"

let filename = "report_final_2024.pdf";

console.log(filename.startsWith(".report")); //true
console.log(filename.startsWith(".draft")); //false
console.log(filename.endsWith(".pdf")); //true
console.log(filename.endsWith(".docx")); //false

const extractExample = "Peter";
console.log(extractExample.slice(0, 3)); //"Est"
console.log(extractExample.slice(3)); //"her"
console.log(extractExample.slice(-3,)); //"her"
console.log(extractExample.substring(0, 3)); //"Est"
console.log(extractExample.substring(3)); //"her"
console.log(extractExample.substring(-3)); //"Peter" (negative index treated as 0)