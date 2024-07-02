const name = '조현영';
const year = 1994;
const month = 8;
const date = 12;
const gender = 'M';

const zerocho = {
    name : 'jaehunjeong',
    year:1994,
    month: 8,
    date: 12,
    gender: 'M'
}
const info = {name, year, month, date, gender};
console.log(info);
zerocho.married = false;
console.log(zerocho.married);
console.log(zerocho['married']);