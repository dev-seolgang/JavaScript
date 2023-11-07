# JavaScript ES6 문법 정리

1. **let과 const**:

   ```javascript
   let name = 'John';
   name = 'Doe'; // 재할당 가능

   const pi = 3.14;
   // pi = 3.14159; // 재할당 불가능
   ```

2. **화살표 함수 (Arrow Functions)**:
   ```javascript
   // ES5
   function multiply(x, y) {
     return x * y;
   }

   // ES6
   const multiply = (x, y) => x * y;
   ```

3. **템플릿 리터럴 (Template Literals)**:

   ```javascript
   const name = 'Alice';
   const greeting = `안녕, ${name}!`;
   console.log(greeting);
   ```

4. **클래스 (Classes)**:

   ```javascript
   class Person {
     constructor(name) {
       this.name = name;
     }

     sayHello() {
       console.log(`안녕, 나는 ${this.name}이야.`);
     }
   }

   const person = new Person('Bob');
   person.sayHello();
   ```

5. **모듈 시스템 (Modules)**:

   ```javascript
   // math.js
   export const add = (a, b) => a + b;
   export const subtract = (a, b) => a - b;

   // main.js
   import { add, subtract } from './math.js';

   console.log(add(5, 3)); // 8
   console.log(subtract(5, 3)); // 2
   ```

6. **구조 분해 (Destructuring)**:

   ```javascript
   const person = { firstName: 'Jane', lastName: 'Doe' };
   const { firstName, lastName } = person;

   console.log(firstName); // Jane
   console.log(lastName); // Doe
   ```

7. **Promise와 비동기 프로그래밍**:

   ```javascript
   function fetchData() {
     return new Promise((resolve, reject) => {
       setTimeout(() => {
         resolve('데이터가 도착했습니다.');
       }, 2000);
     });
   }

   fetchData()
     .then(data => console.log(data))
     .catch(error => console.error(error));
   ```

8. **맵 (Map)과 셋 (Set)**:

   ```javascript
   const myMap = new Map();
   myMap.set('key1', 'value1');
   myMap.set('key2', 'value2');

   const mySet = new Set();
   mySet.add('item1');
   mySet.add('item2');
   ```

9. **프록시 (Proxy)**:

   ```javascript
   const target = {
     name: 'Alice',
     age: 30,
   };

   const handler = {
     get(target, prop) {
       console.log(`읽는 중: ${prop}`);
       return target[prop];
     },
   };

   const proxy = new Proxy(target, handler);
   console.log(proxy.name); // 'Alice' 출력
   ```
