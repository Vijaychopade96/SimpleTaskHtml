
function talk(){
    var know={
        "whoare you":"Hello, Vijay",
        "How Are You":"Good",
        "What Can i Do for You":"Search JavaScript On Google >>Thanku Me Later",
        "Your Followers":
        "I Have To Famliy Members ",
        ok:"Thaku So much",
        Bye:"Okey! will Meet Soon",
    };
    var user=document.getElementById("userBox").value;
    document.getElementById("chatLog").innerHTML=user+"<br";

    if(user in know){
        document.getElementById("chatLog").innerHTML=know[user]+"<br>";
    }else{
        document.getElementById("chatLog").innerHTML="Sorry, I didn't understod <br>";
    }


}