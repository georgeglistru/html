function privet() {
    console.log('private')
}

var d = new Date();

for (var i = 0; i < 5000; i++) {
    privet();
}

var d2 = new Date();
console.log(d2 - d);