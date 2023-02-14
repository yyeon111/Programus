let s = "10 20 30 40";

let answer = 0;
let array = s.split(' ');
console.log(array);
for(let i=0; i<array.length; i++){
  if(Number(array[i])){
    answer+=Number(array[i]);
  }else{
    answer-=array[i-1];
  }
}
console.log(answer);

