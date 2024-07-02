const name = 'jeongjaehun';
const year = 1994;
const month = 8;
const date = 12;
const gender = 'M';

const zerocho = {
    name : name,
    year: year,
    month: month,
    date: date,
    gender: gender,
    obj: {
        score: 90
    },
    log: function(value) {
        console.log(value);
    },
    arr : [
        1,2,3,4,5,6
    ]
}
const info = {name, year, month, date, gender};
console.log(zerocho['name']);   //jeongjaehun
console.log(zerocho.name);      //jeongjaehun
console.log(info.name);         //jeongjaehun
console.log(info.name);         //jeongjaehun
zerocho.log('hihi');            //hihi
console.log(zerocho.arr[1]);    //2

function getValue(paramName) {
    return console.log(zerocho[paramName]);
}
getValue('name');               //jeongjaehun

console.log(zerocho.girlfriend ?? zerocho.name); //typeerror
console.log(zerocho.girlfriend); //undefined

const { obj, arr } = person;
console.log(obj.score); // 90
console.log(arr[3]); // 4