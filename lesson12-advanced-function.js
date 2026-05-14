function greeting() {
  console.log("hello");
}
greeting();

// A function is also a value:
const num = 2;
const function1 = function () {
  console.log("Hello2");
};

console.log(function1);
