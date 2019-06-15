var a = 1;
var b = a + 1;
f();
console.log(b);

var human = {
    age : 27,
    name : 'Vasya',
    'любимая игра' : 'Вщдуйбол',
    f : function () {
        console.log("f");
    }
};

human.age = 34;

delete human.age;

if ('age' in human) {
    console.log(human.age);
    console.log(human.name);
    console.log(human['name']);
    console.log(human['любимая игра']);
}

for (key in human) {
    console.log(key + " " + human[key]);
}

var date = new Date(2019, 6, 15);
console.log(date.getDay());
date.setMonth(5);
console.log(date.getDay());
console.log(date.toLocaleString('de'));


function f() {
    console.log("f");
}