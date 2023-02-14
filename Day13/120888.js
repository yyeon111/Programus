let my_string = 'people';

//공백도 포함해서 중복되면 지움
//for 문을 중복되면 result에 넣어주기
//중복이 되었으면 통과

//전꺼랑 비교할 수 없다.
//includes를 사용 할 수 없다.
//중복되지 않으면  result에 넣어주고 다음 넣어져 있는  result랑 비교한다.
//반복문 안에 if를 통해 continue와 break를 사용 할 수 있다.
let result = '';
for(let i of my_string){
  isTrue = false;
  for(let j of result){
   
    if(i===j){
      isTrue = true;
      break;
    }
  }
  if(!isTrue){
   result+=i; 
  }
}
console.log(result);
