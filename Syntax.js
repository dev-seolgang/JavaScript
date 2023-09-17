/* 변수 (Variables) */
var a = 10;       // 변수 a를 선언하고 값 10을 할당
let b = 20;       // 변수 b를 선언하고 값 20을 할당 (재할당 가능)
const c = 30;     // 상수 c를 선언하고 값 30을 할당 (재할당 불가능)



/* 함수 (Functions) */
function add(x, y) {
    return x + y;
}

let result = add(5, 3); // 함수 호출
console.log(result);    // 결과 출력: 8



/* 조건문 (if) */
let num = 10;

if (num > 5) {
  console.log("num은 5보다 큽니다.");
} else {
  console.log("num은 5보다 작거나 같습니다.");
}



/* 반복문 (for) */
for (let i = 0; i < 5; i++) {
    console.log("현재 인덱스는 " + i);
}



/* 배열 (Array) */
let colors = ["red", "green", "blue"];
console.log(colors[0]);  // 배열의 첫 번째 요소에 접근 ("red")
colors.push("yellow");   // 배열에 요소 추가
console.log(colors);     // 배열 출력: ["red", "green", "blue", "yellow"]



/* 객체 (Object) */
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
  };
  
console.log(person.firstName);  // 객체의 속성에 접근 ("John")
person.city = "New York";       // 객체에 속성 추가
console.log(person);             // 객체 출력: { firstName: "John", lastName: "Doe", age: 30, city: "New York" }