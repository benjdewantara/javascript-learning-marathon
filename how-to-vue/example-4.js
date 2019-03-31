console.log("====== example-4.js ======");


var vmEx4 = new Vue({
    el: "#example-4",
    data: {
        firstName: "Benyamin",
        lastName: "Manullang"
    },
    computed: {
        fullName: function () {
            return this.firstName + " " + this.lastName;
        }
    }
});