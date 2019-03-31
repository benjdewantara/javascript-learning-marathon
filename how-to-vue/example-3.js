console.log("====== example-3.js ======");

var vmEx3 = new Vue({
    el: "#example-3",
    data: {
        message: "this is in lowercase"
    },
    computed: {
        all_uppercase: function () {
            let str = this.message;
            return str.toUpperCase();
        }
    }
});