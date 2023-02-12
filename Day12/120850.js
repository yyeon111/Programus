let my_string = "abcde0";
let answer = [];
let array = my_string.split('');
for(let i=0; i<array.length; i++){
    if(!isNaN(array[i])){
        answer.push(Number(array[i]));
    }
}
answer.sort((a,b)=>a-b);

console.log(answer);