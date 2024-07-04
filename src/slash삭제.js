const data = [
    {
        url: 'http://blala.net/img/skesgukh/'
    },
    {
        url: 'https://blabla.net/img/sdkgjsdkb'
    },
    {
        url: 'http://dsfkjn.net/sdlkkrughs/dfns'
    },
    {
        url: null
    },
];



// data를 돌면서 주어진 url 문자열에 '/'가 있으면 없애서 만든 새로운 data2를 생성 해 보시오.
let data2 = [];

data.forEach((d) =>{
    if (d.url !== null && d.url.charAt(d.url.length - 1) === '/'){    
        data2.push(d.url.slice(0, -1)); }
    else {
        data2.push(d.url);
    };
});
console.log('data2: ');
console.log(data2);

let str = data[0].url;
if(str !== null && str.charAt(str.length - 1) === '/') {
    str = str.slice(0, -1);
}
console.log('str: ');
console.log(str);
const data11 = data.map((v,i) => {
    if(v.url !== null && v.url.charAt(v.url.length - 1) === '/') {
        return {url : v.url.slice(0, -1)};
    } else {
        return {url : v.url};
    }
});
console.log('data11: ');
console.log(data11);
