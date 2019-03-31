console.log('====== 01-understanding-javascript-class.js ======');

// This is called object literals
// from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types

(function () {
    var thisIsObjLiteral = {
        name: 'Benyamin Manullang',
        height_cm: 170,
        weight_kg: 61,
        shoutName: function () {
            console.log('My name is ' + this.name);
        },
        isHandsome: true
    };

    console.log("thisIsObjLiteral specification is as follows");
    console.log(thisIsObjLiteral);

    console.log('thisIsObjLiteral.height_cm is ' + thisIsObjLiteral.height_cm);

    if (thisIsObjLiteral.isHandsome) {
        console.log(thisIsObjLiteral.name + ' is handsome indeed');
    }

    thisIsObjLiteral.shoutName();

    console.log('thisIsObjLiteral["weight_kg"] = ' + thisIsObjLiteral['weight_kg']);
})();


// A more intuitive approach to make an object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#Objects_and_Properties

(function () {
    var myself = new Object();

    myself.name = "Benyamin Manullang";
    myself.height_cm = 170;
    myself.weight_kg = 61;
    myself.shoutName = function () {
        console.log("My name is " + this.name);
    };
    myself.isHandsome = true;

    console.log("myself specification is as follows");
    console.log(myself);

})();





// Another way

(function () {
    function BenyaminManullang() {
        this.name = "Benyamin Manullang";
        this.age = 25;
        this.weight_kg = 61;
        this.height_cm = 170;
        this.shoutName = function () {
            console.log("My name is " + this.name + "!");
        }
    }

    var ben = new BenyaminManullang();

    console.log("ben specification is as follows");
    console.log(ben);

})();


// using class keyword

(function () {
    class BenyaminManullang {
        constructor() {
            this.name = "Benyamin Manullang";
            this.age = 25;
            this.weight_kg = 61;
            this.height_cm = 170;
            this.shoutName = function () {
                console.log("My name is " + this.name + "!");
            };
        }
    };

    var myselfUsingClassKeyword = new BenyaminManullang();

    console.log("myselfUsingClassKeyword specification is");
    console.log(myselfUsingClassKeyword);

    console.log("Calling myselfUsingClassKeyword.shoutName method..");
    myselfUsingClassKeyword.shoutName();

})();


// using Object.keys

(function () {
    class BenyaminManullang {
        constructor() {
            this.name = "Benyamin Manullang";
            this.age = 25;
            this.weight_kg = 61;
            this.height_cm = 170;
            this.shoutName = function () {
                console.log("My name is " + this.name + "!");
            };
        }
    };

    var myself = new BenyaminManullang();

    console.log("Let's show an array of variable/method names that we create in class BenyaminManullang using Object.keys method");
    console.log(Object.keys(myself));

})();


// using a constructor function
(function () {
    function Person(name, age, height_cm, weight_kg) {
        this.name = name;
        this.age = age;
        this.height_cm = height_cm;
        this.weight_kg = weight_kg;
    }

    var benFDM = new Person("Benyamin Manullang", 25, 170, 61);

    console.log("benFDM specification is ");
    console.log(benFDM);

    console.log("Person is ");
    console.log(Person);

    console.log("Person.prototype is ");
    console.log(Person.prototype);

})();