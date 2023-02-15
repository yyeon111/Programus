function solution(array, n) {
  var answer = [];

  for(a of array){
      let temp = Math.abs(n-a);
      answer.push(temp)
  }
 return array[answer.indexOf(Math.min(...answer))]
}

function solution(array, n) {
    let result = 0;
    array.sort((a,b)=>a-b);
    let first = n-array[0]; //17
    for(let i=1; i<array.length; i++){
        let compare = Math.abs(n-array[i]); // 10 8
        if(first>compare){ //17>10
            result = array[i]; //result = 10
            first = Math.abs(n-array[i]); // 10
            
        }
    }
    return result;
}