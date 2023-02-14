let strlist = ["We", "are", "the", "world!"];
let answer = [];

//  for 문에 for문에 들어가서 원소의 길이를 잰다음 answer에 넣어준다.

for(let i=0; i<strlist.length; i++){
  answer.push(strlist[i].length);
}
console.log(answer);