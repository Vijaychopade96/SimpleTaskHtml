function calculate(){
    var principal= 0;
    var rate= 0;
    var year= 0;
    var SI= 0;
    principal=parseInt(document.getElementById("pr").value);
    year=parseInt(document.getElementById("yr").value);
    rate=parseInt(document.getElementById("roi").value);
    SI=(principal*year*rate)/100;
    document.getElementById("yes").innerHTML=SI;
}
