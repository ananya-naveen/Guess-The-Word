player1_name=localStorage.getItem("Player_1:");
player2_name=localStorage.getItem("Player_2:");
player1_score=0;
player2_score=0;
document.getElementById("player1_name").innerHTML=player1_name+":";
document.getElementById("player2_name").innerHTML=player2_name+":";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="Question Turn: "+player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn: "+player2_name;

function send(){
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    console.log("Word in lower case is: "+word);
    charat_1=word.charAt(1);
    console.log(charat_1);
    length_divide_2=Math.floor(word.length/2);
    charat_2=word.charAt(length_divide_2);
    console.log(charat_2);
    length_minus_1=word.length-1;
    charat_3=word.charAt(length_minus_1);
    console.log(charat_3);
    remove_charat_1=word.replace(charat_1, "_");
    remove_charat_2=remove_charat_1.replace(charat_2, "_");
    remove_charat_3=remove_charat_2.replace(charat_3, "_");
    console.log(remove_charat_3);
    question_word="<h4 id='word_display'>Q. "+remove_charat_3+"</h4>";
    input_word="<br>Answer: <input id='input_check_box' type='text'>";
    check_button="<br><br><button class='btn btn-success' onclick='check()'>Check</button>";
    row=question_word+input_word+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}

question_turn="player1";
answer_turn="player2";

function check(){
    get_answer=document.getElementById("input_check_box").value;
    answer=get_answer.toLowerCase();
    console.log("answer in lower case: "+answer);
    
    if(answer==word){
        if(answer_turn=="player1"){
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
        else{
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
    }

    if(question_turn=="player1"){
        question_turn="player2";
        document.getElementById("player_question").innerHTML="Question Turn: "+player2_name;
    }
    else{
        question_turn="player1";
        document.getElementById("player_question").innerHTML="Question Turn: "+player1_name;
    }

    if(answer_turn=="player1"){
        answer_turn="player2";
        document.getElementById("player_answer").innerHTML="Answer Turn: "+player2_name;
    }
    else{
        answer_turn="player1";
        document.getElementById("player_answer").innerHTML="Answer Turn: "+player1_name;
    }

    document.getElementById("output").innerHTML="";
}