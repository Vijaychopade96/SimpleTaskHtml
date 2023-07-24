console.log(window);
console.log(this);
console.log(window.document);
console.log(document.title);
console.log(window.location);
console.log(window.location.href);
  console.log(window.screen.availHeight);
console.log(window.screen.availWidth);
console.log(document.URL);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);



let emp={
    Ename:"Vijay",
    Eid:123,
    EPlace:"Pune"
}
console.table(emp);

console.error("I AM Error");
console.warn("Warning");

let a=document.getElementById("p1");
a.style.backgroundColor="red";
a.style.fontSize="100px";
console.log(a)


let b=document.getElementsByClassName("p2");
console.log(b);
console.log(typeof b);
console.log(Array.isArray(b));

//will get tomorrow TagName
let c=document.getElementsByTagName("h1");
c.style.fontSize="10px";
console.log(c);



//Button

let d=document.querySelector("button");
d.style.backgroundColor= "red";
console.log(d);

