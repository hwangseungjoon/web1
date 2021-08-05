let target = document.querySelector("#dynamic");
//document 객체에 querySelector란 method로 dynamic 속성을 갖는 문서 객체를 선택

let stringArr = ["Learn to Love", "HSJ Love GHE", "Wedding is 10/10~"]
let selectString = stringArr[Math.floor(Math.random()) * stringArr.length];
let selectStringArr = selectString.split("");

function randomString(){
    let stringArr = ["Learn to Love", "HSJ Love GHE", "Wedding is 10/10"]
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
    let selectStringArr = selectString.split("");

    return selectStringArr;
}

//타이핑 리셋
function resetTyping(){
    target.textContent = "";
    dynamic(randomString());
}

//한글자씩 텍스트 출력 함수
function dynamic(randomArr){
    if(randomArr.length > 0){
        target.textContent += randomArr.shift();
        setTimeout(function(){
            dynamic(randomArr);
        },80)
    }
    else{
        setTimeout(resetTyping, 3000);;
    }
}

dynamic(randomString());

function blink(){
    target.classList.toggle("active");
}
//커서 깜빡임 효과
setInterval(blink, 500);






