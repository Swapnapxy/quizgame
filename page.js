pn1=localStorage.getItem("player1");
pn2=localStorage.getItem("player2");

ply1_score= 0 ;
ply2_score= 0 ;

document.getElementById("ply1_name").innerHTML=pn1 + " : ";
document.getElementById("ply2_name").innerHTML=pn2 + " : ";

document.getElementById("ply1_score").innerHTML=ply1_score;
document.getElementById("ply2_score").innerHTML=ply2_score;

document.getElementById("ply1_que").innerHTML="Question Turn -"+pn1;
document.getElementById("ply1_ans").innerHTML="Answer Turn -"+pn2;

function send(){
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    number3=document.getElementById("number3").value;
    actual_answer = parseInt(number1)*parseInt(number2)+parseInt(number3);
    console.log(actual_answer);
    
    question_number="<h4>" + number1 +"X"+number2+"+"+number3+"</h4>";
    input_box="<br>Answer : <input type='text' id='input'>";
    check_button="<br><br> <button class='btn btn-info' onclick='check()'>check</button>";
    row= question_number + input_box + check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value="";
    document.getElementById("numner2").value="";
    document.getElementById("number3").value="";
    
    
}