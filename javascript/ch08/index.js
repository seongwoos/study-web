function addDiv()  //버튼을 클릭하면 얘가 실행될꺼임
{
    let newDiv = document.createElement("div");
    console.log(newDiv)
    newDiv.innerHTML="<h1>나</h1>";  //.으로 시작하는것은 innerHTML 가 오브젝트라는 의미
                                    //innerHTML : newDiv에 대해서 안의내용을 나 로출력
    let card_list = document.querySelector(".card-list"); //타입에 상관없이 접근하게 해주는 함수
    card_list.append(newDiv);   //prepend 위로추가 append 아래로추가
}

addDiv();
addDiv();
addDiv();
addDiv();
addDiv();
addDiv();
addDiv();
addDiv();
addDiv();
addDiv();



오브젝트 //하나의값이 여러개 들어있는것