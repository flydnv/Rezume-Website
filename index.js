// let min = 10;
// let max = 13;
// console.log(Math.floor((max - min + 1)*Math.random() + min));

// let a = 5;
// console.log(a++); //5 post-increment

// let a = 5;
// console.log(++a); //6 pre-increment

// let a = 17;
// if ((a > 10) & (a % 2 == 1) || (a > 10 && a % 3 == 0)) {
//   console.log("yes");
// }

// let person = {
//   name: "Orxan",
//   surname: null,
// };
// console.log(person.father); //undefined
// console.log(person.surname); //null

// console.log(!false+true); //output 2

//todo verilmis araliqda sade ededlerin tapilmasi
// let min = 10;
// let max = 20;
// for (let eded = min; eded <= max; eded++) {
//   sade = true;
//   for (let j = 2; j <= Math.sqrt(eded); j++) {
//     if (eded % j == 0) {
//       sade = false;
//       break;
//     }
//   }
//   if (sade) {
//     console.log(eded);
//   }
// }

// let i = 10
// do{
//   console.log(i);
//   i++;
// }while(i<11);

//todo ededi tersine cevir
// let eded = 1234;
// let reverse = 0;
// while (eded) {
//   reverse = reverse * 10 + (eded % 10);
//   eded = Math.trunc(eded / 10);
// }
// console.log(reverse);

//todo eded daxilinde mueyyen reqemin olub-olmadigini tapmaq
// let eded = 7490;
// let found = false;
// let searching = 8;
// for (; eded; ) {
//   if (eded % 10 === searching) {
//     found = true;
//     break;
//   }
//   eded = Math.trunc(eded / 10);
// }
// console.log(eded ? `Eded daxilinde ${searching} var` : `Eded daxilinde ${searching} yoxdur`);

// let text = "coDers";
// console.log(text.charCodeAt(2));
// console.log(text.charAt(2));

// for (let i = 10; i < 40; i++) {
//   if (i.toString().includes(2)) {
//     console.log(i);
//   }
// }

//todo təkrarlanan elementləri tap #1
// let list = [2,1,2,6,1,7,8,7,9,0,4]
// let repeat=[]
// for(let i=0;i<list.length;i++){
//   let say=0
//   for(let j=0;j<list.length;j++){
//     if(list[i]===list[j]){
//       say++;
//     }
//   }
//   if(say===2){
//     repeat.push(list[i])
//   }
// }
// console.log(repeat);

//todo təkrarlanan elementləri tap #2
// let list = [2, 1, 2, 6, 1, 7, 8, 7, 9, 0, 4];
// let unical = new Set();
// let repeat = [];
// list.forEach((element) => {
//   if (unical.has(element)) {
//     repeat.push(element);
//   } else {
//     unical.add(element);
//   }
// });

// let a = 5;
// function hesabla(){
//   console.log(a);
// }
// hesabla();

// let arrowFunc = () => {
//   console.log(a);
// }

//* xəta çıxmır
// let user = { name: "Ali" ,
//     family: {
//         father: "Kazim",
//         mother: "Khumara",
//         brother: "Sarkhan"
//     }
// };
// console.log(user.name);
// console.log(user.family.mother);
// console.log(user.family?.sister);

// let ededler=[2,4,6,8,15,34]
// let res= ededler.map((a,b)=>a*b)
// console.log(res);

// let numbers = [1,2,3]
// let deleted= numbers.shift()
// console.log(numbers);
// console.log(deleted);

// let array = [1, 2, 3, 4, 5, 67];
// let find = array.find((a) => true);
// console.log(findIndex);

//todo 1)arraydan sadeleri tap - funksiya ile
// const checkPrime = (a) => {
//   prime = true;
//   for (let i = 2; i < Math.sqrt(a); i++) {
//     if (a % i === 0) {
//       prime = false;
//       break;
//     }
//   }
//   return prime;
// };
// let array = [2, 34, 7, 13, 18];
// let selectPrime = array.filter((a) => checkPrime(a) === true);
// console.log(selectPrime);

//todo 2)arrayin maksini tap
// let array = [2, 5, 35,36, 24];
// let len = array.length;
// let maks=array[0]
// for (let i = 1; i < len; i++) {
//     maks = array[i] > maks ? array[i] : maks;
// }
// console.log(maks);

//todo 3)en boyuk ikinci ededi tap
// array = [1, 3, 4, 5, 6, 14, 12];
// array.sort((a,b) => a - b);
// console.log(array);
// console.log(array[array.length-2]);

//todo 4) Arraydan len>5 and en azi 2 a herfi olanları seç-->
// const hasAtLeastTwoOccurrences = (str) => {
//   const firstIndex = str.toLowerCase().indexOf("a");
//   const lastIndex = str.toLowerCase().lastIndexOf("a");
// Əgər birinci və sonuncu indeks fərqlidirsə, bu, ən azı iki dəfə mövcud olduğunu göstərir
//   return firstIndex !== -1 && firstIndex !== lastIndex;
// };
// const lengthMin = (str) => {
//   let res = str.length >= 5 ? true : false;
//   return res;
// };
// const array = ["salam", "balam", "Asta", "Mazda"];
// let res = array.filter(
//   (string) => hasAtLeastTwoOccurrences(string) && lengthMin(string)
// );
// console.log(res);

//todo 5)kokalti ile evez edin
// let array = [4, 16, 32, 64, 48, 81];
// let newArray = array.map((num) => {
//   let sqrt = Math.sqrt(num);
//   return Number.isInteger(sqrt) ? sqrt : "-";
// });

// console.log(array);
// console.log(newArray);

//todo 6)arrayda təkrarlanan elementleri sil
// let array = [1, 2, 1, 3, 4, 2, 4, 19, 21];
// let new_Arr = [];
// let len=array.length
// for(let i=0; i<len;i++){
//     if(!new_Arr.includes(array[i])){
//         new_Arr.push(array[i])
//     }
// }
// console.log(new_Arr);

//todo js task 7
// let request = true;
// let numbers = [];
// while (request) {
//   let number = prompt("Lutfen eded daxil edin");
//   if (number != 0) {
//     numbers.push(number);
//   }else{
//     request=false;
//   }
// }
// const checkPrime = (a) => {
//   prime = true;
//   for (let i = 2; i < Math.sqrt(a); i++) {
//     if (a % i === 0) {
//       prime = false;
//       break;
//     }
//   }
//   return prime;
// };
// let sum=0
// let lenn=numbers.length
// for(let i=0;i<lenn;i++){
//     sum+=+numbers[i]
// }
// console.log(numbers);
// console.log(numbers.filter(num=>checkPrime(num)));
// console.log(numbers.filter(num=> !checkPrime(num)));
// console.log(sum);

// const password = "Guba";
// let chances = 3;
// let checkPass = false;
// let input = prompt("Şİfrəni daxil edin:");
// chances -= 1;
// while (chances != 0) {
//   if (input === password) {
//     checkPass = true;
//     break;
//   } else {
//     console.log(`'${input}' dogru şifrə deyildir. Cehdlerin sayı ${chances}`);
//     --chances;
//     input = prompt("sifre yanlisdir , yenisini daxil edin:");
//   }
// }

// todo arrayda sadə ədədləri saxlayaraq , mürəkkəb ədədləri özündən sonra gələn ilk sadə ilə əvəz et 👌
// const checkPrime = (a) => {
//   prime = true;
//   for (let i = 2; i < Math.sqrt(a); i++) {
//     if (a % i === 0) {
//       prime = false;
//       break;
//     }
//   }
//   return prime;
// };
// let array = [2, 5, 7, 12, 15];
// let res = array.map((num) => {
//   if (!checkPrime(num)) {
//     let newPrime = num;
//     while (!checkPrime(newPrime)) {
//       newPrime++;
//     }
//     return newPrime;
//   } else {
//     return num;
//   }
// });

// console.log(res);

//todo arraydaki strlərin yalniz ilk həfini boyuk et
// let input = "azTunun telebeLeri";
// let list = input.split(" ").map(String);
// list = list.map(
//   (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
// );
// let res = list.join(" ");
// console.log(res);

//todo ATM problem with arrays.
// let units = [5, 10, 20, 50, 100, 200, 500].reverse();
// let amount = 770;
// let len = units.length;
// let i = 0;
// while (amount > 0) {
//   let say = 0;
//   while (amount / units[i] >= 1) {
//     amount -= units[i];
//     say++;
//   }
//   if (say) {
//     console.log(`${say} eded ${units[i]}`);
//   }
//   i++;
// }

//todo saitləri sayan program
// let text = "Salam agilli oduncu";
// console.log(text.match(/[aıouüeəöi]/gi).length);

// let students = [
//   {
//     name: "Ali",
//     surname: "Valiyev",
//     present: function () {
//       console.log(`Adim ${this.name}, soyadim ${this.surname}`);
//     },
//   },
// ];
// students.map(student=>student.present())

// let infos = {
//     head: "sos",
//     text: "shara bullet ilk meglubiyyetini alir"
// }
// console.log(infos)
// console.log(Object.entries(infos));
// console.log(Object.keys(infos));
// console.log(Object.assign(infos));
let groups = [
  {
    id: 1,
    name: "Coders Qusar",
    instructor_id: 1,
  },
  {
    id: 2,
    name: "Coders Quba",
    instructor_id: 1,
  },
  {
    id: 3,
    name: "Coders Front-End",
    instructor_id: 2,
  },
];

let students = [
  {
    id: 1,
    name: "Ramin",
    surname: "Ağabəyov",
    group_id: 1,
  },
  {
    id: 2,
    name: "Aygün",
    surname: "Kərimova",
    group_id: 1,
  },
  {
    id: 3,
    name: "Orxan",
    surname: "Babayev",
    group_id: 2,
  },
  {
    id: 4,
    name: "Murad",
    surname: "Qurbanov",
    group_id: 2,
  },
  {
    id: 5,
    name: "Ali",
    surname: "Karimli",
    group_id: 3,
  },
];

let instructors = [
  {
    id: 1,
    name: "Nijat",
    surname: "Mammadli",
  },
  {
    id: 2,
    name: "Camal",
    surname: "Hüseynov",
  },
];

//todo Qrupun adı - Muellimi - butun telebeleri
// groups.map((group) => {
//   let instructor = instructors
//     .filter((instructor) => group.instructor_id === instructor.id)
//     .map((a) => `${a.name} ${a.surname}`);
//   let studentsOfgroup = students
//     .filter((student) => student.group_id === group.id)
//     .map((i) => `${i.name} ${i.surname}`);

//   console.log(`${group.name} | ${instructor} | ${studentsOfgroup}`);
// });

//todo Telebe - qrupu - muellimi
// students.map((student) => {
//   let group = groups.find((group) => group.id === student.group_id);
//   let instructor = instructors.find(
//     (instructor) => group.instructor_id === instructor.id
//   );
//   console.log(`${student.name} ${student.surname} | ${group.name} | ${instructor.name} ${instructor.surname}`);
// });

//todo Muellim - telebeleri
// instructors.map((instructor) => {
//   let group = groups.filter((group) => group.instructor_id == instructor.id);
//   group.map((a) => {
//     let studentsOfGroup = students
//       .filter((student) => student.group_id === a.id)
//       .map((a) => `${a.name} ${a.surname}`);
//     console.log(
//       `${instructor.name} ${instructor.surname} || ${studentsOfGroup}`
//     );
//   });
// });

//todo verilmiş iki ədəd arasındakı ədədlərin verilmis qədərini random çap et
//10 20 5 -> 13 17 11 19 16
// let start = 10;
// let end = 25;
// let len = 5;
// let numbers = [];

// while (len) {
//   let random = Math.trunc(Math.random() * (end - start)) + start;
//   if (numbers.includes(random)) {
//     continue;
//   } else {
//     numbers.push(random);
//     len--;
//   }
// }
// console.log(numbers);

// person = {
//   name: "Ali",
//   surname: "Karimli",
// };
// let keys = Object.keys(person);
// keys.map(a=>{
//   console.log(`${a} = ${person[a]}`);
// })

//* callback hell
// console.log(1);
// setTimeout(() => {
// console.log(2); //*trigger-tetikleyici
//   setTimeout(() => {
//     console.log(3);
//   },999);
// }, 1000);

//todo
// const getData = async () => {
//   let data = await fetch("./mydata.json");
//   data = await data.json();
//   data.forEach(element => {
//     console.log(element.name);
//   });
// };
// getData();

//todo
//todo 1)Ölkələr siyahısından regionu Asia olan və əhalisi 5000000dan çox olan ölkələrin adlarını regionlarını və əhalini sayını göstərin
// fetch("https://restcountries.com/v3.1/all")
//   .then((data) => data.json())
//   .then((json) =>
//     json.filter((item) => item.region === "Asia" && item.population > 5000000)
//   )
//   .then((a) =>
//     a.forEach((b) =>
//       console.log(`${b.name.common} ${b.region} ${b.population}`)
//     )
//   );

//todo 2)ölkələr siyahısında olan dataları əhail sayına görə çoxdan aza sıralayib göstərin
// fetch("https://restcountries.com/v3.1/all")
//   .then((data) => data.json())
//   .then((json) => {
//     json.sort((a, b) => b.population - a.population);
//     json.forEach((a) => console.log(`${a.name.common} ${a.population}`));
//   });
