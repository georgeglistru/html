let a = [1];
a.push(2);
console.log(a);

const f = function () {
    console.log("f");
};
f();

const f2 =  (a, b=5) => {
    console.log(a + b);
};
f2(1,);

let arr = ["1", "2"].map((el, index) => {return el + "0"});
console.log(arr);

const age = 25;
const str = `Вася ${age} лет`;
console.log(str);

const arr2 = [1, 2, 3];
const privet = (x, y, z) => {console.log(x + ' ' + y + ' ' + z)};
privet(arr2[0], arr2[1], arr2[2]);

privet(...arr2);

const a3 = ['vasya', 'petya', 'kolya'];
for (var key in a3) {
    console.log(key);
}
console.log(a3);

for (var val of a3) {
    console.log(val);
}

let map = new Map();
map.set(() => {}, "hi");
let i = map.get(() => {});
console.log(i);

const set = new Set([6, 1,2, 4, 4, 5]);
console.log(set);

const promise = new Promise(function (resolve, reject) {
    let bool = confirm('Confirm');
    resolve('ok');

});

console.log(promise);

promise.then(() => {
    console.log("resolved");
});
