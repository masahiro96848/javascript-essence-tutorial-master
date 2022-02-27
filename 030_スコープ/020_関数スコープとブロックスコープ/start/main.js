// 関数スコープ
function a() {
    let b = 4;
    console.log(b);
}
a();


// ブロックスコープ
{
    const c = 1;
    const d = function d() {
        console.log('d is called')
    }
}
d()
console.log(c);