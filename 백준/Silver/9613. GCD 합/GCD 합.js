const fs = require("fs");
let inputs = fs.readFileSync("./dev/stdin").toString().split("\n");
let cases = Number(inputs[0]);

//최소공배수 구하는 함수
let answer = [];
for (let i = 1; i <= cases; i++) {
  let splited = inputs[i].split(" ");
  let nums = Number(splited[0]); //테스트 수의 개수

  let result = 0;
  for (let j = 1; j <= nums; j++) {
    for (let k = j + 1; k <= nums; k++) {
      let common = gcd(Number(splited[j]), Number(splited[k]));
      result += common;
    }
  }
  answer.push(result);
}

console.log(answer.join("\n").trim());

//최대공약수 구하는 함수
function gcd(a, b) {
  if (a < b) {
    [a, b] = [b, a];
  }
  while (b != 0) {
    let tmp = a % b;
    a = b;
    b = tmp;
  }
  return a;
}