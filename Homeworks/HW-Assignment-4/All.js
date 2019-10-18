const a=1, b=2; 

function test(){
    if (true){
        var a=100;
        let b=300;
        const c=300;
    }
    console.log(a);
    console.log(b);
    //console.log(c);
}

test();
