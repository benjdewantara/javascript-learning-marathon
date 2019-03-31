console.log("====== 04-using-fetch ======")


var fetchingUsers = fetch("https://jsonplaceholder.typicode.com/users")
    .then(function (resp) {
        console.log("Fetching data from \"https://jsonplaceholder.typicode.com/users\"")


        // `resp` is a `Response` object

        console.log("resp is ");
        console.log(resp);

        return resp.json();
    }).then(function (resp_json) {
        // `resp_json` is the JSON object

        console.log("resp_json is ");
        console.log(resp_json);
    });



var fetchingDataFromSubdir = fetch("./03-import-export-subdir/subdir/data/data-persons.json")
    .then(function (resp) {
        console.log("Can we fetch from subdirectories?");
        console.log("Fetching data from \"./03-import-export-subdir\"");


        console.log("resp is");
        console.log(resp);

        return resp.json();
    }).then(function (resp_json) {
        console.log("resp_json is ");
        console.log(resp_json);
    });