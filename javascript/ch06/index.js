//오브젝트 - 배열비교
//number, str, array(object),boolean, object, null
//나를 정의하기위해서는 변수나 그런것들이아닌 오브젝트를 넣어야한다.



let soccer =
{
    name:"축구",
    count:11,
    need:"공"
}

let people =
{
    name : "woo",
    phone :"01071811356" ,
    address:"부산",
    age:50,
    hobby:["농구",soccer,"음악"]
}

console.log(people);
console.log(people.hobby[1].count);

//오브젝트 : 사물
console.log(people);
console.log(typeof people);

console.log(people.name);
console.log(people.phone);
console.log(people.address);
console.log(people.age);

let num = [1,2,3,4,5];

let num2 = 
{
    one:1,
    two:2,
    important:3,
    four:4,
    five:5
}


console.log(num2.important);

