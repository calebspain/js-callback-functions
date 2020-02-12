/**** EXAMPLE #1 ****/

let x = function () {
    console.log("I am called from inside the function");
};

let y = function (callback) {
    console.log("do something");
    callback();
};

y(x);


/**** EXAMPLE #2 ****/

let add = function (a, b) {
    return a + b;
};

let multiply = function (a, b) {
    return a * b;
};

let doWhatever = function (a, b) {
    console.log(`Here are your two numbers back: ${a}, ${b}`);
};

let calc = function (num1, num2, callback) {
    if (typeof callback === "function") {
        return callback(num1, num2);
    }
};

console.log(calc(2, 5, function (a, b) {
    return a - b;
}));

/**** EXAMPLE #3 ****/

var myArr = [
    {
        num: 5,
        str: "apple"
    },
    {
        num: 7,
        str: "cabbage"
    },
    {
        num: 1,
        str: "ban"
    }
];

myArr.sort(function (val1, val2) {
    if (val1.num < val2.num) {
        return -1;
    } else {
        return 1;
    }
});

console.log(myArr);