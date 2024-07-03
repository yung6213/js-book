/*console.log(1);
setTimeout(() => {
    console.log(2);
}, 2000);
console.log(3);

setTimeout(() => {  //4번쨰
    console.log(3);
}, 5000);
setTimeout(() => {  // 3번쨰
    console.log(2);
}, 3000);
setTimeout(() => { //2번쨰
    console.log(1);
}, 2000);
console.log('내가 먼저');*/ //1번쨰

const callback = () => {
    console.log('2초마다 실행됩니다');
    setTimeout(callback,2000); //callback 안에서 callback 실행하므로 무한 루프
}
setTimeout(callback, 2000); //callback 실행