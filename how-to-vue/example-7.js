console.log("====== example-7.js ======");

var vmEx7 = new Vue({
    el: "#example-7",
    data: {
        newMemberName: "",
        memberNames: ["Agi", "Usman", "Okke"]
    },
    methods: {
        addNewMember: function () {
            if (this.newMemberName.length > 0) {
                this.memberNames.push(this.newMemberName);
                this.newMemberName = "";
            }
        }
    }
});