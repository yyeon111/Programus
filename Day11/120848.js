function solution(n) {
  let total = 1;
  for(let i = 1; i<=n; i++){
      total*=i;
      if(total>n) return i-1;
      if(total==n) return i;
  }
}