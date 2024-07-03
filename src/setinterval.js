const intervalId = setInterval(() => {
      console.log('2초마다 실행됩니다.');
}, 2000);

const interval2 = setInterval(() => {
    console.log('1초마다 실행');
}, 1000);

setTimeout(() => {
    clearInterval(intervalId);
}, 10000);

setTimeout(() => {
    clearInterval(interval2);
}, 3000);