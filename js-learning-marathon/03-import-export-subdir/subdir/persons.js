import * as personData from './data/data-persons.json';

function persons_PrintPeople(people) {
    people.forEach(elm => {
        console.log("elm is " + elm);
    });
}

function persons_PrintName(people) {
    people.forEach(item => console.log("item[0] = " +
        item[0]));
}

console.log("persons.js: personData is ");
console.log(personData);

// export default {
//     personData
// }

export default {
    // personData,
    persons_PrintName,
    persons_PrintPeople
}