function compute()
{    
    if (!principalIsValid()){
        return;
    }
    
    var principal = document.getElementById("principal").value;
    var rate =  document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years);
    
    var final_amt = parseFloat(principal) + interest;
    var result_out = "If you deposit <span class='spancolor'>"+principal+"</span>,<br/>at an interest rate of <span class='spancolor'>"+rate+"%</span>.<br />You will recieve an amount of <span class='spancolor'>"+ final_amt+"</span>,<br/> in the year <span class='spancolor'>"+year+"</span>."
    document.getElementById("result").innerHTML = result_out;

}

function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML=rateval + "%";

    
}

function principalIsValid(){
    var principal = document.getElementById("principal").value;
    
    if (principal.trim() == ""){
        alert("Enter a valid number.");
        document.getElementById("principal").focus()
        return false;
    }

    var checkVal = parseInt(principal);

    if (checkVal<=0){
        alert("Enter a positive number.");
        document.getElementById("principal").focus()
        return false;
    }

    
    return true;
}


        