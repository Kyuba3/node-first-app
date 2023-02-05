const os = require('os');
const fs = require('fs');

const firstNames = {
  male: ['Adam', 'Włodek', 'Paweł', 'Robert'],
  female: ['Monika', 'Anastazja', 'Weronika', 'Edyta']
};

const genders = ['male', 'female'];
const lastNames = ['Włodarczyk', 'Kociołek', 'Potter', 'Grenger', 'Rivia', 'Morawiecki'];
const minAge = 18;
const maxAge = 78;

const generatePerson = function(){
  const randomGender = genders[Math.floor(Math.random() * genders.length)];
  const randomFirstName = firstNames[randomGender][Math.floor(Math.random() * firstNames[randomGender].length)];
  const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  const randomAge = Math.floor(Math.random() * (maxAge - minAge + 1)) + minAge;

  return {
    firstName: randomFirstName,
    lastName: randomLastName,
    age: randomAge,
    gender: randomGender
  };
};

const generatePeople = function(value) {
  const people = [];

  for (let i = 0; i < value; i++){
    people.push(generatePerson());
  }
  return people;
};

const people = generatePeople(20);
const data = JSON.stringify(people, null, 2);

fs.writeFile('people.json', data, (err) => {
  if (err) throw err;
  console.log('File has been saved!');
});

console.log('Platform: ', os.platform());
console.log('Arch: ', os.arch());
console.log('User login: ', os.userInfo().username);