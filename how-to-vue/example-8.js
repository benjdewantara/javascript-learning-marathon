console.log("====== example-8.js ======");

Vue.component("member-name-entry", {
    template: "#member-name-entry",
    props: ["name"]
});

var vmEx8 = new Vue({
    el: "#example-8",
    data: {
        newMemberName: "",
        memberNames: ["Agi", "Usman", "Okke"]
    },
    computed: {
        keyedMemberNames: function () {
            var keyed = [];
            for (var indx = 0; indx < this.memberNames.length; indx++) {
                keyed.push({
                    id: indx,
                    name: this.memberNames[indx]
                });
            }

            return keyed;
        }
    },
    methods: {
        addNewMember: function () {
            if (this.newMemberName.length > 0) {
                this.memberNames.push(this.newMemberName);
                this.newMemberName = "";
            }
        },
        removeNameEntry: function (indx) {
            console.log("received arg indx = " + indx);
            this.memberNames.splice(indx, 1);
        },
        echoSomething: function () {
            console.log("Echoing something..");
        }
    }
});