const fs = require("fs");
let inputs = fs.readFileSync("./dev/stdin").toString().split("\n");
let cases = Number(inputs[0]);

//최소공배수 구하는 함수
let answer = [];
for (let i = 1; i <= cases; i++) {
  let x = Number(inputs[i].split(" ")[0]); //1, 6, 13
  let y = Number(inputs[i].split(" ")[1]); //45000, 10, 17
  let common = gcd(x, y);  //1, 2, 1
  answer.push((x * y) / common);
}

//최대공약수 구하는 함수
function gcd(a, b) {
  if (a < b){
    [a, b] = [b, a];
  }
  while (b != 0) {
    let tmp = a % b;
    a = b;
    b = tmp;
  }
  return a;
}
console.log(answer.join("\n"));