let people = 
{
    name:"cos",
    age:20,
    hobby:["축구","농구"]
}
console.log(people);

let people_json = '{"name":"cos","age":20,"hobby":["축구","농구"]}'
console.log(people_json);


//자바스크립트 오브젝트를 JSON 문자열로 변경하는 함수
let change_json = JSON.stringify(people);
console.log(change_json);

//JSON 문자열을 오브젝트로 바꾸는 함수
let change_object = JSON.parse(change_json);
console.log(change_object);
console.log(change_object.name);