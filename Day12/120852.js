function solution(n){
	let answer = [];
	for(let i=2; n!==1; i++){
		if(n%i===0){
			while(n%i===0){ //2로 나눠지는 한 계속 해서 2로 나눈다.
				n/=i;
			}
		answer.push(i); //더이상 2로 나눠지지 않을 때, 2를 push하고 나온다.
		}
	}
	return answer;
}