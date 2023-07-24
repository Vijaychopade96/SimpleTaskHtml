// let body=document.body;
// let div=document.createElement("div");
// for(let i=0;i<3;i++){
// div.innerHTML=`<p>Hello</p> <img src="file:///C:/Users/VED/Pictures/5ce2c7b08f03fd2c15323f36_1558366128631.jpg "
// <a href="#">Click Me</a>`
// }

// body.appendChild(div);


// let a=document.getElementById("sec");
// a.style.display='flex';
// a.style.gap="200px";

// for(let i=0;i<3;i++)
// {
//     a.innerHTML+=
//    ` <div id='div1'>
//         <p>Name:Xyz</p>
//         <p>Desi:Click</p>
//         <p>Company:gh</p>
//         <img src="./">
//         <p style=" "></p>
        
//     </div>`
// }


//table
let body=document.body;
let table=document.createElement("table");
table.style.backgroundColor="";
table.style.border='2px solid black';

table.innerHTML=`<tr>
<th>Team</th>
<th>Captain</th>
</tr>
<tr>
<td>Mi</td>
<td>rohit</td>
</tr>
<tr>
<td>Rcb</td>
<td>Virat</td>
</tr>
<tr>
<td>Csk</td>
<td>Dhoni</td>
</tr>`
body.appendChild(table);