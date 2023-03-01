function calculate() {
    // get user inputs
    principal = document.getElementById("principal").value;
    interest = document.getElementById("rate").value;
    term = document.getElementById("term").value;

    console.log(principal);
    // verify inputs
    if (principal == "" || interest == ""|| term == "") {
        window.alert("Please enter number values for all fields!");
        return;
    }

    if (isNaN(principal) || isNaN(interest) || isNaN(term)) {
        window.alert("Please enter number values for all fields!");
        return;
    }

    principal = parseFloat(principal);
    interest = parseFloat(interest);
    term = parseInt(term);
    if (principal < 0 || interest < 0 || term < 0) {
        window.alert("Please enter only positive numbers!");
        return;
    }

    if (interest > 1) {
        window.alert("Annual interest rate must be between 0 and 1");
        return;
    }
    
    // calculate outputs
    //if (term % 1 == 0) {
    //    term = Math.floor(term / 1)    // truncate term if float entered
    //}

    // zero handling
    if (interest == 0) {
        rateMonthly = 0;
        monthlies = principal / term;
        totPayment = principal;
        totInterest = 0;
    } else {
        rateMonthly = interest / 12;
        monthlies = ((principal * rateMonthly) / (1 - (1 / (1 + rateMonthly) ** term)));
        totPayment = monthlies * term;
        totInterest = totPayment - principal;
    }

    // write output
    document.getElementById("monthlies").innerHTML = "Monthly payment: $" + monthlies.toFixed(2);
    document.getElementById("totPayment").innerHTML = "Total payment: $" + totPayment.toFixed(2);
    document.getElementById("totInterest").innerHTML = "Total Interest Paid: $" + totInterest.toFixed(2);
}