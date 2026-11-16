// 1. Provide the sum of the following variables

var num10 = 10;
var string8 = '8';
var one = 1;


// 2. Write a loop that will log only numbers divisible by 3 between 20 - 100


// 3. Find the class average given the following test scores

var scores = [88, 84, 100, 92, 70, 76, 76, 84, 86, 98];

function add() {
  var [resultType, ...others] = [...arguments]
  return others.reduce((acc, cur) => acc + (+cur), resultType === 'string' ? '' : 0)
}

console.log('Answer 1 :=>')
console.log(add('string', num10, string8, one))
console.log(add('num', num10, string8, one))

console.log('Answer 2 :=>')

for (var i = 20; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}


function avg(scores) {
  return scores.reduce((acc, cur) => acc + cur, 0) / scores.length
}

console.log('Answer 3 :=>')
console.log(avg(scores))