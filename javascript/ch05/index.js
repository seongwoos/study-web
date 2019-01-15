const num = [1,2,3,4,5,6];
console.log(num);
console.log(num[4]);


num.push(6);            //6을 추가
console.log(num);
num.pop();              //가장끝부분 빼기
console.log(num);

//split
let str = "money:3000";
let arr = str.split(":");
console.log(arr);

let ele = 
    document.querySelector("#data"); //문서에서 query를 써서 data에 관한 모든것을 찾을수있음
    ele.innerHTML = arr[1]+"원 벌었습니다."
