
/*
const number = 42;

try {
    number = 99;
} catch(err) {
    console.log(err);
    // expected output: TypeError: invalid assignment to const `number'
    // Note - error messages will vary depending on browser
}

console.log(number);
// expected output: 42
*/

{
    const num =99;
}
try {
    num =101
}
catch(err) {
    console.log(err);
    // expected output: TypeError: invalid assignment to const `number'
    // Note - error messages will vary depending on browser
}