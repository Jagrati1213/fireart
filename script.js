
var btn = document.getElementById("submit_btn");
var chats =document.getElementById("chats");
console.log(date)
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
console.log(hours,min);    


    // Get new outgoing msg..
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