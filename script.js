function compute()
{
    var principal = new Number();
    principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    
    var interest = principal * years * rate /100; 
   
    var amount = new Number();
    amount = interest * 1 + principal * 1;
    
    var year = new Date().getFullYear()+parseInt(years);  


    document.getElementById("result").innerHTML="If you deposit \<b\>"+principal+"\<\/b\>,\<br\>at an interest rate of \<b\>"+rate+"%\<\/b\>\<br\>You will receive a total amount of \<b\>"+amount+"\<\/b\>,\<br\>in the year \<b\>"+year+"\<\/b\>\<br\>";
}

function updateRate() {
    var rateval = document.getElementById("rate").value; 
    document.getElementById("rate_val").innerText=rateval;
}

function abc() { 
    var entry = document.getElementById("principal").value; 
    if (entry < 1) {alert ("Please enter a positive amount")}
}
        