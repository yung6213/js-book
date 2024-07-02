const func = (msg) => {
    return () => {
        console.log(msg);
    }
}
func('hihi')();
const aa = func('hihi');
aa();