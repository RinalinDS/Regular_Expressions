let username = "Z971111";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;


let result = userCheck.test(username);
let result1 = username.match(userCheck);
console.log(result)
console.log(result1);