const fs = require('fs');

const genders = ['m', 'f'];
const maleNames = ['Marek', 'Adam', 'Wojtek', 'Karol', 'Janek', 'Kacper'];
const femaleNames = ['Anna', 'Ola', 'Basia', 'Kasia', 'Monika', 'Edyta'];
const lastNames = ['Nowak', 'Kowal', 'Kubik', 'Szulc', 'Anderson', 'Pawlik'];
const ages = [23, 34, 41, 58, 16];

const randChoice = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
}

const people = [];

for(let i=0; i<20; i++) {
    let person = {};

    person.gender = randChoice(genders);

    if(person.gender === 'f') {
        person.name = randChoice(femaleNames);
    } else {
        person.name = randChoice(maleNames);
    }

    person.lastname = randChoice(lastNames);

    person.age = randChoice(ages);

    people.push(person);
};

const data = JSON.stringify(people);

fs.writeFile('outputfile.txt', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});