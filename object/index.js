let emp={
    ename:"vijay",
    empid:123
}
console.log(emp);
console.log(typeof emp);
console.log(emp.ename);
console.log(emp.empid);
emp.Place=("Pune");
console.log(emp);


let stu={
    name:"vijay",
    id:1234,
    splace:{
        street:"Pune",
        city:"Pune"


    }
}
console.log(stu);
stu.splace.pin=413203;
console.log(stu);
console.log(stu.splace.street);


function emp2(name,id){
    this.name=name;
    this.id=id;
}

let e1=new emp2("vijay",123)
    console.log(e1);

