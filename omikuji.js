let user_name;
let user_result;
user_name=prompt("お名前を教えて下さい。");

let rand=Math.floor(Math.random()*5);
if(rand==0) user_result="大吉";
if(rand==1) user_result="中吉";
if(rand==2) user_result="小吉";
if(rand==3) user_result="吉";
if(rand==4) user_result="凶";
if(user_name==""){
    user_name="名無し"
    user_result="凶"
}
document.getElementById("name").innerHTML=user_name;
document.getElementById("result").innerHTML=user_result;