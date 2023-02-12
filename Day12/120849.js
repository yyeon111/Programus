function solution(my_string){
	let answer = '';
	let array = ['a','e','i','o','u'];
	for(let i=0; i<my_string.length; i++){
		let isVowel = false;
		for(let j=0; j<arry.length; j++){
			if(my_string[i]===array[j]){
				isVowel = true;
				break;
			}
		}
		if(isVowel) continue;
		answer += my_string[i];
	}
	return answer;
}