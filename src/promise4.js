const data = {
    setReject: true
}

const pm = (ms, data) => new Promise((resolve, reject) => {
    if(data.setReject) { reject('setReject is true');}
    setTimeout(resolve, ms);
});
const promise = pm(1000, data);
promise
    .then(() => {
        console.log('1초 후 실행됩니다');
    })
    .catch((err)=> {
        console.log(err);
        console.log('에러발생 시 실행됩니다.');
    })
    .finally((err) => {
        if(err) {
            console.log(err);
        }
        console.log('성공하든 실패하든 무조건 실행됨');
    });
    