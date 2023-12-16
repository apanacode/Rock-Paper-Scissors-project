let computerscore =0;
let yourscore = 0;

const choices = document.querySelectorAll(".choice");

choices.forEach((choose)=>{
    
    choose.addEventListener("click",()=>{
        const chooseId = choose.getAttribute("id");
        console.log("choices was clicked");
    })
}

)
