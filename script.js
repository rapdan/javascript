// Cwiczenie 1 
//funkcja zwraca okresloną w argumencie ilość liter "p"
// const treePalm = (n = 1) => typeof n == 'number' && n > 0 ? 'p'.repeat(n) : false;

// Test:
// console.log(treePalm(20));
// console.log(treePalm());
// console.log(treePalm('dsd'));



// Cwiczenie 2 
// zastępuje wyrazy(nedles) w zdaniu(haystack) na słowo(change)
// function autoReplace(nedles, change, haystack) {
//     if (!nedles || !change || !haystack) return false;
//     return haystack.replace(new RegExp(nedles.join('|'), 'gi'), change);
// }

// Test:
// console.log(autoReplace(['ja', 'ty'], 'my', 'ja i ty zabralismy ty ,a on ja'));
// console.log(['ja', 'ty'].join('|')); // wykorzystuje regularne wyrażenie



// Cwiczenie 3
// wyszukuje w str(stringu) tags(słowa) i tworzy do nich link z zadanym adresem i tagiem
// const getAutoTags = (base = 'https//mysite.local/tag/') => {
//     return (str, tags, url = base) => {
//         tags = '(' + tags.join("|") + ')';
//         return str.replace(new RegExp(tags, "gi"), `<a href="${url}$1">@$1</a>`);
//     }
// }
// const autoTags = getAutoTags();

// Test:
// console.log(autoTags('ciekawie jest poznawac js', ['html', 'js']));
// console.log(autoTags('ciekawie jest poznawac js i html', ['html', 'js']));
//ciekawie jest poznawac <a href="https//mysite.local/tag/js">js</a>
//ciekawie jest poznawac <a href="https//mysite.local/tag/js">js</a> i <a href="https//mysite.local/tag/html">html</a>



// Cwiczenie 4
// zwraca słowo odmieniane w zależności od liczby n np. sztuka, sztuki, sztuk
// const genitive = (n, word) => {
//     let res = word.many2; //liczba mnoga słowa
//     if (n % 100 < 5 || n % 100 > 2) {
//         if (n == 1) res = word.singular; // liczba pojedyńcza
//         if (n % 10 > 1 && n % 10 < 5) res = word.many1; // liczba mnoga do 4
//     }
//     return `${n} ${res}`;
// }

// Test:
// console.log(genitive(20017, { // 20017 kursów
//     singular: 'kurs',
//     many1: 'kursy',
//     many2: 'kursów'
// }));
// console.log(genitive(102, { // 102 kursy
//     singular: 'kurs',
//     many1: 'kursy',
//     many2: 'kursów'
// }));
// console.log(genitive(101, { // 101 kurs
//     singular: 'kurs',
//     many1: 'kursy',
//     many2: 'kursów'
// }));
// console.log(genitive(1005, { // 1005 kilogramów
//     singular: 'kilogram',
//     many1: 'kilogramy',
//     many2: 'kilogramów'
// }));



// Cwiczenie 5
// chodzi o stworzenie funkcji dodającej, usuwającej, zmieniającej klasy w elemencie
// Mamy utworzyć obiekt classNames z włąściwością cname i metodami: 
// 1. add(String [,String2]) dodaje do cname klasę lub klasy
// 2. remove(String [,String2]) usuwa z cname klasy
// 3. toggle((String [, Boolean])) jeżeli element nie posiada tej class-y to metoda doda ją,
//    w przeciwnym wypadku usuwa. Kiedy drugi parametr jest false to usuwa wskazaną klasę, true - dodaje ją
// Np. classNames.cname = "btn" Po uruchomieniu className.toggle('btn-primary') wartość 
// classNames.cname powinna być "btn btn-primary". Przy ponownym uruchomieniu className.toggle('btn-primary')
// wartość powinna wrócić do "btn"

const classNames = {
    cname: "", // nie to samo co this.cname
    add: function (...s) {
        //console.log(this.cname);
        let cname = this.cname.split(" "); // rozbicie na class-y np. [ 'btn', 'btn-primary' ]
        let tmp = [];
        for (let i in cname) {
            tmp[cname[i]] = 1;
        } // tmp = [ btn: 1, 'btn-primary': 1 ]
        s.forEach(function (e) { // pobiera nowe class-y z s i zapobiega powtarzaniu
            tmp[e] = 1;
        });

        this.cname = ""; // resetuje class-y
        for (let i in tmp) {
            this.cname += i + " "; // tworzy ciąg class odzielonych " " zapisanych w tmp
        }
        this.cname = this.cname.slice(0, -1); // usuniecie ostatniej spacji
    },
    remove: function (...s) {
        //console.log(this.cname);
        let cname = this.cname.split(" "); // rozbicie na class-y np. [ 'btn', 'btn-primary' ]
        let tmp = [];
        for (let i in cname) {
            tmp[cname[i]] = 1;
        } // tmp = [ btn: 1, 'btn-primary': 1 ]
        s.forEach(function (e) { // sprawdza które class-y wykasować
            if (e in tmp) delete tmp[e];
        });
        this.cname = ""; // resetuje class-y
        for (let i in tmp) {
            this.cname += i + " "; // tworzy ciąg class odzielonych " " zapisanych w tmp
        }
        this.cname = this.cname.slice(0, -1); // usuniecie ostatniej spacji z ciągu class
    },
    toggle: function (str, flag) {
        let cname = this.cname.split(" ");
        let tmp = {};
        for (let i in cname) {
            tmp[cname[i]] = 1;
        }

        if ((str in tmp) || (!flag && flag != undefined)) {
            delete tmp[str];
        } else if (!(str in tmp) || flag) {
            tmp[str] = 1;
        }
        this.cname = "";
        for (let i in tmp) {
            this.cname += i + " ";
        }
        this.cname = this.cname.slice(0, -1);
    }

}

// Test:
classNames.cname = "btn btn-primary";
console.log(classNames.cname);
console.log('########## add ###########');
classNames.add("logo", "jango", "rocki");
console.log(classNames.cname);
console.log('########## remove ###########');
classNames.remove("rocki", "jango");
console.log(classNames.cname);
console.log('########## toggle ###########');
classNames.toggle("logo"); // usunie
console.log(classNames.cname);
classNames.toggle("logo"); // ustanowi
console.log(classNames.cname);
classNames.toggle("wrapper", true); // ustanowi
console.log(classNames.cname);
classNames.toggle("wrapper", false); // usunie
console.log(classNames.cname);