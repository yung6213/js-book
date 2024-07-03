const data = {
    id: 1,
    score: 40
}

const setTimeoutPromise = (ms, data) => new Promise((resolve, reject) => {
    if(data.score <= 40) {
        err = '실패';
        reject(err);
    }
    setTimeout(resolve, ms);
});
const promise = setTimeoutPromise(1000, data);
console.log('다른 일을 하다가');
console.log('필요할 때');
console.log('then을 호출해 보세요.');
promise.then(() => {
    console.log('1초 뒤에 실행됩니다.');
});
promise.catch((err) => {
    console.log(err);
});