let a = 0;

function fn1(arg1) {
    arg1 = 1;
    console.log(a, arg1)
}

fn1(a);

let b = {
    prop: 0
}


// fn2(b);


function fn3(arg2) {
    arg2 = {}
    console.log(b, arg2);
}

fn3(b);
