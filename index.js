function test(func) {
    func();
}

test(function() {
    console.log('Привет!');
});

console.log((function (a, b) {
    return a + b;
})(2, 3));

function sum1(a, b) {
    return a + b;
}

let sum2 = function(a, b) {
    return a + b;
};

let sum3 = (a,b) => a + b

let result = sum3(2, 4);

let y = x => x * x;

let showMessage = () => {
    let name = promt('Как тебя зовут?');
    console.log(`Привет, ` + name);
}

showMessage();

console.log(y(3));
