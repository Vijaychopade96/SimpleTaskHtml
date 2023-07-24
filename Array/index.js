
let a=["String",10.5,true,null,undefined,function(){}];
console.log(a);


let b=[10,20,30,40,50];
console.log(b);

let c=a.push(60,70);
console.log(c);

let d=a.pop();
console.log(a);
console.log(d);

let f=a.shift();
console.log(a);
console.log(f);

let  aa=[1,2,3,4,5,6,7,8,9,10];
let  bb=aa.filter(m=>m>5);

console.log(bb);

let cc=aa.map((n)=>n*4);
console.log(cc);


let dd=aa.reduce((firstvalue,lastvalue)=>
{return firstvalue+lastvalue})

console.log(dd);





























