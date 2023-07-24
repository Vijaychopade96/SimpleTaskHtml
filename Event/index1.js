function darkmode(){
    document.body.style.backgroundColor="black";
    document.body.style.font.backgroundColor="white";
    

}
function lightmode(){
    document.body.style.backgroundColor="skyblue";
    document.body.style.font.backgroundColor="black";
    

}
// function randomcolor(){
//     document.body.style.backgroundColor="red";
// }


function m1(){
    let arr=[0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
    let randomColor="#";

    for(let i=0;i<6;i++ ){
        let index=Math.floor(Math.random()*16);
        randomColor+=arr[index];
    

    }
    console.log(randomColor);
    document.getElementsByTagName("body")[0].style.backgroundColor=randomColor
}