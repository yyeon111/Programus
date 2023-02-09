function isPrime(num){
  for(let i = 2; i<num; i++){
    if(num%i===0) return true;
    
  }
    return false;
}

function solution(num){
	let result = 0;
  for(let i = 2; i<=num; i++){
    if(isPrime(i)) result++;
  }
  return result;
}