//---------------------------------------------
//related to Total Deck Size
$("input[id*=numCardsForCity]").each(function () {
    $(this).blur(function () {
        //calculate and update total num in deck
        
        //calculate
        newTotal = calculateTotalDeckSize();

        //update
        $('#totalDeckSize').text(newTotal);
        
    })
})

function calculateTotalDeckSize() {
    var total = 0;
    $("input[id*=numCardsForCity]").each(function () {
        total += (parseInt($(this)[0].value) || 0);
    })

    return total;
}
//---------------------------------------------
//Handle the events
$("input[id*=numSoFar]").each(function () {
    $(this).blur(function () {
        
        var numRows = $('#numRows')[0].value;

        //calculate total Known
        totalKnown = calculateTotalSeenThisGame();
        $('#totalKnownCards').text(totalKnown);

        //calculate known left
        left = calculateKnownCardsLeft();
        $('#knownCardsLeft').text(left);

        //calculate final prob
        calculateAllProbabilities();
        
    })
})
$("input[id*=numThisEpidemic]").each(function () {
    $(this).blur(function () {
        var numRows = $('#numRows')[0].value;

        //calculate known left
        left = calculateKnownCardsLeft();
        $('#knownCardsLeft').text(left);

        //calculate final prob
        calculateAllProbabilities();
    })
})

$("#InfectionRate").each(function () {
    $(this).blur(function () {
        var numRows = $('#numRows')[0].value;
        //calculate final prob
        calculateAllProbabilities();
    })
})


//---------------------------------------------
//Aux calc functions
function calculateTotalSeenThisGame() {
    var total = 0;
    $("input[id*=numSoFar]").each(function () {
        total += (parseInt($(this)[0].value) || 0);
    })

    return total;
}


function calculateKnownCardsLeft() {
    var total = 0;
    //add all seen so far
    $("input[id*=numThisEpidemic]").each(function () {
        total += (parseInt($(this)[0].value) || 0);
    })

    //final value is (total known - this epidemic)
    total = (parseInt($("#totalKnownCards").text()) || 0) - total;
    
    return total;
}

function calculateAllProbabilities() {
    var numRows = $('#numRows')[0].value;
    //calculate final prob
    for (var i = 0; i < numRows; i++) {
        finalProb = Math.ceil(calculateProbability(i) * 100);
        $("#chance_" + i).text(finalProb + '%');
    }
}
function calculateProbability(i) {
    var prob = 0;

    var infectionRate = parseInt( $('#InfectionRate')[0].value ) || 0;
    var known = parseInt( $('#totalKnownCards').text() ) || 0;
    var soFar = parseInt( $('#numSoFar_' + i)[0].value ) || 0;
    var seen = parseInt( $('#numThisEpidemic_' + i)[0].value ) ||0;
    
    var Pw = 1;
    for (var i = 0; i < infectionRate; i++) {
        if (known-i < 1) {
            Pw = 1;
        } 
        else {
            Pw *= ((known - i) - (soFar - seen)) / (known - i) 
        }
        
    }

    var finalProb = 1 - Pw;

    return finalProb;
    
}

