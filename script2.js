// Cwiczenie 6
// funkcja lorem(n) zwraca podaną ilość znaków ze znanego łacińskiego cytatu: Lorem ipsum...
// let lorem_str = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum quam iusto deleniti ea quia. Harum non debitis quam incidunt perferendis temporibus soluta nihil esse voluptate quaerat quis quae tenetur delectus ut, nisi mollitia illum iste, pariatur consectetur neque! Illum accusantium reprehenderit magni culpa! Molestias quae hic veritatis dolore sit distinctio quam sapiente veniam sequi earum tempore ipsum recusandae, accusamus quas ex consectetur deleniti mollitia consequatur eligendi reprehenderit pariatur doloremque officia blanditiis est. Id quisquam quam cum blanditiis vel deleniti molestiae odio distinctio dolorum ipsum! Esse, sequi adipisci numquam harum, impedit velit fugit nihil exercitationem optio amet incidunt laudantium recusandae sed";

// function lorem(n) {
//     return lorem_str.slice(0, n);
// }
// lub ===============================================
// const lorem = n => "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum quam iusto deleniti ea quia. Harum non debitis quam incidunt perferendis temporibus soluta nihil esse voluptate quaerat quis quae tenetur delectus ut, nisi mollitia illum iste, pariatur consectetur neque! Illum accusantium reprehenderit magni culpa! Molestias quae hic veritatis dolore sit distinctio quam sapiente veniam sequi earum tempore ipsum recusandae, accusamus quas ex consectetur deleniti mollitia consequatur eligendi reprehenderit pariatur doloremque officia blanditiis est. Id quisquam quam cum blanditiis vel deleniti molestiae odio distinctio dolorum ipsum! Esse, sequi adipisci numquam harum, impedit velit fugit nihil exercitationem optio amet incidunt laudantium recusandae sed".slice(0, n);

// Test:
// console.log(lorem(10));
// console.log(lorem(55));
// console.log(lorem(759));
// console.log("¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤");
// console.log(lorem(1000));


// Cwiczenie 7
// utworzyć funkcję myReplace(s1,s2,s3) która zamienia w pierwszym stringu wszystkie słowa zgodne z s2
// na trzeci argument s3 (wszystkie argumenty są stringami). Przykład:
// myReplace("To jest pierszy string", "e", "o") zwróci: "To jost piorszy string"
// const myReplace = (s1, s2, s3) => {
//     return s1.replace(new RegExp(s2, "g"), s3);
// }
// lub ==================================================
//const myReplace = (s1, s2, s3) => s1.split(s2).join(s3);

// Test:
//console.log(myReplace("Jakis tekst z s2 i inny Index", "i", "o"));
//console.log(myReplace("Jakis tekst z s2 I inny Index", "e", "o"));



// Cwiczenie 8
// funkcja getPhraseByNum(n) tworzy fraze z podanego numeru (od 0 do 9999) np. getPhraseByNum(2567)
// zwróci dwa tysiące pięćset sześćdziesiąt siedem
// wykorzystamy funkcję z Cwiczenia 4:
// const genitive = (n, word) => {
//     let res = word.many2; //liczba mnoga słowa
//     if (n % 100 < 5 || n % 100 > 2) {
//         if (n == 1) res = word.singular; // liczba pojedyńcz
//         if (n % 10 > 1 && n % 10 < 5) res = word.many1; // liczba mnoga do 4
//     }
//     return `${res}`;
// }
// const getPhraseByNum = (n) => {
//     let res = "";
//     if (n > 999) { // określamy tysiące
//         let t = +n.toString()[0];
//         switch (t) {
//             case 1:
//                 res += "jeden ";
//                 break;
//             case 2:
//                 res += "dwa ";
//                 break;
//             case 3:
//                 res += "trzy ";
//                 break;
//             case 4:
//                 res += "cztery ";
//                 break;
//             case 5:
//                 res += "pięć ";
//                 break;
//             case 6:
//                 res += "sześć ";
//                 break;
//             case 7:
//                 res += "siedem ";
//                 break;
//             case 8:
//                 res += "osiem ";
//                 break;
//             case 9:
//                 res += "dziewieć ";
//                 break;
//         }
//         res += genitive(t, {
//             singular: "tysiąc",
//             many1: "tysiące",
//             many2: "tysięcy"
//         }) + " ";
//     }

//     if (n % 1000 > 99) { // określamy setki
//         let t = +n.toString().slice(-3, -2); // ilośc setek
//         switch (t) {
//             case 1:
//                 res += "sto ";
//                 break;
//             case 2:
//                 res += "dwieście ";
//                 break;
//             case 3:
//                 res += "trzysta ";
//                 break;
//             case 4:
//                 res += "czterysta ";
//                 break;
//             case 5:
//                 res += "pięćset ";
//                 break;
//             case 6:
//                 res += "sześćset ";
//                 break;
//             case 7:
//                 res += "siedmset ";
//                 break;
//             case 8:
//                 res += "osiemset ";
//                 break;
//             case 9:
//                 res += "dziewięćset ";
//                 break;
//         }
//     }
//     if (n % 100 > 19) { // określamy dziesiątki
//         let t = +n.toString().slice(-2, -1); //ilość setek
//         switch (t) {
//             case 1:
//                 res += "dziesięć ";
//                 break;
//             case 2:
//                 res += "dwadzieścia ";
//                 break;
//             case 3:
//                 res += "trzydzieści ";
//                 break;
//             case 4:
//                 res += "czterdzieści ";
//                 break;
//             case 5:
//                 res += "pięćdziesiąt ";
//                 break;
//             case 6:
//                 res += "sześćdziesiąt ";
//                 break;
//             case 7:
//                 res += "siedemdziesiąt ";
//                 break;
//             case 8:
//                 res += "osiemdziesiąt ";
//                 break;
//             case 9:
//                 res += "dziewięćdziesiąt ";
//                 break;
//         }
//     }
//     if (n % 100 > 9 && n % 100 < 20) {
//         let t = +n.toString().slice(-2);
//         switch (t) {
//             case 10:
//                 res += "dziesięć ";
//                 break;
//             case 11:
//                 res += "jedenaście ";
//                 break;
//             case 12:
//                 res += "dwanaście ";
//                 break;
//             case 13:
//                 res += "trzynaście ";
//                 break;
//             case 14:
//                 res += "czternaście ";
//                 break;
//             case 15:
//                 res += "piętnaście ";
//                 break;
//             case 16:
//                 res += "szesnaście ";
//                 break;
//             case 17:
//                 res += "siedmnaście ";
//                 break;
//             case 18:
//                 res += "osiemnaście ";
//                 break;
//             case 19:
//                 res += "dziewiętnaście ";
//                 break;
//         }
//     } else {
//         switch (n % 10) {
//             case 1:
//                 res += "jeden ";
//                 break;
//             case 2:
//                 res += "dwa ";
//                 break;
//             case 3:
//                 res += "trzy ";
//                 break;
//             case 4:
//                 res += "cztery ";
//                 break;
//             case 5:
//                 res += "pięć ";
//                 break;
//             case 6:
//                 res += "sześć ";
//                 break;
//             case 7:
//                 res += "siedem ";
//                 break;
//             case 8:
//                 res += "osiem ";
//                 break;
//             case 9:
//                 res += "dziewięć ";
//                 break;
//         }
//     }
//     if (!n) res = "zero ";
//     return res.slice(0, -1); // usuwamy ostatnią spację
// }

// Test:
// console.log(getPhraseByNum(4517));
// console.log(getPhraseByNum(9900));
// console.log(getPhraseByNum(78));
// console.log(getPhraseByNum(0));
// console.log(getPhraseByNum(4564));




// Cwiczenie 9
// funkcja directionByKeyCode(keyCode) przyjmuje jedną z wartosci: 87, 65, 68, 83.
// ma zwracać odpowiednio: "góra ↑", "lewo ←", "prawo →", "dół ↓"
// np. directionByKeyCode(87) powinien zwrócić: "góra ↑"
// const directionByKeyCode = (keyCode) => {
//     switch (keyCode) {
//         case 87:
//             return "góra ↑";
//             break;
//         case 65:
//             return "lewo ←";
//             break;
//         case 68:
//             return "prawo →";
//             break;
//         case 83:
//             return "dół ↓";
//             break;
//     }
// }
// lub =============================================
const directionByKeyCode = (keyCode) => ({
    '87': 'góra ↑',
    '65': 'lewo ←',
    '68': 'prawo →',
    '83': 'dół ↓',
})[keyCode];
// Test:
console.log(directionByKeyCode(87));
console.log(directionByKeyCode(68));
console.log(directionByKeyCode(83));
console.log(directionByKeyCode(65));
console.log(directionByKeyCode(34));