const setTimeoutPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(); 
    }, 2500);
});
setTimeoutPromise.then(() => {
    console.log('2.5초 후 실행됩니다');
});