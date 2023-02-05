const os = require('os');
const fs = require('fs');

const genders = ['male', 'female'];
const maleNames = [];
const femaleNames = [];
const lastNames = [];

const randChoice = (arr) => {
  return (
    Math.random(arr).toString()
  );
};

const people = [];

for(i=0; i<20; i++){
  const onePeople = {
    gender: randChoice(genders),
    firstName: randChoice(maleNames),
    lastName: Math.random(),
    age: Math.random(),
  }
  people.push(onePeople);
  console.log(onePeople);
};

console.log('Platform: ', os.platform());
console.log('Arch: ', os.arch());
console.log('User login: ', os.userInfo().username);