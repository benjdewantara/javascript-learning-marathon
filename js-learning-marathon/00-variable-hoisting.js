console.log("====== 00-variable-hoisting.js ======");

(function () {

    console.log("somethingUndefined is " + somethingUndefined);

    var somethingUndefined = "asdf"; // the above console.log will say "somethingUndefined is undefined"

})();

(function () {
    // we declare `someVar` here
    var someVar = "monyet";

    (function () {
        console.log("someVar = " + someVar); // this should print "someVar = monyet", but it doesn't

        var someVar = "banteng";
    })();
})();


// function hoisting

// This will work eventhough `foo` declaration is later on
(function () {
    foo();

    function foo() {
        console.log("Function `foo` is printing...");
    }
})();

// This though won't work
// try uncommenting this, and notice you'll get an error

/* (function () {
    foob();

    var foob = function () {
        console.log("Will this function print something?");
    }
})(); */