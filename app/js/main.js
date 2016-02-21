var Greeting = (function () {
    function Greeting() {
    }
    Greeting.prototype.sayHello = function () {
        console.log("hello, world");
    };
    return Greeting;
})();
