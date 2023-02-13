let my_string = "aAb1B2cC34oOp";
let answer = 0;
let array = my_string.split('');
for(let i of array){
  if(Number(i)){
    answer += Number(i);
  }
}
console.log(answer);