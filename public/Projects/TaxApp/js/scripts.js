// Dokument ist bereit
$(document).ready(function () {

    /*
        == ANFORDERUNGEN ==
        1- Medicade (fertig), Federal (fertig), State (fertig), Social Security(fertig)
        2- Biweekly only (fertig)
        3- Single only (fertig)
        4- Static 2% pay increase every year for 5 years (fertig)
        5 - Hoffe dass es gar nicht schmerzlich werden sein. Bitte. (Warte auf es noch)

        == DATEN ==
        Social security in the US covers old age, survivors, and disability insurance. Employer and employee each contribute 6.2% of the personal income to social security (12.4% in total), as well as 1.45% each to Medicare (2.9% in total).
        
        The federal and state taxes should come from the tables using the method discussed during class. The Social Security tax rate is to be calculated at 6.20% and the Medicare at 1.45%.

        Your appplication should allow the user to enter their name, last name and address. Additionally, it should consider a pre-tax deduction into an employee retirement fund of $250 and a health care fee of $110.

        Finally, display five additional paychecks assuming that each paycheck is calculated with a incremental salary raise of 2.78% over the next five years.
    */

    //Abschnitt 1
    $('#helloText').hide();
    $('.inputContainer').hide();
    $('#sec2Btn').hide();
    $('#deductablesSection').hide();

    $('#continueBtn').click(function () {
        var firstName = $('#firstName').val();
        var lastName = $('#lastName').val();
        var helloText = $('#helloText');

        helloText.text('Hey there ' + firstName + ' ' + lastName + ', let\'s keep going!')

        //        $('.nameContainer').fadeOut(500);
        $(this).fadeOut(500);

        $('#helloText').fadeIn(500);
        $('#deductablesSection').fadeIn(500);
        $('.inputContainer').fadeIn(500);
        $('#sec2Btn').fadeIn(500);
    }); // End Section 1 Adjustments

    // Abschnitt 2
    $('#userInfo').hide();
    $('#viewProjectionsBtn').hide();
    $('#percentInc').hide();

    $('#sec2Btn').click(function () {
        $('#userInfo').show();
        $('#viewProjectionsBtn').show();
        $('#percentInc').show();
        $(this).fadeOut(500);

    }); // End Section 2 Adjustments

    // Abschnitt 3
    $('.projectionWrapper').hide();

    $('#viewProjectionsBtn').click(function () {
        $('.projectionWrapper').show();
    }); // End Section 3 Adjustments



    // Click versteckt sie 
    $('.hrly input').click(function () {
        $('#or').fadeOut(1000);
        $('.yrly').fadeOut(1000);
    });

    $('.yrly input').click(function () {
        $('#or').fadeOut(1000);
        $('.hrly').fadeOut(1000);
    });



    var hourlyPayRate, weeklyPay, biWeeklyPay, stateTax, yearlyIncome, finalPay;
    const year1Percent = .0276;
    const year2Percent = .0552;
    const year3Percent = .1104;
    const year4Percent = .2208;
    const year5Percent = .4416;

    $('#hourlyPayRate').keyup(function () {
        hourlyPayRate = parseFloat($('#hourlyPayRate').val());

        biWeeklyPay = parseFloat(updateBiWeekly(hourlyPayRate));
        socSecurity = parseFloat(updateSocialSecurity(hourlyPayRate));
        federalTax = parseFloat(updateFederal(hourlyPayRate));
        stateTax = parseFloat(updateState(hourlyPayRate));
        Medicare = parseFloat(updateMedicare(hourlyPayRate));
        finalPay = parseFloat(updateBiWeeklyAfterTaxes(hourlyPayRate));

    })

    $('#yearlyPayRate').keyup(function () {
        yearlyIncome = parseFloat($('#yearlyPayRate').val());
        hourlyPayRate = (yearlyIncome / 2080);

        biWeeklyPay = parseFloat(updateBiWeekly(hourlyPayRate));
        socSecurity = parseFloat(updateSocialSecurity(hourlyPayRate));
        federalTax = parseFloat(updateFederal(hourlyPayRate));
        stateTax = parseFloat(updateState(hourlyPayRate));
        Medicare = parseFloat(updateMedicare(hourlyPayRate));
        finalPay = parseFloat(updateBiWeeklyAfterTaxes(hourlyPayRate));

    });


    // DUDUCTABLE
    var deductable;
    $('#deductable').keyup(function () {
        deductable = parseInt($('#deductable').val());
        console.log(deductable);

        if (deductable == 1) {

        } else if (deductable == 2) {

        } else if (deductable == 3) {

        } else if (deductable == 4) {

        } else if (deductable == 5) {

        } else if (deductable == 6) {

        } else if (deductable == 7) {

        } else if (deductable == 8) {

        } else if (deductable == 9) {

        } else {

        }
    });


    // UPDATE BI-WEEKLY AFTER TAXXES
    function updateBiWeeklyAfterTaxes(x) {

        biWeeklyPay = parseFloat(updateBiWeekly(x));
        socSecurity = parseFloat(updateSocialSecurity(x));
        federalTax = parseFloat(updateFederal(x));
        stateTax = parseFloat(updateState(x));
        Medicare = parseFloat(updateMedicare(x));

        finalPay = biWeeklyPay - (stateTax + federalTax + socSecurity + Medicare);

        $('#finalCheck').text('$' + finalPay);

        $('#year1FinalPay').text('$' + (finalPay + (finalPay * .0276)).toFixed(2));
        $('#year2FinalPay').text('$' + (finalPay + (finalPay * .0552)).toFixed(2));
        $('#year3FinalPay').text('$' + (finalPay + (finalPay * .1104)).toFixed(2));
        $('#year4FinalPay').text('$' + (finalPay + (finalPay * .2208)).toFixed(2));
        $('#year5FinalPay').text('$' + (finalPay + (finalPay * .4416)).toFixed(2));


        return finalPay;
    }


    // UPDATE BI-WEEKLY PAY
    function updateBiWeekly(x) {
        var biWeeklyPayRate = ((x * 40) * 2).toFixed(2);
        $('#biWeeklyPay').text('$' + biWeeklyPayRate);

        return biWeeklyPayRate;
    }


    // UPDATE Medicare
    function updateMedicare(x) {
        var pay = ((x * 40) * 2).toFixed(2);
        var tempPercent = 0;

        // Gets basic medicare percentage for current paycheck
        tempPercent = 0.0145;
        Medicare = (pay - (pay - (pay * tempPercent))).toFixed(2);
        $('#medicarePay').text('$' + Medicare);

        var adjustedMedicare1 = +Medicare + (Medicare * year1Percent);
        var adjustedMedicare2 = +Medicare + (Medicare * year2Percent);
        var adjustedMedicare3 = +Medicare + (Medicare * year3Percent);
        var adjustedMedicare4 = +Medicare + (Medicare * year4Percent);
        var adjustedMedicare5 = +Medicare + (Medicare * year5Percent);


        $('#year1Medicare').text('$' + parseFloat(adjustedMedicare1).toFixed(2));
        $('#year2Medicare').text('$' + parseFloat(adjustedMedicare2).toFixed(2));
        $('#year3Medicare').text('$' + parseFloat(adjustedMedicare3).toFixed(2));
        $('#year4Medicare').text('$' + parseFloat(adjustedMedicare4).toFixed(2));
        $('#year5Medicare').text('$' + parseFloat(adjustedMedicare5).toFixed(2));

        return Medicare;
    } // End updateSocialSecurity function


    // UPDATE SOCIAL SECURITY
    function updateSocialSecurity(x) {
        var pay = ((x * 40) * 2).toFixed(2);
        var tempPercent = 0;

        if (pay >= 1 && pay <= 128400) {
            tempPercent = 0.062;
            pay = (pay - (pay - (pay * tempPercent))).toFixed(2);
            $('#socSecurity').text('$' + pay);

            var adjustedSocSec1 = +pay + (pay * year1Percent);
            var adjustedSocSec2 = +pay + (pay * year2Percent);
            var adjustedSocSec3 = +pay + (pay * year3Percent);
            var adjustedSocSec4 = +pay + (pay * year4Percent);
            var adjustedSocSec5 = +pay + (pay * year5Percent);

            $('#year1SocSec').text('$' + parseFloat(adjustedSocSec1).toFixed(2));
            $('#year2SocSec').text('$' + parseFloat(adjustedSocSec2).toFixed(2));
            $('#year3SocSec').text('$' + parseFloat(adjustedSocSec3).toFixed(2));
            $('#year4SocSec').text('$' + parseFloat(adjustedSocSec4).toFixed(2));
            $('#year5SocSec').text('$' + parseFloat(adjustedSocSec5).toFixed(2));

            return pay;

        } else {
            tempPercent = .062;
            pay = pay - 128400;
            pay = (pay - (pay * tempPercent)).toFixed(2);
            $('#socSecurity').text('$' + pay);

            var adjustedSocSec1 = +pay + (pay * year1Percent);
            var adjustedSocSec2 = +pay + (pay * year2Percent);
            var adjustedSocSec3 = +pay + (pay * year3Percent);
            var adjustedSocSec4 = +pay + (pay * year4Percent);
            var adjustedSocSec5 = +pay + (pay * year5Percent);

            $('#year1SocSec').text('$' + parseFloat(adjustedSocSec1).toFixed(2));
            $('#year2SocSec').text('$' + parseFloat(adjustedSocSec2).toFixed(2));
            $('#year3SocSec').text('$' + parseFloat(adjustedSocSec3).toFixed(2));
            $('#year4SocSec').text('$' + parseFloat(adjustedSocSec4).toFixed(2));
            $('#year5SocSec').text('$' + parseFloat(adjustedSocSec5).toFixed(2));

            return pay;
        }

    } // End updateSocialSecurity function


    // FEDERAL TAX
    function updateFederal(x) { //How much they take out
        var pay = ((x * 40) * 2).toFixed(2);
        var tempDollar = 0;
        var tempPercent = 0;

        if (pay < 142) {
            console.log('Wir sind gefickt, Brudi');
            // Shit's broken
        } else if (pay >= 142 && pay < 509) {
            tempDollar = 0;
            tempPercent = .1;
            pay = (pay - (pay - ((pay * tempPercent) - tempDollar))).toFixed(2);
            $('#federalPay').text('$' + pay);

            var adjustedFederal1 = +pay + (pay * year1Percent);
            var adjustedFederal2 = +pay + (pay * year2Percent);
            var adjustedFederal3 = +pay + (pay * year3Percent);
            var adjustedFederal4 = +pay + (pay * year4Percent);
            var adjustedFederal5 = +pay + (pay * year5Percent);

            $('#year1FedTax').text('$' + parseFloat(adjustedFederal1).toFixed(2));
            $('#year2FedTax').text('$' + parseFloat(adjustedFederal2).toFixed(2));
            $('#year3FedTax').text('$' + parseFloat(adjustedFederal3).toFixed(2));
            $('#year4FedTax').text('$' + parseFloat(adjustedFederal4).toFixed(2));
            $('#year5FedTax').text('$' + parseFloat(adjustedFederal5).toFixed(2));

            return pay;

        } else if (pay >= 509 && pay < 1631) {
            tempDollar = 36.70;
            tempPercent = .12;
            pay = (pay - (pay - ((pay * tempPercent) - tempDollar))).toFixed(2);
            $('#federalPay').text('$' + pay);

            var adjustedFederal1 = +pay + (pay * year1Percent);
            var adjustedFederal2 = +pay + (pay * year2Percent);
            var adjustedFederal3 = +pay + (pay * year3Percent);
            var adjustedFederal4 = +pay + (pay * year4Percent);
            var adjustedFederal5 = +pay + (pay * year5Percent);

            $('#year1FedTax').text('$' + parseFloat(adjustedFederal1).toFixed(2));
            $('#year2FedTax').text('$' + parseFloat(adjustedFederal2).toFixed(2));
            $('#year3FedTax').text('$' + parseFloat(adjustedFederal3).toFixed(2));
            $('#year4FedTax').text('$' + parseFloat(adjustedFederal4).toFixed(2));
            $('#year5FedTax').text('$' + parseFloat(adjustedFederal5).toFixed(2));

            return pay;

        } else if (pay >= 1631 && pay < 3315) {
            tempDollar = 171.34;
            tempPercent = .22;
            pay = (pay - (pay - ((pay * tempPercent) - tempDollar))).toFixed(2);
            $('#federalPay').text('$' + pay);

            var adjustedFederal1 = +pay + (pay * year1Percent);
            var adjustedFederal2 = +pay + (pay * year2Percent);
            var adjustedFederal3 = +pay + (pay * year3Percent);
            var adjustedFederal4 = +pay + (pay * year4Percent);
            var adjustedFederal5 = +pay + (pay * year5Percent);

            $('#year1FedTax').text('$' + parseFloat(adjustedFederal1).toFixed(2));
            $('#year2FedTax').text('$' + parseFloat(adjustedFederal2).toFixed(2));
            $('#year3FedTax').text('$' + parseFloat(adjustedFederal3).toFixed(2));
            $('#year4FedTax').text('$' + parseFloat(adjustedFederal4).toFixed(2));
            $('#year5FedTax').text('$' + parseFloat(adjustedFederal5).toFixed(2));

            return pay;

        } else if (pay >= 3315 && pay < 6200) {
            tempDollar = 541.82;
            tempPercent = .24;
            pay = (pay - (pay - ((pay * tempPercent) - tempDollar))).toFixed(2);
            $('#federalPay').text('$' + pay);

            var adjustedFederal1 = +pay + (pay * year1Percent);
            var adjustedFederal2 = +pay + (pay * year2Percent);
            var adjustedFederal3 = +pay + (pay * year3Percent);
            var adjustedFederal4 = +pay + (pay * year4Percent);
            var adjustedFederal5 = +pay + (pay * year5Percent);

            $('#year1FedTax').text('$' + parseFloat(adjustedFederal1).toFixed(2));
            $('#year2FedTax').text('$' + parseFloat(adjustedFederal2).toFixed(2));
            $('#year3FedTax').text('$' + parseFloat(adjustedFederal3).toFixed(2));
            $('#year4FedTax').text('$' + parseFloat(adjustedFederal4).toFixed(2));
            $('#year5FedTax').text('$' + parseFloat(adjustedFederal5).toFixed(2));

            return pay;

        } else if (pay >= 6200 && pay < 7835) {
            tempDollar = 1234.22;
            tempPercent = .32;
            pay = (pay - (pay - ((pay * tempPercent) - tempDollar))).toFixed(2);
            $('#federalPay').text('$' + pay);

            var adjustedFederal1 = +pay + (pay * year1Percent);
            var adjustedFederal2 = +pay + (pay * year2Percent);
            var adjustedFederal3 = +pay + (pay * year3Percent);
            var adjustedFederal4 = +pay + (pay * year4Percent);
            var adjustedFederal5 = +pay + (pay * year5Percent);

            $('#year1FedTax').text('$' + parseFloat(adjustedFederal1).toFixed(2));
            $('#year2FedTax').text('$' + parseFloat(adjustedFederal2).toFixed(2));
            $('#year3FedTax').text('$' + parseFloat(adjustedFederal3).toFixed(2));
            $('#year4FedTax').text('$' + parseFloat(adjustedFederal4).toFixed(2));
            $('#year5FedTax').text('$' + parseFloat(adjustedFederal5).toFixed(2));

            return pay;

        } else if (pay >= 7835 && pay < 19373) {
            tempDollar = 1757.42;
            tempPercent = .35;
            pay = (pay - (pay - ((pay * tempPercent) - tempDollar))).toFixed(2);
            $('#federalPay').text('$' + pay);

            var adjustedFederal1 = +pay + (pay * year1Percent);
            var adjustedFederal2 = +pay + (pay * year2Percent);
            var adjustedFederal3 = +pay + (pay * year3Percent);
            var adjustedFederal4 = +pay + (pay * year4Percent);
            var adjustedFederal5 = +pay + (pay * year5Percent);

            $('#year1FedTax').text('$' + parseFloat(adjustedFederal1).toFixed(2));
            $('#year2FedTax').text('$' + parseFloat(adjustedFederal2).toFixed(2));
            $('#year3FedTax').text('$' + parseFloat(adjustedFederal3).toFixed(2));
            $('#year4FedTax').text('$' + parseFloat(adjustedFederal4).toFixed(2));
            $('#year5FedTax').text('$' + parseFloat(adjustedFederal5).toFixed(2));

            return pay;

        } else {
            tempDollar = 5795.72;
            tempPercent = .37;
            pay = (pay - (pay - ((pay * tempPercent) - tempDollar))).toFixed(2);
            $('#federalPay').text('$' + pay);

            var adjustedFederal1 = +pay + (pay * year1Percent);
            var adjustedFederal2 = +pay + (pay * year2Percent);
            var adjustedFederal3 = +pay + (pay * year3Percent);
            var adjustedFederal4 = +pay + (pay * year4Percent);
            var adjustedFederal5 = +pay + (pay * year5Percent);

            $('#year1FedTax').text('$' + parseFloat(adjustedFederal1).toFixed(2));
            $('#year2FedTax').text('$' + parseFloat(adjustedFederal2).toFixed(2));
            $('#year3FedTax').text('$' + parseFloat(adjustedFederal3).toFixed(2));
            $('#year4FedTax').text('$' + parseFloat(adjustedFederal4).toFixed(2));
            $('#year5FedTax').text('$' + parseFloat(adjustedFederal5).toFixed(2));

            return pay;
        }
    }


    // STATE TAX
    function updateState(x) { //How much they take out
        var pay = ((x * 40) * 2).toFixed(2);
        var tempDollar = 0;
        var tempPercent = 0;

        if (pay >= 0 && pay <= 8499) {
            tempDollar = 0;
            tempPercent = .04;
            pay = (pay - (pay - ((pay * tempPercent) - tempDollar))).toFixed(2);
            $('#statePay').text('$' + pay);

            var adjustedState1 = +pay + (pay * year1Percent);
            var adjustedState2 = +pay + (pay * year2Percent);
            var adjustedState3 = +pay + (pay * year3Percent);
            var adjustedState4 = +pay + (pay * year4Percent);
            var adjustedState5 = +pay + (pay * year5Percent);

            $('#year1StateTax').text('$' + parseFloat(adjustedState1).toFixed(2));
            $('#year2StateTax').text('$' + parseFloat(adjustedState2).toFixed(2));
            $('#year3StateTax').text('$' + parseFloat(adjustedState3).toFixed(2));
            $('#year4StateTax').text('$' + parseFloat(adjustedState4).toFixed(2));
            $('#year5StateTax').text('$' + parseFloat(adjustedState5).toFixed(2));

            return pay;

        } else if (pay >= 8500 && pay < 11699) {
            tempDollar = 340;
            tempPercent = .045;
            pay = (pay - (pay - ((pay * tempPercent) - tempDollar))).toFixed(2);
            $('#statePay').text('$' + pay);

            var adjustedState1 = +pay + (pay * year1Percent);
            var adjustedState2 = +pay + (pay * year2Percent);
            var adjustedState3 = +pay + (pay * year3Percent);
            var adjustedState4 = +pay + (pay * year4Percent);
            var adjustedState5 = +pay + (pay * year5Percent);

            $('#year1StateTax').text('$' + parseFloat(adjustedState1).toFixed(2));
            $('#year2StateTax').text('$' + parseFloat(adjustedState2).toFixed(2));
            $('#year3StateTax').text('$' + parseFloat(adjustedState3).toFixed(2));
            $('#year4StateTax').text('$' + parseFloat(adjustedState4).toFixed(2));
            $('#year5StateTax').text('$' + parseFloat(adjustedState5).toFixed(2));

            return pay;

        } else if (pay >= 11700 && pay < 13899) {
            tempDollar = 484;
            tempPercent = .0525;
            pay = (pay - (pay - ((pay * tempPercent) - tempDollar))).toFixed(2);
            $('#statePay').text('$' + pay);

            var adjustedState1 = +pay + (pay * year1Percent);
            var adjustedState2 = +pay + (pay * year2Percent);
            var adjustedState3 = +pay + (pay * year3Percent);
            var adjustedState4 = +pay + (pay * year4Percent);
            var adjustedState5 = +pay + (pay * year5Percent);

            $('#year1StateTax').text('$' + parseFloat(adjustedState1).toFixed(2));
            $('#year2StateTax').text('$' + parseFloat(adjustedState2).toFixed(2));
            $('#year3StateTax').text('$' + parseFloat(adjustedState3).toFixed(2));
            $('#year4StateTax').text('$' + parseFloat(adjustedState4).toFixed(2));
            $('#year5StateTax').text('$' + parseFloat(adjustedState5).toFixed(2));

            return pay;

        } else if (pay >= 13900 && pay < 21399) {
            tempDollar = 599.50;
            tempPercent = .059;
            pay = (pay - (pay - ((pay * tempPercent) - tempDollar))).toFixed(2);
            $('#statePay').text('$' + pay);

            var adjustedState1 = +pay + (pay * year1Percent);
            var adjustedState2 = +pay + (pay * year2Percent);
            var adjustedState3 = +pay + (pay * year3Percent);
            var adjustedState4 = +pay + (pay * year4Percent);
            var adjustedState5 = +pay + (pay * year5Percent);

            $('#year1StateTax').text('$' + parseFloat(adjustedState1).toFixed(2));
            $('#year2StateTax').text('$' + parseFloat(adjustedState2).toFixed(2));
            $('#year3StateTax').text('$' + parseFloat(adjustedState3).toFixed(2));
            $('#year4StateTax').text('$' + parseFloat(adjustedState4).toFixed(2));
            $('#year5StateTax').text('$' + parseFloat(adjustedState5).toFixed(2));

            return pay;

        } else if (pay >= 21400 && pay < 80649) {
            tempDollar = 1042;
            tempPercent = .0633;
            pay = (pay - (pay - ((pay * tempPercent) - tempDollar))).toFixed(2);
            $('#statePay').text('$' + pay);

            var adjustedState1 = +pay + (pay * year1Percent);
            var adjustedState2 = +pay + (pay * year2Percent);
            var adjustedState3 = +pay + (pay * year3Percent);
            var adjustedState4 = +pay + (pay * year4Percent);
            var adjustedState5 = +pay + (pay * year5Percent);

            $('#year1StateTax').text('$' + parseFloat(adjustedState1).toFixed(2));
            $('#year2StateTax').text('$' + parseFloat(adjustedState2).toFixed(2));
            $('#year3StateTax').text('$' + parseFloat(adjustedState3).toFixed(2));
            $('#year4StateTax').text('$' + parseFloat(adjustedState4).toFixed(2));
            $('#year5StateTax').text('$' + parseFloat(adjustedState5).toFixed(2));

            return pay;

        } else if (pay >= 80650 && pay < 215399) {
            tempDollar = 4792.53;
            tempPercent = .0657;
            pay = (pay - (pay - ((pay * tempPercent) - tempDollar))).toFixed(2);
            $('#statePay').text('$' + pay);

            var adjustedState1 = +pay + (pay * year1Percent);
            var adjustedState2 = +pay + (pay * year2Percent);
            var adjustedState3 = +pay + (pay * year3Percent);
            var adjustedState4 = +pay + (pay * year4Percent);
            var adjustedState5 = +pay + (pay * year5Percent);


            $('#year1StateTax').text('$' + parseFloat(adjustedState1).toFixed(2));
            $('#year2StateTax').text('$' + parseFloat(adjustedState2).toFixed(2));
            $('#year3StateTax').text('$' + parseFloat(adjustedState3).toFixed(2));
            $('#year4StateTax').text('$' + parseFloat(adjustedState4).toFixed(2));
            $('#year5StateTax').text('$' + parseFloat(adjustedState5).toFixed(2));

            return pay;

        } else if (pay >= 215400 && pay < 1077549) {
            tempDollar = 13645;
            tempPercent = .0685;
            pay = (pay - (pay - ((pay * tempPercent) - tempDollar))).toFixed(2);
            $('#statePay').text('$' + pay);

            var adjustedState1 = +pay + (pay * year1Percent);
            var adjustedState2 = +pay + (pay * year2Percent);
            var adjustedState3 = +pay + (pay * year3Percent);
            var adjustedState4 = +pay + (pay * year4Percent);
            var adjustedState5 = +pay + (pay * year5Percent);


            $('#year1StateTax').text('$' + parseFloat(adjustedState1).toFixed(2));
            $('#year2StateTax').text('$' + parseFloat(adjustedState2).toFixed(2));
            $('#year3StateTax').text('$' + parseFloat(adjustedState3).toFixed(2));
            $('#year4StateTax').text('$' + parseFloat(adjustedState4).toFixed(2));
            $('#year5StateTax').text('$' + parseFloat(adjustedState5).toFixed(2));

            return pay;

        } else {
            tempDollar = 72702.88;
            tempPercent = .0882;
            pay = (pay - (pay - ((pay * tempPercent) - tempDollar))).toFixed(2);
            $('#statePay').text('$' + pay);

            var adjustedState1 = +pay + (pay * year1Percent);
            var adjustedState2 = +pay + (pay * year2Percent);
            var adjustedState3 = +pay + (pay * year3Percent);
            var adjustedState4 = +pay + (pay * year4Percent);
            var adjustedState5 = +pay + (pay * year5Percent);


            $('#year1StateTax').text('$' + parseFloat(adjustedState1).toFixed(2));
            $('#year2StateTax').text('$' + parseFloat(adjustedState2).toFixed(2));
            $('#year3StateTax').text('$' + parseFloat(adjustedState3).toFixed(2));
            $('#year4StateTax').text('$' + parseFloat(adjustedState4).toFixed(2));
            $('#year5StateTax').text('$' + parseFloat(adjustedState5).toFixed(2));

            return pay;

        }
    } // End updateState() function

}); // end doc ready