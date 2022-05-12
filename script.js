var body = document.querySelector("body");
var btn = document.getElementById("submit_btn");
var chats =document.getElementById("chats");

var chat_text=
       `<div class="massage incoming">
            <p class="mb-0">hii  </p>
            <p class="time p-0 ps-5">11:00</p>
       
    </div>
    <div class="massage incoming">
        <p class="mb-0">Recruiters want to know your current salary</p>
        <p class="time p-0 ps-5">11:00</p>
       
    </div>
    <div class="massage incoming">
        <p class="mb-0">This would also help us recommend to you some 
            great opportunities!  </p>
        <p class="time p-0 ps-5">11:00</p>
       
    </div>
    <div class="massage incoming">
        <p class="mb-0">is your salary is 7 lakh and 0 thousands</p>
        <p class="time p-0 ps-5">11:00</p>
       
    </div>

    <!-- outgoing msgs -->
    <div class="massage outgoing">
        <p class="mb-0">Yes My CTC is 7 lakh</p>
        <p class="time p-0 ps-5">11:30</p>
       
    </div>
    <div class="massage outgoing">
        <p class="mb-0">Can you find batter opportunities for me
            So that i can learn and earn more.
        </p>
        <p class="time p-0 ps-5">11:30</p>
       
        </div>`;
var date = new Date();
var hours = date.getHours();
var min = date.getMinutes();
hours = (hours % 12) || 12; //get 12 format hours..

//    if it's less then 10
    if(hours<10){
        hours=`0${hours}`;
    }
    else{
        hours=hours
    }
    if(min<10){
        min=`0${min}`;
    }
    else{
        min=min;
    }
   
    // Get new outgoing msg..
    //msg send while user click on Send btn...
    btn.addEventListener("click",function(){

    if(document.getElementById("inpt").value ==""){
        console.log("blank-msg");
    }
    else{
        chat_text=chat_text+`<div class="massage outgoing">
                <p class="mb-0">${document.getElementById("inpt").value}</p>
                <p class="time p-0 ps-5">${hours}:${min}</p>
            
            </div>`; 
   }
    chats=document.getElementById("chats");
    chats.innerHTML=chat_text;
    document.getElementById("inpt").value="";

    });
    
    //msg send while user click on Enter key...
    var input = document.getElementById("inpt");
        input.addEventListener("keyup", function(event) {
            console.log(event);
            if (event.keyCode === 13) {
                event.preventDefault();
                document.getElementById("submit_btn").click();
            }
    });

    //While user click on Input-file button..
    document.getElementById("file-input").addEventListener("change", function() {
        
        if (document.getElementById("file-input").value) {
               alert("File uploaded")
            } else {
              alert("No file chosen, yet");
            }
    });

    // function ScrollDiv(){

        // if(document.getElementById('chats').scrollTop<(document.getElementById('chats').scrollHeight-document.getElementById('chats').offsetHeight)){-1
        //       document.getElementById('chats').scrollTop=document.getElementById('chats').scrollTop+1
        //       }
        // else {
        //     document.getElementById('chats').scrollTop=0;
        //}
        //}
     
    //  setInterval(ScrollDiv,50);
